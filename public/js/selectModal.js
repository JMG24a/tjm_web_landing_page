let metodoSeleccionado = "Cashea";

const select = document.getElementById("paymentSelect");
const trigger = select.querySelector(".select-trigger");
const selectedOption = select.querySelector(".selected-option");
const options = select.querySelectorAll(".option");

trigger.addEventListener("click", () => {
  select.classList.toggle("open");
});

options.forEach(opt => {
  opt.addEventListener("click", () => {
    metodoSeleccionado = opt.dataset.value;
    const img = opt.querySelector("img")?.outerHTML || "";
    const name = opt.querySelector(".method-name")?.outerHTML || "";
    const badge = opt.querySelector(".badge")?.outerHTML || "";
    selectedOption.innerHTML = `
      <div class="selected-wrapper">
        ${img}
        <div method-body background_zelle>
          ${name}
          ${badge}
        </div>
      </div>
    `;
    select.classList.remove("open");
    const temp = document.createElement('div');
    temp.innerHTML = name;
    const text = temp.textContent.trim();
    methodPayProductWs = text;
    loadPayPercentage(text);
  });
});

document.addEventListener("click", (e) => {
  if (!select.contains(e.target)) {
    select.classList.remove("open");
  }
});

let sedeSeleccionada = "SanPablo";

const locationSelect = document.getElementById("locationSelect");
const triggerLoc = locationSelect.querySelector(".select-trigger");
const selectedLoc = locationSelect.querySelector(".selected-option");
const optionsLoc = locationSelect.querySelectorAll(".option");

triggerLoc.addEventListener("click", () => {
  locationSelect.classList.toggle("open");
});

optionsLoc.forEach(opt => {
  opt.addEventListener("click", () => {
    sedeSeleccionada = opt.dataset.value;
    const img = opt.querySelector("img")?.outerHTML || "";
    const name = opt.querySelector(".method-name")?.outerHTML || "";
    selectedLoc.innerHTML = `
      <div class="selected-wrapper">
        ${img}
        ${name}
      </div>
    `;
    locationSelect.classList.remove("open");
    const temp = document.createElement('div');
    temp.innerHTML = name;
    const text = temp.textContent.trim();
    locationWsSede = text
  });
});

document.addEventListener("click", (e) => {
  if (!locationSelect.contains(e.target)) {
    locationSelect.classList.remove("open");
  }
});

const materialToggle = document.getElementById("materialToggle");
const thumb = materialToggle.querySelector(".toggle-thumb");

materialToggle.addEventListener("click", () => {
  materialToggle.classList.toggle("active");
  const colors = document.getElementById("modal-colors");
  const leftLabel = document.querySelector(".toggle-left");
  const rightLabel = document.querySelector(".toggle-right");

  if (materialToggle.classList.contains("active")) {
    materialProductWs = "cuero";
    thumb.textContent = "Cuero";

    // Ocultar texto del lado seleccionado
    rightLabel.textContent = "";
    // Restaurar el texto del lado no seleccionado
    leftLabel.textContent = "Tela";
  } else {
    materialProductWs = "tela";
    thumb.textContent = "Tela";

    // Ocultar texto del lado seleccionado
    leftLabel.textContent = "";
    // Restaurar el texto del lado no seleccionado
    rightLabel.textContent = "Cuero";
  }

  renderColors(productBaseWS.colors, colors)
});


const payBtn = document.getElementById("pay");
payBtn.addEventListener("click", () => {
  console.log("IS Rigth Here??", {
    priceProductWs,
    nameProductWs,
    colorProductWs,
    materialProductWs,
    cantidadWs,
    percentagePayCategory
  })

  const producto = {
    name: nameProductWs,
    color: colorProductWs,
    material: materialProductWs,
    cantidad: cantidadWs,
    method: methodPayProductWs
  };

  let mensaje =
`✨ *Hola! Quiero completar mi pedido* ✨

🧾 *Método de pago:* ${producto.method}

🛍️ *Producto seleccionado:*
• 🛏️ *${producto.name}*
  🎨 Color: ${producto.color}
  🎨 Material: ${producto.material}
  📦 Cantidad: ${producto.cantidad}
  💵 Precio: $${priceProductWs * producto.cantidad}

📍 *Sede de retiro:* ${locationWsSede}

🙏 Gracias por su atención.`;

// URL de WhatsApp
const telefonoWS = "584120328399";
const url = `https://wa.me/${telefonoWS}?text=${encodeURIComponent(mensaje)}`;
window.open(url, "_blank");

window.location.href = "/";

})

