async function loadCarousel() {
  const container = document.getElementById("slidesAbout");
  console.log("🚀 ~ loadCarousel ~ container:", container)

  try {
    const res = await fetch("https://tjm-web-back.onrender.com/carrusel/aboutUs");
    const data = await res.json();
    console.log("🚀 ~ loadCarousel ~ data:", data)

    container.innerHTML = ""; // limpiar contenido

    data.forEach(item => {
      const picture = document.createElement("picture");

      // mobile
      const sourceMobile = document.createElement("source");
      sourceMobile.media = "(max-width: 768px)";
      sourceMobile.srcset = item.mobile;

      // tablet
      const sourceTablet = document.createElement("source");
      sourceTablet.media = "(max-width: 1200px)";
      sourceTablet.srcset = item.tablet;

      // desktop fallback
      const img = document.createElement("img");
      img.src = item.desktop;
      img.alt = item.alt || "Imagen carrusel";

      picture.appendChild(sourceMobile);
      picture.appendChild(sourceTablet);
      picture.appendChild(img);

      container.appendChild(picture);
    });

  } catch (error) {
    console.error("Error cargando carrusel:", error);
  }
}

loadCarousel();
