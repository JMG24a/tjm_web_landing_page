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
        ${name}
        ${badge}
      </div>
    `;
    select.classList.remove("open");
    const temp = document.createElement('div');
    temp.innerHTML = name;
    const text = temp.textContent.trim();
    loadPayPercentage(text);
  });
});

document.addEventListener("click", (e) => {
  if (!select.contains(e.target)) {
    select.classList.remove("open");
  }
});

const payBtn = document.getElementById("pay");
payBtn.addEventListener("click", () => {
  const price = document.getElementById("product-price");
  const pricePay = price.textContent.trim()
  console.log("IS Rigth Here??", {
    priceProductWs,
    nameProductWs,
    colorProductWs,
    materialProduct,
    cantidadWs,
    percentagePayCategory
  })

  const producto = {
    name: nameProductWs,
    color: colorProductWs,
    material: materialProduct,
    cantidad: cantidadWs,
    method: methodPayProductWs
  };

  let mensaje =
  `✨ *Hola! Quiero completar mi pedido* ✨

  🧾 *Método de pago:* ${producto.method}

  🛍️ *Producto seleccionado:*`;

  mensaje += `
  • 🛏️ *${producto.name}*
    🎨 Color: ${producto.color}
    📦 Cantidad: ${producto.cantidad}
    💵 Precio: $${pricePay * producto.cantidad}
  `;

  mensaje += `
  📍 *Sede de retiro:* ${"sedes[telefonoSede]"}

  🙏 Gracias por su atención.`;
  // URL de WhatsApp
  const url = `https://wa.me/${580328399}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");

  window.location.href = "/";
})
