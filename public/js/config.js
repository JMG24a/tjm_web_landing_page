const categoriasContainer = document.getElementById("categorias-container");
const productosContainer = document.getElementById("productos-container");

const categorias = Object.keys(PRODUCTS);

categorias.forEach(cat => {
  const card = document.createElement("div");
  card.className = "categoria-card";
  card.textContent = cat.toUpperCase();
  card.addEventListener("click", () => mostrarProductos(cat));
  categoriasContainer.appendChild(card);
});

// Render productos por categoría
  // Render productos por categoría
async function mostrarProductos(categoria) {
  categoriasContainer.classList.add("hidden");
  productosContainer.classList.remove("hidden");
  productosContainer.innerHTML = "";

  const productos = PRODUCTS[categoria];

  for (const prod of productos) {
    const card = document.createElement("div");
    card.className = "product-card";

    // loader mientras llega el precio
    card.innerHTML = `
      <img src="img/${prod.img}" alt="${prod.name}">
      <div>
        <h3>${prod.name}</h3>
        <p id="price-${prod.id}">Cargando precio...</p>
      </div>
    `;

    productosContainer.appendChild(card);

    // Obtener precio desde tu backend
    try {
      const response = await fetch(`https://tjm-web-back.onrender.com/${prod.id}`);
      const data = await response.json();

      const priceElement = document.getElementById(`price-${prod.id}`);
      priceElement.textContent = `${data.precio}$`;
    } catch (error) {
      console.error("Error cargando precio:", error);
      const priceElement = document.getElementById(`price-${prod.id}`);
      priceElement.textContent = "Precio no disponible";
    }

    // Click para abrir modal
    card.addEventListener("click", () => {
      openProductModal(prod, categoria);
    });
  }
}
