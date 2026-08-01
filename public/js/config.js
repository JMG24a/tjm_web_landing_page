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

function attachLiveUpdate(finalId) {
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
}

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
      // Generar 4 filas (Individual, Matrimonial, Queen, King)
      for (const size of BED_SIZES) {
        const finalId = `${prod.id}${size.suffix}`;
        const precioBase = await fetchPrice(finalId);

        // Calcular porcentajes
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

        // 🔥 Actualización en vivo
        attachLiveUpdate(finalId);

        // Guardar precio base
        document.getElementById(`save-${finalId}`).addEventListener("click", async () => {
          const nuevoPrecio = Number(document.getElementById(`input-${finalId}`).value);

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

    } else {
      // Producto normal (1 fila)
      const finalId = prod.id;
      const precioBase = await fetchPrice(finalId);

      const precioCashea      = precioBase + (precioBase * METHOD_VALUES[1] / 100);
      const precioDecontado   = precioBase + (precioBase * METHOD_VALUES[2] / 100);
      const precioZelle       = precioBase + (precioBase * METHOD_VALUES[3] / 100);
      const precioBinance     = precioBase + (precioBase * METHOD_VALUES[4] / 100);

      const row = document.createElement("tr");

      row.innerHTML = `
        <td><img src="image/${prod.img}" alt="${prod.name}"></td>
        <td>${prod.name}</td>

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

      // 🔥 Actualización en vivo
      attachLiveUpdate(finalId);

      // Guardar precio base
      document.getElementById(`save-${finalId}`).addEventListener("click", async () => {
        const nuevoPrecio = Number(document.getElementById(`input-${finalId}`).value);

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
  }
}

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

// Sliders Admin
// ===============================
// 1. Cargar sliders desde backend
// ===============================
async function loadCarousel() {
  const res = await fetch("https://tjm-web-back.onrender.com/carrusel");
  const sliders = await res.json();

  const tbody = document.getElementById("carousel-body");
  tbody.innerHTML = "";

  sliders.forEach(slider => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${slider.group}</td>

      <td>
        <img src="${slider.mobile}" alt="mobile">
        <button class="upload-btn" onclick="triggerUpload(${slider.id}, 'mobile')">Subir imagen</button>
      </td>

      <td>
        <img src="${slider.tablet}" alt="tablet">
        <button class="upload-btn" onclick="triggerUpload(${slider.id}, 'tablet')">Subir imagen</button>
      </td>

      <td>
        <img src="${slider.desktop}" alt="desktop">
        <button class="upload-btn" onclick="triggerUpload(${slider.id}, 'desktop')">Subir imagen</button>
      </td>
    `;

    tbody.appendChild(row);
  });
}

// ===============================
// 2. Abrir selector de archivos
// ===============================
let currentEdit = { id: null, field: null };

function triggerUpload(id, field) {
  currentEdit.id = id;
  currentEdit.field = field;

  document.getElementById("hiddenFileInput").click();
}

// ===============================
// 3. Subir imagen a Cloudinary
// ===============================
document.getElementById("hiddenFileInput").addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "tjm_uploads"); // tu preset de Cloudinary

  const cloudRes = await fetch("https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload", {
    method: "POST",
    body: formData
  });

  const cloudData = await cloudRes.json();
  const imageUrl = cloudData.secure_url;

  // ===============================
  // 4. PATCH al backend
  // ===============================
  const body = {};
  body[currentEdit.field] = imageUrl;

  await fetch(`https://tjm-web-back.onrender.com/carrusel/${currentEdit.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  // ===============================
  // 5. Recargar UI
  // ===============================
  loadCarousel();

  // limpiar input
  e.target.value = "";
});

// Inicializar
loadCarousel();

