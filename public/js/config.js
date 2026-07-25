const categoriasContainer = document.getElementById("categorias-container");
const productosTable = document.getElementById("productos-table");
const productosBody = document.getElementById("productos-body");

const categorias = Object.keys(PRODUCTS);

categorias.forEach(cat => {
  const card = document.createElement("div");
  card.className = "categoria-card";
  card.textContent = cat.toUpperCase();
  card.addEventListener("click", () => mostrarProductos(cat));
  categoriasContainer.appendChild(card);
});

async function mostrarProductos(categoria) {
  categoriasContainer.classList.add("hidden");
  productosTable.classList.remove("hidden");
  productosBody.innerHTML = "";

  const productos = PRODUCTS[categoria];

  for (const prod of productos) {
    // Obtener precio desde tu backend
    let precio = "Cargando...";
    try {
      const response = await fetch(`https://tjm-web-back.onrender.com/${prod.id}`);
      const data = await response.json();
      precio = `${data.precio}$`;
    } catch (err) {
      precio = "No disponible";
    }

    // Crear fila de tabla
    const row = document.createElement("tr");

    row.innerHTML = `
      <td><img src="image/${prod.img}" alt="${prod.name}"></td>
      <td>${prod.name}</td>
      <td>${precio}</td>
    `;

    // Click → abrir modal
    row.addEventListener("click", () => {
      openProductModal(prod, categoria);
    });

    productosBody.appendChild(row);
  }
}

