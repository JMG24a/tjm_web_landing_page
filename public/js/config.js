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
    let precio = "Cargando...";

    try {
      const response = await fetch(`https://tjm-web-back.onrender.com/${prod.id}`);
      const data = await response.json();
      precio = data.precio;
    } catch (err) {
      precio = "No disponible";
    }

    const row = document.createElement("tr");

    row.innerHTML = `
      <td><img src="img/${prod.img}" alt="${prod.name}"></td>
      <td>${prod.name}</td>
      <td>
        <input type="number" id="input-${prod.id}" placeholder="${precio}">
      </td>
      <td>
        <button id="save-${prod.id}">Guardar</button>
      </td>
    `;

    productosBody.appendChild(row);

    // Acción de guardar
    document.getElementById(`save-${prod.id}`).addEventListener("click", async () => {
      const nuevoPrecio = document.getElementById(`input-${prod.id}`).value;

      if (!nuevoPrecio) {
        alert("Debes ingresar un precio");
        return;
      }

      const body = {
        id: Number(prod.id),
        precio: Number(nuevoPrecio)
      };

      try {
        const response = await fetch("https://tjm-web-back.onrender.com", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        });

        const data = await response.json();
        alert("Precio actualizado correctamente");

      } catch (error) {
        console.error("Error actualizando precio:", error);
        alert("Error al guardar el precio");
      }
    });
  }
}
