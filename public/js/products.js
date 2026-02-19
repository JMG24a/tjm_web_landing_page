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

function renderColors(colors, container) {
  container.innerHTML = "";

  colors.forEach((item, index) => {
    const dot = document.createElement("span");
    dot.style.background = item.color;
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
  document.getElementById("modal-img").src = `/image/${product.img}`;
  document.getElementById("modal-name").textContent = product.name;

  const desc = document.getElementById("modal-desc");
  const btn = document.getElementById("toggle");

  desc.textContent = product.desc;

  btn.onclick = () => {
    desc.classList.toggle("clamp");
    btn.textContent =
      desc.classList.contains("clamp") ? "Leer más" : "Leer menos";
  };

  document.getElementById("size").textContent = product.size || "";
}

function setupSofas(product) {
  const colors = document.getElementById("modal-colors");
  renderColors(product.colors, colors);
}

function setupMultimuebles(product) {
  const colors = document.getElementById("modal-colors");
  const openContainer = document.getElementById("modal-open");
  if(product.open){
    openContainer.classList.remove("modal-opens")
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
  const topContainer = document.getElementById("modal-top");
  let isFour = false; // estado toggle
  chairContainer.classList.remove("modal-opens")
  topContainer.classList.remove("modal-opens")
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
      changeModalImage(product.chairs_4[0].img);
      renderColors(product.chairs_4[position].colors, colors);
    } else {
      chairBtn.textContent = "Cuatro Sillas";
      changeModalImage(product.chairs_6[0].img);
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

function openProductModal(product, category) {
  const modal = document.getElementById("product-modal");

  setupBaseModal(product);

  switch (category) {
    case "multimuebles":
      setupMultimuebles(product);
      break;

    case "comedores":
      setupComedores(product);
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
}


// function openProductModal(product, category) {
//   console.log("🚀 ~ openProductModal ~ product:", product)
//   const modalImg = document.getElementById("modal-img");
//   const modal = document.getElementById("product-modal");
//   const size = document.getElementById("size");
//   size.innerHTML= `${product.size}`
//   // document.getElementById("product-modal").classList.remove("hidden");

//   // Imagen inicial
//   modalImg.src = `/image/${product.img}`;

//   document.getElementById("modal-name").textContent = product.name;
//   const modal_desc = document.getElementById("modal-desc");
//   const btn = document.getElementById("toggle");

//   modal_desc.textContent = product.desc;
//   btn.onclick = () => {
//     modal_desc.classList.toggle("clamp");
//     btn.textContent = modal_desc.classList.contains("clamp") ? "Leer más" : "Leer menos";
//   };

//   if(category == "multimuebles"){
//     const openContainer = document.getElementById("modal-open");
//     openContainer.innerHTML = "";

//     const colorsContainer = document.getElementById("modal-colors");
//     colorsContainer.innerHTML = "";

//     product.colors.forEach((item, index) => {
//       const span = document.createElement("span");
//       span.style.background = item.color;
//       span.classList.add("color-dot");

//       // 🔥 LISTENER CLAVE
//       span.addEventListener("click", () => {
//         changeModalImage(item.img);
//         setActiveColor(span);
//       });

//       // primer color activo
//       if (index === 0) {
//         span.classList.add("active");
//       }

//       colorsContainer.appendChild(span);
//     });

//     if(product.open){
//       openContainer.classList.remove("modal-opens")
//     }else{
//       openContainer.classList.add("modal-opens")
//     }

//     const spanOpen = document.createElement("span");
//     spanOpen.innerHTML = "Abrir";
//     spanOpen.classList.add("open-dot");

//     spanOpen.addEventListener("click", () => {
//       changeModalImage(product.open);
//     });

//     openContainer.appendChild(spanOpen);
//   }

//   if(category == "comedores"){
//     const chairContainer = document.getElementById("modal-chairs");
//     chairContainer.innerHTML = "";
//     chairContainer.classList.remove("modal-chairs")

//     const colorsContainer = document.getElementById("modal-colors");
//     colorsContainer.innerHTML = "";



//     const spanChair = document.createElement("span");
//     spanChair.innerHTML = "Cuatro Sillas";
//     spanChair.classList.add("open-dot");

//     spanChair.addEventListener("click", ()=>{
//       const colorsContainer = document.getElementById("modal-colors");
//       colorsContainer.innerHTML = "";

//       spanChair.innerHTML = "Seis Sillas";
//       spanChair.classList.add("open-dot");

//       product.chairs_4.forEach((item, index) => {
//         const span = document.createElement("span");
//         span.style.background = item.color;
//         span.classList.add("color-dot");

//         // 🔥 LISTENER CLAVE
//         span.addEventListener("click", () => {
//           changeModalImage(item.img);
//           setActiveColor(span);
//         });

//         // primer color activo
//         if (index === 0) {
//           span.classList.add("active");
//         }

//         colorsContainer.appendChild(span);
//       });
//       chairContainer.appendChild(spanChair);
//     })

//     product.chairs_6.forEach((item, index) => {
//       const span = document.createElement("span");
//       span.style.background = item.color;
//       span.classList.add("color-dot");

//       // 🔥 LISTENER CLAVE
//       span.addEventListener("click", () => {
//         changeModalImage(item.img);
//         setActiveColor(span);
//       });

//       // primer color activo
//       if (index === 0) {
//         span.classList.add("active");
//       }

//       colorsContainer.appendChild(span);
//     });
//     chairContainer.appendChild(spanChair);
//   }

//   if(category == "sofas"){
//     const colorsContainer = document.getElementById("modal-colors");
//     colorsContainer.innerHTML = "";

//     product.colors.forEach((item, index) => {
//       const span = document.createElement("span");
//       span.style.background = item.color;
//       span.classList.add("color-dot");

//       // 🔥 LISTENER CLAVE
//       span.addEventListener("click", () => {
//         changeModalImage(item.img);
//         setActiveColor(span);
//       });

//       // primer color activo
//       if (index === 0) {
//         span.classList.add("active");
//       }

//       colorsContainer.appendChild(span);
//     });
//   }

//   modal.classList.remove("hidden");
//   // reset animación
//   modal.classList.remove("show");
//   void modal.offsetWidth;
//   modal.classList.add("show");
// }

function closeModal() {
  const modal = document.getElementById("product-modal");
  modal.classList.remove("show");

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
  showTopBar()

  document.querySelector(".modal-close")?.addEventListener("click", closeModal);
  document.querySelector(".modal-backdrop")?.addEventListener("click", closeModal);

  const params = new URLSearchParams(window.location.search);
  const category = params.get("category") || "muebles";

  loadProductsByCategory(category);
  loadSliderByCategory(category)
}

initProducts()
