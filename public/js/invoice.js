function cargarFactura() {
  const productos = JSON.parse(localStorage.getItem("productos_tjm")) || [];
  const contenedor = document.getElementById("product_items");
  const fechaEl = document.getElementById("data_invoice");

  // Si no hay productos, no mostramos nada
  if (productos.length === 0) {
    contenedor.innerHTML = "<p>No hay productos en la factura.</p>";
    return;
  }

  // Mostrar fecha actual
  const fecha = new Date();
  const opciones = { day: "numeric", month: "long", year: "numeric" };
  fechaEl.textContent = fecha.toLocaleDateString("es-ES", opciones);

  // Limpiar contenido previo
  contenedor.innerHTML = "";

  let total = 0;

  productos.forEach(prod => {
    total += Number(prod.price);

    const itemHTML = `
      <div class="product-item">
        <div class="info">
          <span class="label">Producto:</span>
          <strong class="name">${prod.name}</strong>
        </div>
        <div class="price-box">
          <span class="label">Precio:</span>
          <strong class="amount">$${prod.price}</strong>
        </div>
      </div>
    `;

    contenedor.innerHTML += itemHTML;
  });

  // Actualizar total
  document.querySelector(".item.total span:last-child").textContent = `$${total}`;
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", cargarFactura);

