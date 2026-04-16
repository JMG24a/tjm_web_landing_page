const payBtn = document.getElementById("pay");
const modalPago = document.getElementById("modalPago");
const modalUbicacion = document.getElementById("modalUbicacion");
document.addEventListener("DOMContentLoaded", actualizarCarritoUI);


let metodoSeleccionado = "";
let ubicacionSeleccionada = "";

function actualizarCarritoUI() {
  const productos = JSON.parse(localStorage.getItem("productos")) || [];
  const badge = document.getElementById("contadorCarrito");
  const badge_container = document.getElementById("carrito");

  if (productos.length === 0) {
    badge.style.display = "none";
    badge_container.classList.add("displayNonePay");
  } else {
    badge_container.style.classList.remove("displayNonePay");
    badge.style.display = "block";
    badge.textContent = productos.length;
  }
}


// Función para guardar en localStorage
function guardarProductoEnLocalStorage(producto) {
  const productos = JSON.parse(localStorage.getItem("productos")) || [];
  productos.push(producto);
  localStorage.setItem("productos", JSON.stringify(productos));

  actualizarCarritoUI()
}

// Abrir modal de métodos de pago
payBtn.addEventListener("click", () => {
  modalPago.style.display = "flex";
});

// Elegir método de pago
document.querySelectorAll(".pago-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    metodoSeleccionado = btn.dataset.metodo;
    modalPago.style.display = "none";
    modalUbicacion.style.display = "flex";
  });
});

// Elegir ubicación
document.querySelectorAll(".ubic-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    ubicacionSeleccionada = btn.dataset.ubic;
    modalUbicacion.style.display = "none";

    // Crear objeto del producto
    const producto = {
      price: priceProductWs,
      name: nameProductWs,
      ubicacion: ubicacionSeleccionada,
      fecha: new Date().toISOString()
      // metodo: metodoSeleccionado,
    };

    // Guardar en localStorage
    guardarProductoEnLocalStorage(producto);

    // Generar mensaje para WhatsApp
    // const mensaje = `Hola, quiero comprar usando ${metodoSeleccionado}.`;
    // const telefono = ubicacionSeleccionada; // <-- tu número
    // const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    // window.open(url, "_blank");
  });
});

// Cerrar modales con botón "X"
document.querySelectorAll(".close").forEach(btn => {
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
