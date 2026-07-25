const categoriasContainer = document.getElementById("categorias-container");
const productosContainer = document.getElementById("productos-container");

// Obtener categorías únicas
const categorias = Object.keys(PRODUCTS);

// Render categorías
categorias.forEach(cat => {
  const card = document.createElement("div");
  card.className = "categoria-card";
  card.textContent = cat.toUpperCase();

  card.addEventListener("click", () => mostrarProductos(cat));

  categoriasContainer.appendChild(card);
});

// Render productos por categoría
function mostrarProductos(categoria) {
  categoriasContainer.classList.add("hidden");
  productosContainer.classList.remove("hidden");
  productosContainer.innerHTML = "";

  const filtrados = productos.filter(p => p.category === categoria);

  filtrados.forEach(prod => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}">
      <div>
        <h3>${prod.name}</h3>
      </div>
    `;

    card.addEventListener("click", () => {
      // abrir modal o navegar al producto
      openProductModal(prod, categoria);
    });

    productosContainer.appendChild(card);
  });
}
