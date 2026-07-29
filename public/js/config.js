const METHOD_VALUES = {}; // {1: precio, 2: precio, 3: precio, 4: precio}
const methodTable = document.getElementById("method-table");
const methodBody = document.getElementById("method-body");

const METHODS = [
  { id: 1, name: "Cashea" },
  { id: 2, name: "Decontado" },
  { id: 3, name: "Zelle" },
  { id: 4, name: "Cash - Binance" }
];

const BED_SIZES = [
  { suffix: "1",  label: "Individual" },
  { suffix: "14", label: "Matrimonial" },
  { suffix: "16", label: "Queen" },
  { suffix: "2",  label: "King" }
];

async function fetchPrice(id) {
  try {
    const response = await fetch(`https://tjm-web-back.onrender.com/${id}`);
    const data = await response.json();
    return Number(data.precio);
  } catch {
    return null;
  }
}

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
  const isBed = categoria === "dormitorios" || categoria === "colchones";

  for (const prod of productos) {

    if (isBed) {
      // Generar 4 productos derivados
      for (const size of BED_SIZES) {
        const finalId = `${prod.id}${size.suffix}`;
        const precioBase = await fetchPrice(finalId);

        const precioCashea      = precioBase + (precioBase * METHOD_VALUES[1] / 100);
        const precioDecontado   = precioBase + (precioBase * METHOD_VALUES[2] / 100);
        const precioZelle       = precioBase + (precioBase * METHOD_VALUES[3] / 100);
        const precioBinance     = precioBase + (precioBase * METHOD_VALUES[4] / 100);

        const row = document.createElement("tr");

        row.innerHTML = `
          <td><img src="image/${prod.img}" alt="${prod.name}"></td>
          <td>${prod.name} ${size.label}</td>

          <td>
            <input type="number" id="input-${finalId}" placeholder="${precioBase}">
          </td>

          <td id="binance-${finalId}">${precioBinance.toFixed(2)}$</td>
          <td id="zelle-${finalId}">${precioZelle.toFixed(2)}$</td>
          <td id="decontado-${finalId}">${precioDecontado.toFixed(2)}$</td>
          <td id="cashea-${finalId}">${precioCashea.toFixed(2)}$</td>

          <td>
            <button id="save-${finalId}">Guardar</button>
          </td>
        `;

        productosBody.appendChild(row);

        // 🔥 ACTUALIZACIÓN EN VIVO
        const input = document.getElementById(`input-${finalId}`);

        input.addEventListener("input", () => {
          const nuevoBase = Number(input.value);
          if (!nuevoBase) return;

          const binance   = nuevoBase + (nuevoBase * METHOD_VALUES[4] / 100);
          const zelle     = nuevoBase + (nuevoBase * METHOD_VALUES[3] / 100);
          const decontado = nuevoBase + (nuevoBase * METHOD_VALUES[2] / 100);
          const cashea    = nuevoBase + (nuevoBase * METHOD_VALUES[1] / 100);

          document.getElementById(`binance-${finalId}`).textContent   = `${binance.toFixed(2)}$`;
          document.getElementById(`zelle-${finalId}`).textContent     = `${zelle.toFixed(2)}$`;
          document.getElementById(`decontado-${finalId}`).textContent = `${decontado.toFixed(2)}$`;
          document.getElementById(`cashea-${finalId}`).textContent    = `${cashea.toFixed(2)}$`;
        });

        // Guardar precio base
        document.getElementById(`save-${finalId}`).addEventListener("click", async () => {
          const nuevoPrecio = Number(input.value);

          if (!nuevoPrecio) {
            alert("Debes ingresar un precio");
            return;
          }

          const body = { id: Number(finalId), precio: nuevoPrecio };

          try {
            await fetch("https://tjm-web-back.onrender.com", {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body)
            });

            alert("Precio actualizado correctamente");
          } catch {
            alert("Error al guardar el precio");
          }
        });
      }
      // for (const size of BED_SIZES) {
      //   const finalId = `${prod.id}${size.suffix}`;
      //   const precioBase = await fetchPrice(finalId);

      //   // Calcular porcentajes
      //   const precioCashea      = precioBase + (precioBase * METHOD_VALUES[1] / 100);
      //   const precioDecontado   = precioBase + (precioBase * METHOD_VALUES[2] / 100);
      //   const precioZelle       = precioBase + (precioBase * METHOD_VALUES[3] / 100);
      //   const precioBinance     = precioBase + (precioBase * METHOD_VALUES[4] / 100);

      //   const row = document.createElement("tr");

      //   row.innerHTML = `
      //     <td><img src="image/${prod.img}" alt="${prod.name}"></td>
      //     <td>${prod.name} ${size.label}</td>

      //     <td>
      //       <input type="number" id="input-${finalId}" placeholder="${precioBase}">
      //     </td>

      //     <td>${precioBinance.toFixed(2)}$</td>
      //     <td>${precioZelle.toFixed(2)}$</td>
      //     <td>${precioDecontado.toFixed(2)}$</td>
      //     <td>${precioCashea.toFixed(2)}$</td>

      //     <td>
      //       <button id="save-${finalId}">Guardar</button>
      //     </td>
      //   `;

      //   productosBody.appendChild(row);

      //   // Guardar precio base
      //   document.getElementById(`save-${finalId}`).addEventListener("click", async () => {
      //     const nuevoPrecio = document.getElementById(`input-${finalId}`).value;

      //     if (!nuevoPrecio) {
      //       alert("Debes ingresar un precio");
      //       return;
      //     }

      //     const body = {
      //       id: Number(finalId),
      //       precio: Number(nuevoPrecio)
      //     };

      //     try {
      //       await fetch("https://tjm-web-back.onrender.com", {
      //         method: "PATCH",
      //         headers: { "Content-Type": "application/json" },
      //         body: JSON.stringify(body)
      //       });

      //       alert("Precio actualizado correctamente");
      //     } catch {
      //       alert("Error al guardar el precio");
      //     }
      //   });
      // }

    } else {
      // Producto normal
      const precioBase = await fetchPrice(prod.id);

      const precioCashea      = precioBase + (precioBase * METHOD_VALUES[1] / 100);
      const precioDecontado   = precioBase + (precioBase * METHOD_VALUES[2] / 100);
      const precioZelle       = precioBase + (precioBase * METHOD_VALUES[3] / 100);
      const precioBinance     = precioBase + (precioBase * METHOD_VALUES[4] / 100);

      const row = document.createElement("tr");

      row.innerHTML = `
        <td><img src="image/${prod.img}" alt="${prod.name}"></td>
        <td>${prod.name}</td>

        <td>
          <input type="number" id="input-${prod.id}" placeholder="${precioBase}">
        </td>

        <td>${precioBinance.toFixed(2)}$</td>
        <td>${precioZelle.toFixed(2)}$</td>
        <td>${precioDecontado.toFixed(2)}$</td>
        <td>${precioCashea.toFixed(2)}$</td>

        <td>
          <button id="save-${prod.id}">Guardar</button>
        </td>
      `;

      productosBody.appendChild(row);

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
          await fetch("https://tjm-web-back.onrender.com", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });

          alert("Precio actualizado correctamente");
        } catch {
          alert("Error al guardar el precio");
        }
      });
    }
  }
}

// async function mostrarProductos(categoria) {
//   categoriasContainer.classList.add("hidden");
//   productosTable.classList.remove("hidden");
//   productosBody.innerHTML = "";

//   const productos = PRODUCTS[categoria];

//   for (const prod of productos) {
//     const prices = await getProductPrices(prod, categoria);

//     // precio base editable
//     const precioBase = prices.base;
//     // precios por tamaño (solo para camas/colchones)
//     const precioIndividual  = prices.individual;
//     const precioMatrimonial = prices.matrimonial;
//     const precioQueen       = prices.queen;
//     const precioKing        = prices.king;


//     // let precioBase = 0;

//     // try {
//     //   const response = await fetch(`https://tjm-web-back.onrender.com/${prod.id}`);
//     //   const data = await response.json();
//     //   precioBase = Number(data.precio);
//     // } catch (err) {
//     //   precioBase = 0;
//     // }

//     // CALCULOS AUTOMÁTICOS
//     const precioCashBinance = precioBase + (precioBase * METHOD_VALUES[4] / 100);
//     const precioZelle       = precioBase + (precioBase * METHOD_VALUES[3] / 100);
//     const precioDecontado   = precioBase + (precioBase * METHOD_VALUES[2] / 100);
//     const precioCashea      = precioBase + (precioBase * METHOD_VALUES[1] / 100);

//     const row = document.createElement("tr");

//     row.innerHTML = `
//       <td><img src="image/${prod.img}" alt="${prod.name}"></td>
//       <td>${prod.name}</td>

//       <td>
//         <input type="number" id="input-${prod.id}" placeholder="${precioBase}">
//       </td>

//       <td>${precioCashBinance.toFixed(2)}$</td>
//       <td>${precioZelle.toFixed(2)}$</td>
//       <td>${precioDecontado.toFixed(2)}$</td>
//       <td>${precioCashea.toFixed(2)}$</td>

//       <td>
//         <button id="save-${prod.id}">Guardar</button>
//       </td>
//     `;

//     productosBody.appendChild(row);

//     // GUARDAR SOLO EL PRECIO BASE
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
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(body)
//         });

//         const data = await response.json();
//         alert("Precio base actualizado correctamente");

//       } catch (error) {
//         console.error("Error actualizando precio:", error);
//         alert("Error al guardar el precio");
//       }
//     });
//   }
// }

async function getProductPrices(prod, categoria) {
  // Categorías especiales
  const isBed = categoria === "dormitorios" || categoria === "colchones";

  if (!isBed) {
    // Categorías normales → solo un precio
    const response = await fetch(`https://tjm-web-back.onrender.com/${prod.id}`);
    const data = await response.json();
    return {
      base: Number(data.precio),
      individual: null,
      matrimonial: null,
      queen: null,
      king: null
    };
  }

  // Categorías especiales → 4 precios
  const ids = {
    individual: `${prod.id}1`,
    matrimonial: `${prod.id}14`,
    queen: `${prod.id}16`,
    king: `${prod.id}2`
  };

  const results = {};

  for (const key in ids) {
    try {
      const response = await fetch(`https://tjm-web-back.onrender.com/${ids[key]}`);
      const data = await response.json();
      results[key] = Number(data.precio);
    } catch {
      results[key] = null;
    }
  }

  return {
    base: results.individual, // el precio base será el individual
    ...results
  };
}



// Llamar al cargar la página
loadMethods();
