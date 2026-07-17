const priceElement = document.getElementById("product-price")

let sedesW = {
  "Ojeda": "584126158205",
  "San Pablo": "584228463448",
  "Barquisimeto": "584120213946",
}
let productBaseWS
let idProductSelected = 0
let percentagePayCategory = 0
let priceProductWs = 0
let nameProductWs
let colorProductWs
let methodPayProductWs = "Transferencia"
let materialProductWs = "tela"
let cantidadWs = 1
let categoryProductWs
let locationWsSede
const porcentajesPago = {
  multimuebles: 40,
  comedores: 40,
  colchones: 40,
  dormitorios: 40,
  sofas: 25
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
async function loadProductPrice(id) {
  try {
    percentagePayCategory = porcentajesPago[categoryProductWs]
    // const response = await fetch(`https://tjmwebback-production.up.railway.app/${id}`);
    const response = await fetch(`https://tjm-web-back.onrender.com/${id}`);
    const data = await response.json();
    pricePlus5 = calcularAumento(data.precio, 5);
    console.log("Precio base del producto:", categoryProductWs, priceProductWs, porcentajesPago[categoryProductWs]);
    const porcentage = porcentajesPago[categoryProductWs] || 40; // porcentaje según categoría
    const priceUSD = calcularAumento(pricePlus5, porcentage);
    //precioGlobal
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
    percentagePayCategory = porcentajesPago[categoryProductWs]
    const porcentage = porcentajesPago[categoryProductWs] || 40; // porcentaje según categoría

    const requests = ids.map(id =>
      // fetch(`https://tjmwebback-production.up.railway.app/${id}`)
      fetch(`https://tjm-web-back.onrender.com/${id}`)
      .then(res => res.json())
    );
    const results = await Promise.all(requests);

    const newR = results.map(data => calcularAumento(data.precio, 5));
    const bcv = newR.map(data => calcularAumento(data, porcentage));

    priceProductWs = bcv[0]
    return bcv
  } catch (error) {
    console.error("Error cargando precios:", error);
    return [];
  }
}

async function loadPayPercentage(metodo){
  const price = document.getElementById("product-price");
  const off = document.getElementById("off");
  let precioFinal = priceProductWs;
  methodPayProductWs = metodo
  switch (metodo) {
    case "Transferencia":
    case "Cashea":
      // Sin descuento
      off.classList.add("displayNone")
      price.classList.remove("displayNone")
      price.innerHTML = '<span class="loader"></span>'
      loadProductPrice(idProductSelected)
      break;

    case "Zelle":
    case "Binance":
      // Quitar el porcentaje agregado previamente
      price.classList.remove("displayNone")
      price.innerHTML = '<span class="loader"></span>'
      await loadProductPrice(idProductSelected)
      const factor = 1 + (percentagePayCategory / 100);
      price.innerHTML = `$${(priceProductWs / factor).toFixed(2)}`;
      off.classList.remove("displayNone")
      off.innerHTML = `$${(priceProductWs).toFixed(2)}`;
      priceProductWs = `${(priceProductWs / factor).toFixed(2)}`
      break;
    default:
      if(categoryProductWs == "colchones" || categoryProductWs == "dormitorios"){
        price.classList.remove("displayNone")
        price.innerHTML = '<span class="loader"></span>'
        await loadProductPrice(`${idProductSelected}1`)
      }
      off.classList.add("displayNone")
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

function renderColors(colors, container) {
  isFabricCategory()
  container.innerHTML = "";

  const colorsOfMaterial = colors.filter((item)=>(item.type == materialProductWs))


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

  // const desc = document.getElementById("modal-desc");
  // const btn = document.getElementById("toggle");

  // desc.textContent = product.desc;

  // btn.onclick = () => {
    // desc.classList.toggle("clamp");
    // btn.textContent =
      // desc.classList.contains("clamp") ? "Leer más" : "Leer menos";
  // };
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
  const colors = document.getElementById("modal-colors");
  const container_size = document.getElementById("container_size");
  container_size.classList.remove("displayNone");

  const size = document.getElementById("size");
  size.textContent = product.size || "";

  const price = document.getElementById("product-price");
  price.classList.remove("displayNone")
  price.innerHTML = '<span class="loader"></span>'
  loadProductPrice(product.id);
  renderColors(product.colors, colors);
}

// function setupDormitorio(product) {
//   const colors = document.getElementById("modal-colors");
//   const topContainer = document.getElementById("modal-top");
//   topContainer.className = "modal-top";

//   const price = document.getElementById("product-price");
//   price.classList.remove("displayNone");
//   price.innerHTML = '<span class="loader"></span>';

//   const options = [
//     { label: "Individual", position: 1, size: "100" },
//     { label: "Matrimonial", position: 14, size: "140" },
//     { label: "Queen", position: 16, size: "160" },
//     { label: "King", position: 2, size: "200" }
//   ];

//   topContainer.innerHTML = "";
//   // 🔥 CUSTOM SELECT (igual al resto de tu app)
//   const customSelect = document.createElement("div");
//   customSelect.className = "custom-select-medidas";

//   // customSelect.innerHTML = `
//   //   <div class="select-trigger">
//   //     <div class="selected-option option">
//   //       <img src="https://i.pinimg.com/564x/4f/a2/62/4fa262c79f61d8d6d8849b5503f04d9b.jpg" alt="Binance">
//   //       <span class="method-name">Cargando...</span>
//   //       <span class="arrow">▼</span>
//   //     </div>
//   //   <div class="select-options"></div>
//   // `;

//   customSelect.innerHTML = `
//     <div class="select-trigger">
//       <div class="selected-option option">
//         <img src="https://i.pinimg.com/564x/4f/a2/62/4fa262c79f61d8d6d8849b5503f04d9b.jpg" alt="Medida">
//         <span class="method-name">Cargando...</span>
//       </div>
//       <span class="arrow">▼</span>
//     </div>

//     <div class="select-options"></div>
//   `;


//   topContainer.appendChild(customSelect);

//   const selectOptionsContainer = customSelect.querySelector(".select-options");
//   const selectedOption = customSelect.querySelector(".selected-option .method-name");

//   // 🔥 Arreglo en memoria igual que antes
//   const optData = options.map((opt, index) => ({
//     index,
//     position: opt.position,
//     size: opt.size,
//     label: opt.label,
//     price: 0
//   }));

//   // IDs completos para buscar precios
//   const ids = optData.map(el => `${product.id}${el.position}`);

//   // 🔥 Cargar precios
//   loadProductPrices(ids).then(prices => {
//     prices.forEach((priceValue, index) => {
//       optData[index].price = priceValue;

//       // Crear opción visual igual a tus selects
//       const optionEl = document.createElement("div");
//       optionEl.className = "option";
//       optionEl.dataset.value = index;

//       optionEl.innerHTML = `
//         <span class="method-name">${optData[index].label}</span>
//         <span class="badge">$${priceValue}</span>
//       `;

//       // Evento de selección
//       optionEl.onclick = () => {
//         selectedOption.textContent = `${optData[index].label} - $${priceValue}`;
//         seleccionarMedida(index);
//       };

//       selectOptionsContainer.appendChild(optionEl);
//     });

//     // Selección inicial
//     selectedOption.textContent = `${optData[0].label} - $${optData[0].price}`;
//     seleccionarMedida(0);
//   });

//   // 🔥 FUNCIÓN PARA SELECCIONAR UNA MEDIDA (idéntica a tu versión)
//   function seleccionarMedida(index) {
//     const selectedOpt = optData[index];
//     if (!selectedOpt) return;

//     priceProductWs = parseFloat(selectedOpt.price);
//     nameProductWs = `${product.name} ${selectedOpt.label}`;
//     idProductSelected = Number(`${product.id}${selectedOpt.position}`);

//     loadPayPercentage(methodPayProductWs);
//     verificarSesion(idProductSelected);
//   }

//   renderColors(product.colors, colors);
// }

// document.addEventListener("click", (e) => {
//   const select = document.querySelector(".custom-select-medidas");

//   if (!select) return;

//   if (select.contains(e.target)) {
//     select.classList.toggle("open");
//   } else {
//     select.classList.remove("open");
//   }
// });


function setupDormitorio(product) {
  const colors = document.getElementById("modal-colors");
  const topContainer = document.getElementById("modal-top");
  topContainer.className = "modal-top";

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
  selectElement.className = "select-medidas"; // Clase para darle estilos CSS

  // Arreglo en memoria para guardar las referencias de los datos y precios
  const optData = options.map((opt, index) => {
    const optionEl = document.createElement("option");
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
  });

  // 🔥 FUNCIÓN PARA SELECCIONAR UNA MEDIDA
  function seleccionarMedida(index) {
    const selectedOpt = optData[index];
    if (!selectedOpt) return;

    // Guardar variables globales exactamente igual que antes
    priceProductWs = parseFloat(selectedOpt.price);
    nameProductWs = `${product.name} ${selectedOpt.label}`;
    idProductSelected = `${product.id}${selectedOpt.position}`;
    idProductSelected = Number(idProductSelected);

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

// function setupDormitorio(product) {
//   const colors = document.getElementById("modal-colors");
//   const topContainer = document.getElementById("modal-top");
//   topContainer.className = "modal-top";

//   const price = document.getElementById("product-price");
//   price.classList.remove("displayNone")
//   price.innerHTML = '<span class="loader"></span>'

//   const options = [
//     { label: "Individual", position: 1, size: "100" },
//     { label: "Matrimonial", position: 14, size: "140" },
//     { label: "Queen", position: 16, size: "160" },
//     { label: "King", position: 2, size: "200" }
//   ];

//   topContainer.innerHTML = "";

//   const btnElements = options.map(opt => {
//     const wrapper = document.createElement("div");
//     wrapper.className = "banner";

//     const contentWrapper = document.createElement("div");
//     contentWrapper.className = "content-wrapper";

//     const labelBox = document.createElement("div");
//     labelBox.className = "label-box";
//     const textBlue = document.createElement("span");
//     textBlue.className = "text-blue";
//     textBlue.textContent = opt.label.toUpperCase();
//     labelBox.appendChild(textBlue);

//     const priceBox = document.createElement("div");
//     priceBox.className = "price-box";
//     const priceValue = document.createElement("span");
//     priceValue.className = "price-value";
//     priceValue.textContent = "cargando...";
//     priceBox.appendChild(priceValue);

//     contentWrapper.appendChild(labelBox);
//     contentWrapper.appendChild(priceBox);
//     wrapper.appendChild(contentWrapper);
//     topContainer.appendChild(wrapper);

//     return { wrapper, priceTag: priceValue, position: opt.position, size: opt.size, label: opt.label };
//   });

//   // IDs completos para buscar precios
//   const ids = btnElements.map(el => `${product.id}${el.position}`);

//   // Cargar precios
//   loadProductPrices(ids).then(prices => {
//     prices.forEach((price, index) => {
//       btnElements[index].priceTag.textContent = `${price}$`;
//     });
//   });

//   // 🔥 FUNCIÓN PARA SELECCIONAR UNA MEDIDA
//   function seleccionarMedida(index) {
//     btnElements.forEach((el, i) => {
//       el.wrapper.classList.toggle("selected", i === index);
//     });

//     // Guardar variables globales
//     priceProductWs = parseFloat(btnElements[index].priceTag.textContent.replace("$", ""));
//     nameProductWs = `${product.name} ${btnElements[index].label}`;
//     idProductSelected = `${product.id}${btnElements[index].position}`;
//     idProductSelected = Number(idProductSelected);
//     loadPayPercentage(methodPayProductWs)
//     verificarSesion(idProductSelected)
//   }

//   // Asignar eventos de click
//   btnElements.forEach((el, index) => {
//     el.wrapper.addEventListener("click", () => seleccionarMedida(index));
//   });

//   // Seleccionar la primera opción por defecto
//   seleccionarMedida(0);

//   renderColors(product.colors, colors);
// }

function setupMultimuebles(product) {
  const colors = document.getElementById("modal-colors");
  const openContainer = document.getElementById("modal-open");

  const container_size = document.getElementById("container_size");
  container_size.classList.remove("displayNone");
  const size = document.getElementById("size");
  size.textContent = product.size || "";

  const price = document.getElementById("product-price");
  price.classList.remove("displayNone")
  price.innerHTML = '<span class="loader"></span>'
  loadProductPrice(product.id);

  if(product.open){
    // openContainer.classList.remove("modal-opens")
    openContainer.classList.remove("displayNone")
  }else{
    openContainer.classList.add("modal-opens")
  }
  renderColors(product.colors, colors);
  openContainer.innerHTML = "";
  if (product.open) {
    const btn = document.createElement("span");
    btn.textContent = "Abrir";
    btn.className = "open-dot";
    btn.onclick = () => changeModalImage(product.open);
    openContainer.appendChild(btn);
  }
}

function setupComedores(product) {
  const colors = document.getElementById("modal-colors");
  const chairContainer = document.getElementById("modal-chairs");
  chairContainer.classList.remove("displayNone")

  const container_size = document.getElementById("container_size");
  container_size.classList.remove("displayNone");
  const size = document.getElementById("size");
  size.textContent = product.size || "";

  const topContainer = document.getElementById("modal-top");
  let isFour = false; // estado toggle
  // chairContainer.classList.remove("modal-opens")
  // topContainer.classList.remove("modal-opens")
  topContainer.className = "modal-top";

  const topBtn1 = document.createElement("span");
  topBtn1.className = "span-top";
  const topBtn2 = document.createElement("span");
  topBtn2.className = "span-top";
  const topBtn3 = document.createElement("span");
  topBtn3.className = "span-top";

  topBtn1.textContent = "vidrio";
  topBtn2.textContent = "Pintado";
  topBtn3.textContent = "PVC";

  const chairBtn = document.createElement("span");
  chairBtn.className = "open-dot";
  function updateChairs(position) {
    if (isFour) {
      chairBtn.textContent = "Seis Sillas";

      const price = document.getElementById("product-price");
      price.innerHTML = '<span class="loader"></span>'
      loadProductPrice(`${product.id}4${position}`);

      changeModalImage(product.chairs_4[position].img);
      renderColors(product.chairs_4[position].colors, colors);
    } else {
      chairBtn.textContent = "Cuatro Sillas";

      const price = document.getElementById("product-price");
      price.classList.remove("displayNone")
      price.innerHTML = '<span class="loader"></span>'
      // loadProductPrice(`${product.id}6${position}`);
      console.log("chair 6 position: ", position)
      console.log("chair 6 position color: ", product.chairs_6[position].img)
      console.log("chair 6 position: colors", colors)
      changeModalImage(product.chairs_6[position].img);
      renderColors(product.chairs_6[position].colors, colors);
    }
  }
  chairBtn.onclick = () => {
    isFour = !isFour;
    updateChairs(0);
  };

  topBtn1.onclick = () => { updateChairs(0) }
  topBtn2.onclick = () => { updateChairs(1) }
  topBtn3.onclick = () => { updateChairs(2) }

  chairContainer.innerHTML = "";
  chairContainer.appendChild(chairBtn);

  topContainer.innerHTML = "";
  topContainer.appendChild(topBtn1);
  topContainer.appendChild(topBtn2);
  topContainer.appendChild(topBtn3);
  updateChairs(0); // inicial
}

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
  productBaseWS = product
  categoryProductWs = category
  loadPayPercentage("default")
  switch (category) {
    case "multimuebles":
      setupMultimuebles(product);
      break;

    case "comedores":
      setupComedores(product);
      break;

    case "colchones":
    case "dormitorios":
      setupDormitorio(product);
      break;

    case "sofas":
    default:
      setupSofas(product);
  }

  modal.classList.remove("hidden");
  // reset animación
  modal.classList.remove("show");
  void modal.offsetWidth;
  modal.classList.add("show");

  renderSuggestions(product, category);
}

function resetPaymentSelect() {
  const paymentSelect = document.getElementById("paymentSelect");
  const selectedOption = paymentSelect.querySelector(".selected-option");

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
  // Cerrar el dropdown si quedó abierto
  paymentSelect.classList.remove("open");
}


function closeModal() {
  const modal = document.getElementById("product-modal");
  modal.classList.remove("show");

  // 🔥 Resetear select de método de pago
  resetPaymentSelect();

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
      <h3>${product.name}</h3>
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
