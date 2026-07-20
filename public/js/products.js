const priceElement = document.getElementById("product-price")

let sedesW = {
  "Ojeda": "584126158205",
  "San Pablo": "584228463448",
  "Barquisimeto": "584120213946",
}
let extra = 8
let camcolselected = 0
let priceBaseDiscount = 0
let productBaseWS
let idProductSelected = 0
let percentagePayCategory = 0
let priceProductWs = 0
let nameProductWs
let colorProductWs
let methodPayProductWs = "cashea"
let materialProductWs = "tela"
let cantidadWs = 1
let categoryProductWs
let locationWsSede
const porcentajesPago = {
  multimuebles: 28.78,
  comedores: 22,
  colchones: 24,
  dormitorios: 26,
  sofas: 28.78
};
const porcentajesPagoMethod = {
  "decontado": 20.35,
  "cashea": 28.78,
  "zelle": 3,
  "cash - binance": 0,
};

async function verificarSesion(id) {
  const form = document.querySelector(".form-contenedor");
  const price = document.getElementById("precioInput");

  if (localStorage.getItem("session_tjm")) {
    form.classList.remove("displayNoneSuggestPrice");
    const response = await fetch(`https://tjm-web-back.onrender.com/${id}`);
    // const response = await fetch(`https://tjmwebback-production.up.railway.app/${id}`);
    const data = await response.json();
    price.placeholder = data.precio;
  } else {
    form.classList.add("displayNoneSuggestPrice");
  }
}

function changeModalImage(img) {
  const modalImg = document.getElementById("modal-img");

  modalImg.style.opacity = 0;

  setTimeout(() => {
    modalImg.src = `/image/${img}`;
    modalImg.style.opacity = 1;
  }, 200);
}

function setActiveColor(activeSpan) {
  document
    .querySelectorAll(".modal-colors span")
    .forEach(span => span.classList.remove("active"));

  activeSpan.classList.add("active");
}

const calcularAumento = (monto, tasa) => {
  return Number((monto * (1 + tasa / 100)).toFixed(2));
};

const navigateToHome = (e) => {
  if (e) e.preventDefault();
  // Usamos .origin para asegurar que siempre vaya a la raíz absoluta
  window.location.href = window.location.origin;
};

const goHomeBtn = document.getElementById('go-home');
// Verificamos que el botón exista antes de asignarle el evento (evita errores en consola)
if (goHomeBtn) {
  goHomeBtn.addEventListener('click', navigateToHome);
}

// 1. Cargar precio del producto en USD
async function loadProductPrice(id, extras) {
  try {
    const off = document.getElementById("off");
    const response = await fetch(`https://tjm-web-back.onrender.com/${id}`);
    const data = await response.json();
    const priceUSD = calcularAumento(data.precio, extras);
    //precioGlobal
    if(porcentajesPagoMethod.cashea != extras){
      off.classList.remove("displayNone")
      off.innerHTML = `$${calcularAumento(data.precio, porcentajesPagoMethod.cashea)}`;
    }else{
      off.classList.add("displayNone")
    }
    priceProductWs = priceUSD;
    priceElement.dataset.usd = priceUSD; // Guardamos el precio original
    priceElement.dataset.mode = "usd"; // Estado inicial
    priceElement.innerHTML = `${priceUSD}$`;
  } catch (error) {
    console.error("Error cargando el producto:", error);
  }
}

async function loadProductPrices(ids = []) {
  try {
    const requests = ids.map(id =>
      // fetch(`https://tjmwebback-production.up.railway.app/${id}`)
      fetch(`https://tjm-web-back.onrender.com/${id}`)
      .then(res => res.json())
    );
    const results = await Promise.all(requests);
    const bcv = results.map(data => calcularAumento(data.precio, porcentajesPagoMethod.cashea));
    if(priceProductWs == 0){
      priceBaseDiscount = priceUSD
      console.log("🚀 ~ loadProductPrices ~ bcv camcolselected:", bcv, camcolselected)
    }
    priceProductWs = bcv[0]
    return bcv
  } catch (error) {
    console.error("Error cargando precios:", error);
    return [];
  }
}

function loadPayPercentage(metodo){
  const price = document.getElementById("product-price");
  methodPayProductWs = metodo.toLowerCase();
  switch (metodo) {
    case "Decontado":
      price.classList.remove("displayNone")
      price.innerHTML = '<span class="loader"></span>'
      loadProductPrice(idProductSelected, porcentajesPagoMethod.decontado)
      break;

    case "Cashea":
      // Sin descuento
      price.classList.remove("displayNone")
      price.innerHTML = '<span class="loader"></span>'
      loadProductPrice(idProductSelected, porcentajesPagoMethod.cashea)
      break;

    case "Zelle":
      // Quitar el porcentaje agregado previamente
      price.classList.remove("displayNone")
      price.innerHTML = '<span class="loader"></span>'
      loadProductPrice(idProductSelected, porcentajesPagoMethod.zelle)
      break;

    case "Cash - Binance":
      // Quitar el porcentaje agregado previamente
      price.classList.remove("displayNone")
      price.innerHTML = '<span class="loader"></span>'
      loadProductPrice(idProductSelected, 0)
      break;
    default:
      if(categoryProductWs == "colchones" || categoryProductWs == "dormitorios"){
        price.classList.remove("displayNone")
        price.innerHTML = '<span class="loader"></span>'
        loadProductPrice(`${idProductSelected}1`, porcentajesPagoMethod.cashea)
      }
      price.innerHTML = `$${priceProductWs}`;
      break;
  }
}

// 2. Obtener precio del dólar
async function getDollarRate() {
  try {
    const response = await fetch("https://ve.dolarapi.com/v1/dolares/oficial");
    const data = await response.json();
    return data.promedio;
  } catch (error) {
    console.error("Error obteniendo el dólar:", error); return null;
  }
}

function isFabricCategory(){
  if (categoryProductWs != "colchones" && categoryProductWs != "multimuebles" && categoryProductWs != 'comedores') {
    const fabricColor = document.getElementById("color_fabric_container");
    fabricColor.classList.remove("displayNone");
  }
}

function isOpenRopeCategory(){
  if (categoryProductWs == "multimuebles") {
    const ropeColor = document.getElementById("color_open_container");
    ropeColor.classList.remove("displayNone");
  }
}

function renderColors(colors, container) {
  container.innerHTML = "";
  let colorsOfMaterial = []
  if(categoryProductWs == "sofas" || categoryProductWs == "dormitorios"){
    colorsOfMaterial = colors.filter((item)=>(item.type == materialProductWs))
  }else{
    colorsOfMaterial = colors
  }
  colorsOfMaterial.forEach((item, index) => {
    const dot = document.createElement("span");
    dot.style.background = item.color;
    colorProductWs = item.name
    dot.className = "color-dot";

    dot.onclick = () => {
      changeModalImage(item.img);
      setActiveColor(dot);
    };

    if (index === 0) dot.classList.add("active");

    container.appendChild(dot);
  });
}

function setupBaseModal(product) {
  verificarSesion(product.id);
  idProductSelected = product.id;
  document.getElementById("modal-img").src = `/image/${product.img}`;
  // global name
  nameProductWs = product.name
  document.getElementById("modal-name").textContent = product.name;
}

async function guardarPrecio() {
  if (!localStorage.getItem("session_tjm")) {
    alert("No tienes permisos");
    return;
  }
  const nuevoPrecio = document.getElementById("precioInput").value;
  if (!nuevoPrecio) {
    alert("Debes ingresar un precio");
    return;
  }

  const body = {
    id: Number(idProductSelected),
    precio: Number(nuevoPrecio)
  };

  // const response = await fetch("https://tjmwebback-production.up.railway.app", {
  const response = await fetch("https://tjm-web-back.onrender.com", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  const data = await response.json();
  console.log("Respuesta del backend:", data);

  alert("Precio actualizado correctamente");
}

function setupSofas(product) {
  isFabricCategory()
  const colors = document.getElementById("modal-colors");
  const container_size = document.getElementById("container_size");
  container_size.classList.remove("displayNone");

  container_size.innerHTML = `
    <p>🪓 Madera Seca al Horno.</p>
    <p>🛌 Resortes Pocket.</p>
    <p>📄 Garantía de 1 año.</p>
    <p>🕓 30 dìas hàbiles.</p>
    <p>📦 Embalaje sin cargo.</p>
    <p class="size">
      <i>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343">
          <path d="M208-120q-37 0-62.5-25.5T120-208v-548q0-29 27-40.5t47 8.5l90 90-54 54 28 28 54-54 104 104-54 54 28 28 54-54 104 104-54 54 28 28 54-54 104 104-54 54 28 28 54-54 80 80q20 20 8.5 47T756-120H208Zm32-120h332L240-572v332Z"/>
        </svg>
      </i>
      <span id="size" class="size_text"></span>
    </p>
  `
  const size = document.getElementById("size");
  size.textContent = product.size || "";

  const price = document.getElementById("product-price");
  price.classList.remove("displayNone")
  price.innerHTML = '<span class="loader"></span>'
  loadProductPrice(product.id, porcentajesPagoMethod.cashea);
  renderColors(product.colors, colors);
}

function setupDormitorio(product) {
  isFabricCategory()
  const colors = document.getElementById("modal-colors");
  const topContainer = document.getElementById("modal-top");
  topContainer.className = "modal-top";
  const container_size = document.getElementById("container_size");

  if(categoryProductWs == "dormitorios"){

    container_size.classList.remove("displayNone");

    container_size.innerHTML = `
    <p>🪓 Madera Seca al Horno.</p>
    <p>📄 Garantía de 1 año.</p>
    <p>🕓 30 dìas hàbiles.</p>
    <p>📦 Embalaje sin cargo.</p>
    `
  }

  const price = document.getElementById("product-price");
  price.classList.remove("displayNone");
  price.innerHTML = '<span class="loader"></span>';

  const options = [
    { label: "Individual", position: 1, size: "100" },
    { label: "Matrimonial", position: 14, size: "140" },
    { label: "Queen", position: 16, size: "160" },
    { label: "King", position: 2, size: "200" }
  ];

  topContainer.innerHTML = "";

  // 1. Creamos el elemento Select
  const selectElement = document.createElement("select");
  selectElement.className = "select-trigger"; // Clase para darle estilos CSS

  // Arreglo en memoria para guardar las referencias de los datos y precios
  const optData = options.map((opt, index) => {
    const optionEl = document.createElement("option");
    optionEl.className = "option"; // Clase para darle estilos CSS
    optionEl.value = index; // Guardamos el índice como valor
    optionEl.textContent = `${opt.label.toUpperCase()} (Cargando...)`;

    selectElement.appendChild(optionEl);

    return {
      optionEl,
      position: opt.position,
      size: opt.size,
      label: opt.label,
      price: 0 // Se actualizará al cargar
    };
  });

  topContainer.appendChild(selectElement);

  // IDs completos para buscar precios
  const ids = optData.map(el => `${product.id}${el.position}`);

  // Cargar precios y actualizar el texto de las opciones del select
  loadProductPrices(ids).then(prices => {
    prices.forEach((priceValue, index) => {
      optData[index].price = priceValue;
      optData[index].optionEl.textContent = `${optData[index].label.toUpperCase()} - $${priceValue}`;
    });
    // Forzar la actualización de variables globales con el primer precio ya cargado
    seleccionarMedida(selectElement.value);
  }, 0);

  // 🔥 FUNCIÓN PARA SELECCIONAR UNA MEDIDA
  function seleccionarMedida(index) {
    priceProductWs = 0
    const selectedOpt = optData[index];
    if (!selectedOpt) return;

    // Guardar variables globales exactamente igual que antes
    priceProductWs = parseFloat(selectedOpt.price);
    nameProductWs = `${product.name} ${selectedOpt.label}`;
    idProductSelected = `${product.id}${selectedOpt.position}`;
    idProductSelected = Number(idProductSelected);

    resetPaymentSelect()
    loadPayPercentage(methodPayProductWs);
    verificarSesion(idProductSelected);
  }

  // Escuchar el cambio en el select
  selectElement.addEventListener("change", (e) => {
    seleccionarMedida(e.target.value);
  });

  // Selección inicial por defecto (posición 0)
  selectElement.value = 0;
  seleccionarMedida(0);

  renderColors(product.colors, colors);
}

function setupMultimuebles(product) {
  isOpenRopeCategory();

  const colors = document.getElementById("modal-colors_rope");
  const openContainer = document.getElementById("color_open_container");
  const openToggle = document.getElementById("materialToggleOpen");
  const thumb = openToggle.querySelector(".toggle-thumb");
  const container_size = document.getElementById("container_size");
  container_size.classList.remove("displayNone");

  container_size.innerHTML = `
    <p>📦 Embalaje sin cargo.</p>
    <p class="size">
      <i>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343">
          <path d="M208-120q-37 0-62.5-25.5T120-208v-548q0-29 27-40.5t47 8.5l90 90-54 54 28 28 54-54 104 104-54 54 28 28 54-54 104 104-54 54 28 28 54-54 104 104-54 54 28 28 54-54 80 80q20 20 8.5 47T756-120H208Zm32-120h332L240-572v332Z"/>
        </svg>
      </i>
      <span id="size" class="size_text"></span>
    </p>
  `;

  document.getElementById("size").textContent = product.size || "";

  const price = document.getElementById("product-price");
  price.classList.remove("displayNone");
  price.innerHTML = '<span class="loader"></span>';
  loadProductPrice(product.id, porcentajesPagoMethod.cashea);
  // Estado inicial del toggle
  openToggle.classList.add("active");
  thumb.textContent = "Abrir";
  renderColors(product.colors, colors);

  // Evento del toggle
  openToggle.addEventListener("click", () => {
    const leftLabel = document.querySelector(".toggle-left");
    const rightLabel = document.querySelector(".toggle-right");
    openToggle.classList.toggle("active");

    const isOpen = openToggle.classList.contains("active");

    if (isOpen) {
      thumb.textContent = "Abrir";
      rightLabel.textContent = "Abrir";
      leftLabel.textContent = "";
      changeModalImage(product.img);
    } else {
      thumb.textContent = "Cerrar";
      leftLabel.textContent = "Cerrar";
      rightLabel.textContent = "";
      changeModalImage(product.open);
    }
  });
}

function setupComedores(product) {
  const colors = document.getElementById("modal-colors");
  const chairContainer = document.getElementById("modal-chairs");
  chairContainer.classList.remove("displayNone");

  const container_size = document.getElementById("container_size");
  container_size.classList.remove("displayNone");

  container_size.innerHTML = `
    <p>🪓 Madera Seca al Horno.</p>
    <p>📄 Garantía de 1 año.</p>
    <p>🕓 30 dìas hàbiles.</p>
    <p>📦 Embalaje sin cargo.</p>
    <p class="size">
      <i>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343">
          <path d="M208-120q-37 0-62.5-25.5T120-208v-548q0-29 27-40.5t47 8.5l90 90-54 54 28 28 54-54 104 104-54 54 28 28 54-54 104 104-54 54 28 28 54-54 104 104-54 54 28 28 54-54 80 80q20 20 8.5 47T756-120H208Zm32-120h332L240-572v332Z"/>
        </svg>
      </i>
      <span id="size" class="size_text"></span>
    </p>
  `;

  const size = document.getElementById("size");
  size.textContent = product.size || "";

  const price = document.getElementById("product-price");
  price.classList.remove("displayNone");
  price.innerHTML = '<span class="loader"></span>';

  // Select para elegir cantidad de sillas
  const select = document.createElement("select");
  select.className = "select-trigger";

  select.innerHTML = `
    <option value="4">4 Sillas</option>
    <option value="6">6 Sillas</option>
  `;

  chairContainer.innerHTML = "";
  chairContainer.appendChild(select);

  // Función para actualizar según la selección
  function updateChairs(position) {
    const selected = Number(select.value);

    if (selected === 4) {
      loadProductPrice(`${product.id}4${position}`, porcentajesPagoMethod[methodPayProductWs]);
      idProductSelected = Number(`${product.id}4${position}`);
      changeModalImage(product.chairs_4[position].img);
      renderColors(product.chairs_4[position].colors, colors);
    } else {
      loadProductPrice(`${product.id}6${position}`, porcentajesPagoMethod[methodPayProductWs]);
      idProductSelected = Number(`${product.id}6${position}`);
      changeModalImage(product.chairs_6[position].img);
      renderColors(product.chairs_6[position].colors, colors);
    }
  }

  // Evento del select
  select.addEventListener("change", () => {
    updateChairs(0);
  });
  // Inicial
  updateChairs(0);
}


// function setupComedores(product) {
//   const colors = document.getElementById("modal-colors");
//   const chairContainer = document.getElementById("modal-chairs");
//   chairContainer.classList.remove("displayNone")

//   const container_size = document.getElementById("container_size");
//   container_size.classList.remove("displayNone");

//   container_size.innerHTML = `
//   <p>🪓 Madera Seca al Horno.</p>
//   <p>📄 Garantía de 1 año.</p>
//   <p>🕓 30 dìas hàbiles.</p>
//   <p>📦 Embalaje sin cargo.</p>
//   <p class="size">
//     <i>
//       <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343">
//         <path d="M208-120q-37 0-62.5-25.5T120-208v-548q0-29 27-40.5t47 8.5l90 90-54 54 28 28 54-54 104 104-54 54 28 28 54-54 104 104-54 54 28 28 54-54 104 104-54 54 28 28 54-54 80 80q20 20 8.5 47T756-120H208Zm32-120h332L240-572v332Z"/>
//       </svg>
//     </i>
//     <span id="size" class="size_text"></span>
//   </p>
//   `
//   const size = document.getElementById("size");
//   size.textContent = product.size || "";

//   const topContainer = document.getElementById("modal-top");
//   let isFour = false; // estado toggle
//   // chairContainer.classList.remove("modal-opens")
//   // topContainer.classList.remove("modal-opens")
//   topContainer.className = "modal-top";

//   // const topBtn1 = document.createElement("span");
//   // topBtn1.className = "span-top";
//   // const topBtn2 = document.createElement("span");
//   // topBtn2.className = "span-top";
//   // const topBtn3 = document.createElement("span");
//   // topBtn3.className = "span-top";

//   // topBtn1.textContent = "vidrio";
//   // topBtn2.textContent = "Pintado";
//   // topBtn3.textContent = "PVC";

//   const chairBtn = document.createElement("span");
//   chairBtn.className = "open-dot";
//   function updateChairs(position) {
//     if (isFour) {
//       chairBtn.textContent = "Seis Sillas";

//       const price = document.getElementById("product-price");
//       price.innerHTML = '<span class="loader"></span>'
//       loadProductPrice(`${product.id}4${position}`, porcentajesPagoMethod.cashea);
//       idProductSelected = Number(`${product.id}4${position}`);
//       changeModalImage(product.chairs_4[position].img);
//       renderColors(product.chairs_4[position].colors, colors);
//     } else {
//       chairBtn.textContent = "Cuatro Sillas";

//       const price = document.getElementById("product-price");
//       price.classList.remove("displayNone")
//       price.innerHTML = '<span class="loader"></span>'
//       loadProductPrice(`${product.id}6${position}`, porcentajesPagoMethod.cashea);
//       idProductSelected = Number(`${product.id}6${position}`);
//       changeModalImage(product.chairs_6[position].img);
//       renderColors(product.chairs_6[position].colors, colors);
//     }
//   }
//   chairBtn.onclick = () => {
//     isFour = !isFour;
//     updateChairs(0);
//   };

//   // topBtn1.onclick = () => { updateChairs(0) }
//   // topBtn2.onclick = () => { updateChairs(1) }
//   // topBtn3.onclick = () => { updateChairs(2) }

//   chairContainer.innerHTML = "";
//   chairContainer.appendChild(chairBtn);

//   // topContainer.innerHTML = "";
//   // topContainer.appendChild(topBtn1);
//   // topContainer.appendChild(topBtn2);
//   // topContainer.appendChild(topBtn3);
//   updateChairs(0); // inicial
// }

// 3. Toggle USD ↔ Bs
priceElement.addEventListener("click", async () => {
  const mode = priceElement.dataset.mode;
  const usdPrice = parseFloat(priceElement.dataset.usd);
  if (mode === "usd") {
    // Convertir a Bs
    const dollarRate = await getDollarRate();
    if (!dollarRate) return;

    const priceBs = usdPrice * dollarRate;
    priceElement.innerHTML = `${priceBs.toFixed(2)} BsS`;
    priceElement.dataset.mode = "bs";
  }
  else { // Volver a USD
    priceElement.innerHTML = `${usdPrice}$`;
    priceElement.dataset.mode = "usd";
  }
});

function renderSuggestions(product, category) {
  const suggestContainer = document.getElementById("suggest");
  const suggestTitle = document.getElementById("suggestTitle");
  suggestContainer.innerHTML = ""; // limpiar

  if (!product.suggest || product.suggest.length === 0) return;
  suggestTitle.classList.remove("displayNoneSuggest");

  product.suggest.forEach(id => {
    const related = PRODUCTS[category].find(p => p.id === id);
    if (!related) return;

    const card = document.createElement("div");
    card.classList.add("suggest-card");

    card.innerHTML = `
      <img src="/image/${related.img}" alt="${related.name}">
      <p>${related.name}</p>
    `;

    // abrir modal del producto sugerido
    card.onclick = () => openProductModal(related, related.category);

    suggestContainer.appendChild(card);
  });
}

function openProductModal(product, category) {
  showTopBarModal()
  const modal = document.getElementById("product-modal")
  setupBaseModal(product);
  productBaseWS = product;
  categoryProductWs = category;
  switch (category) {
    case "multimuebles":
      loadPayPercentage(methodPayProductWs)
      setupMultimuebles(product);
      break;

    case "comedores":
      loadPayPercentage(methodPayProductWs)
      setupComedores(product);
      break;

    case "colchones":
    case "dormitorios":
      loadPayPercentage('default')
      setupDormitorio(product);
      break;

    case "sofas":
    default:
      loadPayPercentage(methodPayProductWs)
      setupSofas(product);
  }

  modal.classList.remove("hidden");
  // reset animación
  modal.classList.remove("show");
  void modal.offsetWidth;
  modal.classList.add("show");

  renderSuggestions(product, category);
}

function resetMultimuebles() {
  const colors = document.getElementById("modal-colors_rope");
  const openContainer = document.getElementById("color_open_container");
  const openToggle = document.getElementById("materialToggleOpen");
  const thumb = openToggle.querySelector(".toggle-thumb");
  const leftLabel = document.querySelector(".toggle-left");
  const rightLabel = document.querySelector(".toggle-right");

  // Reset toggle
  openToggle.classList.remove("active");
  thumb.textContent = "Abrir";

  // Reset labels
  leftLabel.textContent = "";
  rightLabel.textContent = "Abrir";

  // Reset colores
  colors.innerHTML = "";

  // Reset contenedor
  openContainer.classList.add("displayNone");

  // Reset imagen a un placeholder o vacío
  changeModalImage(""); // si quieres dejar sin imagen
}


function resetPaymentSelect() {
  const off = document.getElementById("off");
  const paymentSelect = document.getElementById("paymentSelect");
  const selectedOption = paymentSelect.querySelector(".selected-option");
  methodPayProductWs = "Cashea"
  priceProductWs = 0
  // Restaurar HTML original del trigger
  selectedOption.innerHTML = `
    <div class="selected-wrapper">
      <img src="https://media.licdn.com/dms/image/v2/D4D0BAQEWn9nf5D2UBw/company-logo_200_200/company-logo_200_200/0/1664637447675?e=2147483647&v=beta&t=7FTDjI3a0GfZfQt2rTyDlJ62OjS4GVQ7RACFFohMFww" alt="Cashea">
      <span class="method-name">Cashea</span>
      <span class="badge">40% Inicial</span>
    </div>
  `;

  // Restaurar método global
  metodoSeleccionado = "Cashea";
  off.classList.add("displayNone")
  // Cerrar el dropdown si quedó abierto
  paymentSelect.classList.remove("open");
}


function closeModal() {
  const modal = document.getElementById("product-modal");
  modal.classList.remove("show");

  // 🔥 Resetear select de método de pago
  resetPaymentSelect();
  resetMultimuebles();

  setTimeout(() => {
    modal.classList.add("hidden");
  }, 400);
}

function initProductsObserver() {
  const cards = document.querySelectorAll('.furniture-card');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.55 }
  );
  cards.forEach((card) => observer.observe(card));
}

function loadSliderByCategory(category) {
  const welcome = document.querySelector(".sliders");
  const slogan1 = document.querySelector(".slogan-main");
  const slogan2 = document.querySelector(".slogan-sub");
  const select = WELCOME[category] || [];

  welcome.innerHTML = `
    <picture>
      <source media="(max-width: 768px)" srcset="${select.image4_5}">
      <source media="(max-width: 1200px)" srcset="${select.image16_9}">
      <img src="${select.image21_9}" alt="Mueble premium">
    </picture>
  `;
  slogan1.innerHTML = select.slogan_1;
  slogan2.innerHTML = select.slogan_2;
}

function loadProductsByCategory(category) {
  const grid = document.querySelector(".furniture-grid");
  grid.innerHTML = "";
  const products = PRODUCTS[category] || [];

  products.forEach((product) => {
    const card = document.createElement("article");
    card.className = "furniture-card";
    card.innerHTML = `
      <img src="/image/${product.img}" alt="${product.name}">
      <h4>${product.name}</h4>
    `;
    card.addEventListener("click", () => {
      openProductModal(product, category);
    });
    grid.appendChild(card);
  });
  initProductsObserver();
}

function initProducts() {
  showTopBarProduct()

  document.querySelector(".modal-close")?.addEventListener("click", closeModal);
  document.querySelector(".modal-backdrop")?.addEventListener("click", closeModal);

  const params = new URLSearchParams(window.location.search);
  const category = params.get("category") || "muebles";

  loadProductsByCategory(category);
  loadSliderByCategory(category)
}

initProducts()
