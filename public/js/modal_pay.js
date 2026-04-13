
  console.log("??1")

const payBtn = document.getElementById("pay");
  const modalPago = document.getElementById("modalPago");
  const modalUbicacion = document.getElementById("modalUbicacion");

  let metodoSeleccionado = "";
  let ubicacionSeleccionada = "";

  // 1) Abrir modal de métodos de pago
  payBtn.addEventListener("click", () => {
    modalPago.style.display = "flex";
    console.log("PayClick")
  });

  // 2) Elegir método de pago
  document.querySelectorAll(".pago-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      metodoSeleccionado = btn.dataset.metodo;
      modalPago.style.display = "none";
      modalUbicacion.style.display = "flex";
    });
  });

  // 3) Elegir ubicación
  document.querySelectorAll(".ubic-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      ubicacionSeleccionada = btn.dataset.ubic;
      modalUbicacion.style.display = "none";

      // 4) Generar mensaje
      const mensaje = `Hola, quiero comprar usando ${metodoSeleccionado} desde ${ubicacionSeleccionada}.`;

      // 5) Enviar a WhatsApp
      const telefono = "584120328399"; // <-- tu número AQUÍ
      const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

      window.open(url, "_blank");
    });
  });

  // Cerrar modales con botón "X"
  document.querySelectorAll(".close_pay").forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.dataset.close;
      document.getElementById(modalId).style.display = "none";
    });
  });

  // Cerrar modal haciendo click fuera del contenido
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      e.target.style.display = "none";
    }
  });
