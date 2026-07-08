let metodoSeleccionado = "Cashea";

const select = document.getElementById("paymentSelect");
const trigger = select.querySelector(".select-trigger");
const selectedOption = select.querySelector(".selected-option");
const options = select.querySelectorAll(".option");

trigger.addEventListener("click", () => {
  select.classList.toggle("open");
});

options.forEach(opt => {
  opt.addEventListener("click", () => {
    metodoSeleccionado = opt.dataset.value;
    selectedOption.textContent = opt.querySelector(".method-name").textContent;
    select.classList.remove("open");

    if (typeof cargarFactura === "function") {
      cargarFactura();
    }
  });
});

document.addEventListener("click", (e) => {
  if (!select.contains(e.target)) {
    select.classList.remove("open");
  }
});
