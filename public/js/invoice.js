const porcentajesPago = {
  Transferencia: 40,
  Cashea: 20,
  Zelle: 10,
  Binance: 5
};

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

function cargarFactura() {
  let productos = JSON.parse(localStorage.getItem("productos")) || [];
  const contenedor = document.getElementById("product_items");
  const fechaEl = document.getElementById("data_invoice");
  const metodoSelect = document.querySelector(".payment-methods");

  if (productos.length === 0) {
    contenedor.innerHTML = "<p>No hay productos en la factura.</p>";
    document.querySelector(".item.total span:last-child").textContent = "$0";
    return;
  }

  // Fecha actual
  const fecha = new Date();
  const opciones = { day: "numeric", month: "long", year: "numeric" };
  fechaEl.textContent = fecha.toLocaleDateString("es-ES", opciones);

  // Aplicar método de pago actual
  const metodo = metodoSelect.value;
  const productosConPrecio = aplicarMetodoPago(productos, metodo);

  contenedor.innerHTML = "";
  let total = 0;

  productosConPrecio.forEach((prod, index) => {
    total += Number(prod.precioFinal);

    const itemHTML = `
      <div class="product-item">
        <div class="info">
          <span class="label">Producto:</span>
          <strong class="name">${prod.name}</strong>
        </div>

        <div class="price-box">
          <span class="label">Precio:</span>
          <strong class="amount">$${prod.precioFinal}</strong>
        </div>

        <button class="delete-btn" data-index="${index}">Eliminar</button>
      </div>
    `;

    contenedor.innerHTML += itemHTML;
  });

  document.querySelector(".item.total span:last-child").textContent = `$${total.toFixed(2)}`;

  // Activar botones de eliminar
  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      eliminarProducto(btn.dataset.index);
    });
  });
}


// function cargarFactura() {
//   const productos = JSON.parse(localStorage.getItem("productos_tjm")) || [];
//   const contenedor = document.getElementById("product_items");
//   const fechaEl = document.getElementById("data_invoice");

//   if (productos.length === 0) {
//     contenedor.innerHTML = "<p>No hay productos en la factura.</p>";
//     document.querySelector(".item.total span:last-child").textContent = "$0";
//     return;
//   }

//   // Fecha actual
//   const fecha = new Date();
//   const opciones = { day: "numeric", month: "long", year: "numeric" };
//   fechaEl.textContent = fecha.toLocaleDateString("es-ES", opciones);

//   contenedor.innerHTML = "";
//   let total = 0;

//   productos.forEach((prod, index) => {
//     total += Number(prod.price);

//     const itemHTML = `
//       <div class="product-item">
//         <div class="info">
//           <span class="label">Producto:</span>
//           <strong class="name">${prod.name}</strong>
//         </div>

//         <div class="price-box">
//           <span class="label">Precio:</span>
//           <strong class="amount">$${prod.price}</strong>
//         </div>

//         <button class="delete-btn" data-index="${index}">Eliminar</button>
//       </div>
//     `;

//     contenedor.innerHTML += itemHTML;
//   });

//   document.querySelector(".item.total span:last-child").textContent = `$${total}`;

//   // Activar botones de eliminar
//   document.querySelectorAll(".delete-btn").forEach(btn => {
//     btn.addEventListener("click", () => {
//       eliminarProducto(btn.dataset.index);
//     });
//   });
// }

// function cargarFactura() {
//   const productos = JSON.parse(localStorage.getItem("productos_tjm")) || [];
//   const contenedor = document.getElementById("product_items");
//   const fechaEl = document.getElementById("data_invoice");

//   // Si no hay productos, no mostramos nada
//   if (productos.length === 0) {
//     contenedor.innerHTML = "<p>No hay productos en la factura.</p>";
//     return;
//   }

//   // Mostrar fecha actual
//   const fecha = new Date();
//   const opciones = { day: "numeric", month: "long", year: "numeric" };
//   fechaEl.textContent = fecha.toLocaleDateString("es-ES", opciones);

//   // Limpiar contenido previo
//   contenedor.innerHTML = "";

//   let total = 0;

//   productos.forEach(prod => {
//     total += Number(prod.price);

//     const itemHTML = `
//       <div class="product-item">
//         <div class="info">
//           <span class="label">Producto:</span>
//           <strong class="name">${prod.name}</strong>
//         </div>

//         <div class="price-box">
//           <span class="label">Precio:</span>
//           <strong class="amount">$${prod.price}</strong>
//         </div>

//         <button class="delete-btn" data-index="0">Eliminar</button>
//       </div>
//     `;

//     contenedor.innerHTML += itemHTML;
//   });

//   // Actualizar total
//   document.querySelector(".item.total span:last-child").textContent = `$${total}`;
// }

  function eliminarProducto(index) {
    let productos = JSON.parse(localStorage.getItem("productos")) || [];
    productos.splice(index, 1); // eliminar por índice
    localStorage.setItem("productos", JSON.stringify(productos));
    cargarFactura(); // recargar UI
  }

// Ejecutar al cargar la página
document.querySelector(".payment-methods").addEventListener("change", cargarFactura);
document.addEventListener("DOMContentLoaded", cargarFactura);


