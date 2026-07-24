// ☁️ JS: subir imagen a Cloudinary + actualizar backend
updateBtn.addEventListener("click", async () => {
  const id = document.getElementById("carouselId").value;
  const version = document.getElementById("version").value;
  const file = document.getElementById("fileInput").files[0];

  if (!file) {
    alert("Selecciona un archivo");
    return;
  }

  // 1. Subir imagen a Cloudinary
  const formData = new FormData();
  formData.append("file", file);

  const uploadRes = await fetch("https://tjm-web-back.onrender.com/upload", {
    method: "POST",
    body: formData
  });

  const { url } = await uploadRes.json();

  // 2. Actualizar registro en backend
  const patchRes = await fetch(`https://tjm-web-back.onrender.com/carrusel/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ [version]: url })
  });

  const updated = await patchRes.json();
  console.log("Actualizado:", updated);

  alert("Imagen actualizada correctamente");
  modal.classList.add("hidden");
});

// 🚀 JS: abrir modal con el grupo correcto
const modal = document.getElementById("carouselModal");
const selectId = document.getElementById("carouselId");
const updateBtn = document.getElementById("updateBtn");

let currentGroup = null;

document.querySelectorAll(".edit-carousel-btn").forEach(btn => {
  btn.addEventListener("click", async (e) => {
    const section = e.target.closest("section");
    currentGroup = section.dataset.group;

    // 1. Obtener los registros del grupo
    const res = await fetch(`https://tjm-web-back.onrender.com/carrusel/${currentGroup}`);
    const data = await res.json();

    // 2. Llenar el select con los IDs
    selectId.innerHTML = "";
    data.forEach(item => {
      const opt = document.createElement("option");
      opt.value = item.id;
      opt.textContent = `Imagen ${item.id}`;
      selectId.appendChild(opt);
    });

    modal.classList.remove("hidden");
  });
});

// CARGAR SLIDERS
async function loadCarousel(containerSlider, group) {
  const container = document.getElementById(containerSlider);

  try {
    const res = await fetch(`https://tjm-web-back.onrender.com/carrusel/${group}`);
    const data = await res.json();

    container.innerHTML = ""; // limpiar contenido

    data.forEach((item, index) => {
      const picture = document.createElement("picture");

      const sourceMobile = document.createElement("source");
      sourceMobile.media = "(max-width: 768px)";
      sourceMobile.srcset = item.mobile;

      const sourceTablet = document.createElement("source");
      sourceTablet.media = "(max-width: 1200px)";
      sourceTablet.srcset = item.tablet;

      const img = document.createElement("img");
      img.src = item.desktop;
      img.alt = item.alt || "Imagen carrusel";

      picture.appendChild(sourceMobile);
      picture.appendChild(sourceTablet);
      picture.appendChild(img);

      // Mostrar solo la primera imagen al inicio
      if (index === 0) {
        picture.classList.add("active");
      }

      container.appendChild(picture);
    });

    // ⏱️ Lógica para rotar las imágenes cada 15 segundos
    startAutoSlide(container, 10000);

  } catch (error) {
    console.error("Error cargando carrusel:", error);
  }
}

function startAutoSlide(container, intervalTime) {
  const slides = container.querySelectorAll("picture");
  if (slides.length <= 1) return; // Si hay 0 o 1 imagen, no hace falta rotar

  let currentIndex = 0;

  setInterval(() => {
    // Quitar la clase active a la imagen actual
    slides[currentIndex].classList.remove("active");

    // Avanzar al siguiente índice (o volver al 0 al llegar al final)
    currentIndex = (currentIndex + 1) % slides.length;

    // Agregar la clase active a la nueva imagen
    slides[currentIndex].classList.add("active");
  }, intervalTime);
}

loadCarousel("slidesPromotions", "promotions");
loadCarousel("slidesAbout", "aboutUs");

document.getElementById("closeModal").addEventListener("click", () => {
  modal.classList.add("hidden");
});
