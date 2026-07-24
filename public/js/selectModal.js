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

// const OpenToggle = document.getElementById("materialToggleOpen");
// const thumb = materialToggle.querySelector(".toggle-thumb");

// materialToggle.addEventListener("click", () => {
//   materialToggle.classList.toggle("active");
//   const colors = document.getElementById("modal-colors_rope");
//   const leftLabel = document.querySelector(".toggle-left");
//   const rightLabel = document.querySelector(".toggle-right");

//   if (materialToggle.classList.contains("active")) {
//     thumb.textContent = "Abrir";
//     // Ocultar texto del lado seleccionado
//     rightLabel.textContent = "";
//     // Restaurar el texto del lado no seleccionado
//     leftLabel.textContent = "Cerrar";
//   } else {
//     thumb.textContent = "Cerrar";
//     // Ocultar texto del lado seleccionado
//     leftLabel.textContent = "";
//     // Restaurar el texto del lado no seleccionado
//     rightLabel.textContent = "Abrir";
//   }

//   renderColors(productBaseWS.colors, colors)
// });


const payBtn = document.getElementById("pay");
// payBtn.addEventListener("click", () => {
//   const producto = {
//     name: nameProductWs,
//     color: colorProductWs,
//     material: materialProductWs,
//     cantidad: cantidadWs,
//     method: methodPayProductWs
//   };

//   let mensaje =
// `✨ *Hola! Quiero completar mi pedido* ✨

// 🧾 *Método de pago:* ${producto.method}

// 🛍️ *Producto seleccionado:*
// • 🛏️ *${producto.name}*
//   🎨 Color: ${producto.color}
//   🎨 Material: ${producto.material}
//   📦 Cantidad: ${producto.cantidad}
//   💵 Precio: $${priceProductWs * producto.cantidad}

// 📍 *Sede de retiro:* ${locationWsSede}

// 🙏 Gracias por su atención.`;

//   // URL de WhatsApp
//   const url = `https://wa.me/${sedesW[locationWsSede]}?text=${encodeURIComponent(mensaje)}`;
//   window.open(url, "_blank");

//   window.location.href = "/";
// })

payBtn.addEventListener("click", () => {
  // 1️⃣ VALIDAR SEDE
  if (!locationWsSede || locationWsSede.trim() === "") {
    alert("Por favor selecciona una sede antes de continuar.");
    return;
  }

  // 2️⃣ ARMAR OBJETO BASE
  const producto = {
    name: nameProductWs,
    color: colorProductWs,
    material: materialProductWs,
    cantidad: cantidadWs,
    method: methodPayProductWs
  };

  // 3️⃣ ELIMINAR CAMPOS SEGÚN CATEGORÍA
  let colorLine = `🎨 Color: ${producto.color}`;
  let materialLine = `🎨 Material: ${producto.material}`;

  if (categoryProductWs === "colchones") {
    // colchones → eliminar color y material
    colorLine = "";
    materialLine = "";
  } else if (categoryProductWs === "multimuebles") {
    // multimuebles → eliminar solo material
    materialLine = "";
  }

  // 4️⃣ CONSTRUIR MENSAJE DINÁMICO
  let mensaje =
`✨ *Hola! Quiero completar mi pedido* ✨

🧾 *Método de pago:* ${producto.method}

🛍️ *Producto seleccionado:*
• 🛏️ *${producto.name}*
${colorLine ? "  " + colorLine + "\n" : ""}
${materialLine ? "  " + materialLine + "\n" : ""}
  📦 Cantidad: ${producto.cantidad}
  💵 Precio: $${priceProductWs * producto.cantidad}
  ${producto.method == "cashea" ? "🟡 inicial: $" + ((priceProductWs * producto.cantidad)/100)*40 + "\n" : ""}
  ${producto.method == "cashea" ? "🟡 3 Cuotas: $" + (priceProductWs-(((priceProductWs * producto.cantidad)/100)*40))/3 + "\n" : ""}

📍 *Sede de retiro:* ${locationWsSede}

🙏 Gracias por su atención.`;

  // 5️⃣ URL DE WHATSAPP
  const safeMessage = mensaje.replace(/[\u{1F300}-\u{1FAFF}]/gu, (emoji) =>
    String.fromCodePoint(emoji.codePointAt(0))
  );

  const url = `https://wa.me/${sedesW[locationWsSede]}?text=${encodeURIComponent(safeMessage)}`;
  window.open(url, "_blank");

  window.location.href = "/";


  // const url = `https://wa.me/${sedesW[locationWsSede]}?text=${encodeURIComponent(mensaje)}`;
  // window.open(url, "_blank");

  // window.location.href = "/";
});
