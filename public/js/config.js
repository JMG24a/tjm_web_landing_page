const METHOD_VALUES = {}; // {1: precio, 2: precio, 3: precio, 4: precio}
const methodTable = document.getElementById("method-table");
const methodBody = document.getElementById("method-body");

const METHODS = [
  { id: 1, name: "Cashea" },
  { id: 2, name: "Decontado" },
  { id: 3, name: "Zelle" },
  { id: 4, name: "Cash - Binance" }
];

// async function loadMethods() {
//   methodTable.classList.remove("hidden");
//   methodBody.innerHTML = "";

//   for (const method of METHODS) {
//     let precio = "Cargando...";

//     try {
//       const response = await fetch(`https://tjm-web-back.onrender.com/${method.id}`);
//       const data = await response.json();
//       precio = data.precio;
//     } catch (err) {
//       precio = "No disponible";
//     }

//     const row = document.createElement("tr");

//     row.innerHTML = `
//       <td>${method.name}</td>
//       <td>
//         <input type="number" id="method-input-${method.id}" placeholder="${precio}">
//       </td>
//       <td>
//         <button id="method-save-${method.id}">Guardar</button>
//       </td>
//     `;

//     methodBody.appendChild(row);

//     // Guardar precio
//     document.getElementById(`method-save-${method.id}`).addEventListener("click", async () => {
//       const nuevoPrecio = document.getElementById(`method-input-${method.id}`).value;

//       if (!nuevoPrecio) {
//         alert("Debes ingresar un precio");
//         return;
//       }

//       const body = {
//         id: method.id,
//         precio: Number(nuevoPrecio)
//       };

//       try {
//         const response = await fetch("https://tjm-web-back.onrender.com", {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify(body)
//         });

//         const data = await response.json();
//         alert("Precio actualizado correctamente");

//       } catch (error) {
//         console.error("Error actualizando precio:", error);
//         alert("Error al guardar el precio");
//       }
//     });
//   }
// }

async function loadMethods() {
  methodTable.classList.remove("hidden");
  methodBody.innerHTML = "";

  for (const method of METHODS) {
    let precio = "Cargando...";

    try {
      const response = await fetch(`https://tjm-web-back.onrender.com/${method.id}`);
      const data = await response.json();
      precio = Number(data.precio);
      METHOD_VALUES[method.id] = precio; // <-- GUARDAMOS EL PRECIO
    } catch (err) {
      precio = "No disponible";
      METHOD_VALUES[method.id] = 0;
    }

    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${method.name}</td>
      <td>
        <input type="number" id="method-input-${method.id}" placeholder="${precio}">
      </td>
      <td>
        <button id="method-save-${method.id}">Guardar</button>
      </td>
    `;

    methodBody.appendChild(row);

    document.getElementById(`method-save-${method.id}`).addEventListener("click", async () => {
      const nuevoPrecio = document.getElementById(`method-input-${method.id}`).value;

      if (!nuevoPrecio) {
        alert("Debes ingresar un precio");
        return;
      }

      const body = { id: method.id, precio: Number(nuevoPrecio) };

      try {
        const response = await fetch("https://tjm-web-back.onrender.com", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });

        const data = await response.json();
        METHOD_VALUES[method.id] = Number(nuevoPrecio); // <-- ACTUALIZAMOS
        alert("Precio actualizado correctamente");

      } catch (error) {
        console.error("Error actualizando precio:", error);
        alert("Error al guardar el precio");
      }
    });
  }
}

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
    let precioBase = 0;

    try {
      const response = await fetch(`https://tjm-web-back.onrender.com/${prod.id}`);
      const data = await response.json();
      precioBase = Number(data.precio);
    } catch (err) {
      precioBase = 0;
    }

    // CALCULOS AUTOMÁTICOS
    const precioCashBinance = precioBase + METHOD_VALUES[4];
    const precioZelle       = precioBase + METHOD_VALUES[3];
    const precioDecontado   = precioBase + METHOD_VALUES[2];
    const precioCashea      = precioBase + METHOD_VALUES[1];

    const row = document.createElement("tr");

    row.innerHTML = `
      <td><img src="image/${prod.img}" alt="${prod.name}"></td>
      <td>${prod.name}</td>

      <td>
        <input type="number" id="input-${prod.id}" placeholder="${precioBase}">
      </td>

      <td>${precioCashBinance}$</td>
      <td>${precioZelle}$</td>
      <td>${precioDecontado}$</td>
      <td>${precioCashea}$</td>

      <td>
        <button id="save-${prod.id}">Guardar</button>
      </td>
    `;

    productosBody.appendChild(row);

    // GUARDAR SOLO EL PRECIO BASE
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
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });

        const data = await response.json();
        alert("Precio base actualizado correctamente");

      } catch (error) {
        console.error("Error actualizando precio:", error);
        alert("Error al guardar el precio");
      }
    });
  }
}

// async function mostrarProductos(categoria) {
//   categoriasContainer.classList.add("hidden");
//   productosTable.classList.remove("hidden");
//   productosBody.innerHTML = "";

//   const productos = PRODUCTS[categoria];

//   for (const prod of productos) {
//     let precio = "Cargando...";

//     try {
//       const response = await fetch(`https://tjm-web-back.onrender.com/${prod.id}`);
//       const data = await response.json();
//       precio = data.precio;
//     } catch (err) {
//       precio = "No disponible";
//     }

//     const row = document.createElement("tr");

//     row.innerHTML = `
//       <td><img src="image/${prod.img}" alt="${prod.name}"></td>
//       <td>${prod.name}</td>
//       <td>
//         <input type="number" id="input-${prod.id}" placeholder="${precio}">
//       </td>
//       <td>
//         <button id="save-${prod.id}">Guardar</button>
//       </td>
//     `;

//     productosBody.appendChild(row);

//     // Acción de guardar
//     document.getElementById(`save-${prod.id}`).addEventListener("click", async () => {
//       const nuevoPrecio = document.getElementById(`input-${prod.id}`).value;

//       if (!nuevoPrecio) {
//         alert("Debes ingresar un precio");
//         return;
//       }

//       const body = {
//         id: Number(prod.id),
//         precio: Number(nuevoPrecio)
//       };

//       try {
//         const response = await fetch("https://tjm-web-back.onrender.com", {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify(body)
//         });

//         const data = await response.json();
//         alert("Precio actualizado correctamente");

//       } catch (error) {
//         console.error("Error actualizando precio:", error);
//         alert("Error al guardar el precio");
//       }
//     });
//   }
// }



// Llamar al cargar la página
loadMethods();
