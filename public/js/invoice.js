const porcentajesPago = {
  Transferencia: 0,
  Cashea: 0,
  Zelle: -25,
  Binance: -25
};

const sedes = {
  "04121506497": "San Pablo",
  "04120213946": "Barquisimeto",
  "04121506491": "Zulia",
}

function aplicarMetodoPago(productos, metodo) {
  const porcentaje = porcentajesPago[metodo] || 0;

  return productos.map(prod => {
    const precioBase = Number(prod.price);
    const aumento = precioBase * (porcentaje / 100);
    const precioFinal = precioBase + aumento;

    return {
      ...prod,
      precioFinal: precioFinal.toFixed(2)
    };
  });
}

const metodoDivs = document.querySelectorAll(".method");
let metodoSeleccionado = "Transferencia";

metodoDivs.forEach(div => {
  div.addEventListener("click", () => {
    metodoDivs.forEach(d => d.classList.remove("active"));
    div.classList.add("active");
    metodoSeleccionado = div.dataset.value;
    cargarFactura(); // recalcula precios
  });
});

const sedeDivs = document.querySelectorAll(".sede");
let telefonoSede = "04121506497"; // valor inicial

sedeDivs.forEach(div => {
  div.addEventListener("click", () => {
    sedeDivs.forEach(d => d.classList.remove("active"));
    div.classList.add("active");
    telefonoSede = div.dataset.phone;
  });
});

function cargarFactura() {
  let productos = JSON.parse(localStorage.getItem("productos_tjm")) || [];
  const contenedor = document.getElementById("product_items");
  const fechaEl = document.getElementById("data_invoice");

  if (productos.length === 0) {
    contenedor.innerHTML = "<p>No hay productos en la factura.</p>";
    document.getElementById("total_final").textContent = "$0";
    document.getElementById("total_original").textContent = "";
    return;
  }

  // Asegurar cantidad por defecto
  productos = productos.map(p => ({
    ...p,
    cantidad: p.cantidad ? Number(p.cantidad) : 1
  }));

  const fecha = new Date();
  fechaEl.textContent = fecha.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  const productosConPrecio = aplicarMetodoPago(productos, metodoSeleccionado);
  contenedor.innerHTML = "";
  let total = 0;
  let totalSinDescuento = 0;

  productosConPrecio.forEach((prod, index) => {
    total += Number((prod.precioFinal * prod.cantidad).toFixed(2));
    totalSinDescuento += Number((prod.price * prod.cantidad).toFixed(2));

    contenedor.innerHTML += `
      <div class="product-item">
        <div class="info">
          <span class="label">Producto:</span>
          <strong class="name">${prod.name}</strong>
        </div>

        <div class="price-box">
          <span class="label">Precio:</span>
          <strong class="amount">$${(prod.precioFinal * prod.cantidad).toFixed(2)}</strong>
        </div>

        <div class="price-box">
          <span class="label">Color:</span>
          <strong class="amount">${prod.color}</strong>
        </div>

        <div class="price-box cantidad-box">
          <span class="label">Cantidad:</span>
          <div class="cantidad-controls">
            <button class="qty-btn" data-action="minus" data-index="${index}"><</button>
            <strong class="amount cantidad">${prod.cantidad}</strong>
            <button class="qty-btn" data-action="plus" data-index="${index}">></button>
          </div>
        </div>

        <button class="delete-btn" data-index="${index}">Eliminar</button>
      </div>
    `;
  });

  document.getElementById("total_final").textContent = `$${total.toFixed(2)}`;

  const porcentaje = porcentajesPago[metodoSeleccionado];
  document.getElementById("total_original").textContent =
    porcentaje < 0 ? `Precio original: $${totalSinDescuento.toFixed(2)}` : "";

  // 🔥 ACTIVAR BOTONES DE ELIMINAR
  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      eliminarProducto(btn.dataset.index);
    });
  });

  // 🔥 ACTIVAR BOTONES DE CANTIDAD (AQUÍ ESTÁ LA SOLUCIÓN)
  document.querySelectorAll(".qty-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = Number(btn.dataset.index);
      const action = btn.dataset.action;

      let productos = JSON.parse(localStorage.getItem("productos_tjm")) || [];

      if (!productos[index].cantidad) productos[index].cantidad = 1;

      if (action === "plus") {
        productos[index].cantidad++;
      } else if (action === "minus" && productos[index].cantidad > 1) {
        productos[index].cantidad--;
      }

      localStorage.setItem("productos_tjm", JSON.stringify(productos));
      cargarFactura();
    });
  });
}


// function cargarFactura() {
//   let productos = JSON.parse(localStorage.getItem("productos_tjm")) || [];
//   const contenedor = document.getElementById("product_items");
//   const fechaEl = document.getElementById("data_invoice");

//   if (productos.length === 0) {
//     contenedor.innerHTML = "<p>No hay productos en la factura.</p>";
//     document.getElementById("total_final").textContent = "$0";
//     document.getElementById("total_original").textContent = "";
//     return;
//   }

//   const fecha = new Date();
//   const opciones = { day: "numeric", month: "long", year: "numeric" };
//   fechaEl.textContent = fecha.toLocaleDateString("es-ES", opciones);

//   const productosConPrecio = aplicarMetodoPago(productos, metodoSeleccionado);
//   contenedor.innerHTML = "";
//   let total = 0;
//   let totalSinDescuento = 0;

//   productosConPrecio.forEach((prod, index) => {
//     total += Number((prod.precioFinal * prod.cantidad).toFixed(2));
//     totalSinDescuento += Number((prod.price * prod.cantidad).toFixed(2));

//     contenedor.innerHTML += `
//       <div class="product-item">
//         <div class="info">
//           <span class="label">Producto:</span>
//           <strong class="name">${prod.name}</strong>
//         </div>

//         <div class="price-box">
//           <span class="label">Precio:</span>
//           <strong class="amount">$${(prod.precioFinal * prod.cantidad).toFixed(2)}</strong>
//         </div>

//         <div class="price-box">
//           <span class="label">Color:</span>
//           <strong class="amount">${prod.color}</strong>
//         </div>

//         <div class="price-box cantidad-box">
//           <span class="label">Cantidad:</span>

//           <div class="cantidad-controls">
//             <button class="qty-btn" data-action="minus" data-index="${index}"><</button>
//             <strong class="amount cantidad">${prod.cantidad}</strong>
//             <button class="qty-btn" data-action="plus" data-index="${index}">></button>
//           </div>
//         </div>

//         <button class="delete-btn" data-index="${index}">Eliminar</button>
//       </div>
//     `;
//   });

//   document.getElementById("total_final").textContent = `$${total.toFixed(2)}`;

//   const porcentaje = porcentajesPago[metodoSeleccionado];

//   if (porcentaje < 0) {
//     document.getElementById("total_original").textContent =
//       `Precio original: $${totalSinDescuento.toFixed(2)}`;
//   } else {
//     document.getElementById("total_original").textContent = "";
//   }

//   // 🔥 REACTIVAR BOTONES DE ELIMINAR
//   document.querySelectorAll(".delete-btn").forEach(btn => {
//     btn.addEventListener("click", () => {
//       eliminarProducto(btn.dataset.index);
//     });
//   });
// }

function eliminarProducto(index) {
  let productos = JSON.parse(localStorage.getItem("productos_tjm")) || [];
  productos.splice(index, 1); // eliminar por índice
  localStorage.setItem("productos_tjm", JSON.stringify(productos));
  cargarFactura(); // recargar UI
}

document.getElementById("btnCompletar").addEventListener("click", () => {
const productos = JSON.parse(localStorage.getItem("productos_tjm")) || [];
const metodoPago = metodoSeleccionado;

  if (productos.length === 0) {
    alert("No hay productos en la factura");
    return;
  }

  // Recalcular precios según método de pago
  const productosConPrecio = aplicarMetodoPago(productos, metodoPago);

  // Construir mensaje
  // let mensaje = `Hola, quiero completar mi pedido.\n\nMétodo de pago: ${metodoPago}\n\nProductos:\n`;
  // productosConPrecio.forEach(p => {
  //   mensaje += `- ${p.name} | ${p.color} | $${p.precioFinal}\n`;
  // });
  // mensaje += `\nSede: ${sedes[telefonoSede]}`;

  let mensaje =
  `✨ *Hola! Quiero completar mi pedido* ✨

  🧾 *Método de pago:* ${metodoPago}

  🛍️ *Productos seleccionados:*`;

  productosConPrecio.forEach(p => {
    mensaje += `
  • 🛏️ *${p.name}*
    🎨 Color: ${p.color}
    📦 Cantidad: ${p.cantidad}
    💵 Precio: $${p.precioFinal}
  `;
  });

  mensaje += `
  📍 *Sede de retiro:* ${sedes[telefonoSede]}

  🙏 Gracias por su atención.`;
  // URL de WhatsApp
  const url = `https://wa.me/${telefonoSede}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");

  localStorage.removeItem("productos_tjm")
  window.location.href = "/";
});


// Ejecutar al cargar la página
document.querySelector(".payment-methods").addEventListener("change", cargarFactura);
document.addEventListener("DOMContentLoaded", cargarFactura);
