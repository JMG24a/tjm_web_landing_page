async function updateCarouselImage() {
  const id = document.getElementById("carouselId").value;
  const version = document.getElementById("version").value;
  const file = document.getElementById("fileInput").files[0];

  // 1. Subir imagen a Cloudinary
  const formData = new FormData();
  formData.append("file", file);

  const uploadRes = await fetch("https://tjm-web-back.onrender.com/upload", {
    method: "POST",
    body: formData
  });

  const { url } = await uploadRes.json();

  // 2. Actualizar el registro en tu backend
  const patchRes = await fetch(`https://tjm-web-back.onrender.com/carrusel/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ [version]: url })
  });

  const updated = await patchRes.json();
  console.log("Actualizado:", updated);

  alert("Imagen actualizada correctamente");
}
