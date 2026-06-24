let currentStep = 1;
let metodoPago = null;
let sedeSeleccionada = null;

const steps = document.querySelectorAll(".step-content");
const progressSteps = document.querySelectorAll(".progress-bar .step");

// Mostrar paso
function showStep(step) {
  steps.forEach(s => s.classList.add("hidden"));
  document.querySelector(`.step-content[data-step="${step}"]`).classList.remove("hidden");

  progressSteps.forEach((p, i) => {
    p.classList.toggle("active", i < step);
  });

  currentStep = step;
}

// SIGUIENTE
document.querySelectorAll(".btn_next").forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentStep === 1 && metodoPago) showStep(2);
  });
});

// ATRÁS
document.querySelectorAll(".btn_back").forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentStep === 2) showStep(1);
  });
});

// MÉTODO DE PAGO
document.querySelectorAll(".method").forEach(div => {
  div.addEventListener("click", () => {
    document.querySelectorAll(".method").forEach(d => d.classList.remove("active"));
    div.classList.add("active");

    metodoPago = div.dataset.value;

    aplicarMetodoPago(); // tu función actual
  });
});

// SEDE
document.querySelectorAll(".sede").forEach(div => {
  div.addEventListener("click", () => {
    document.querySelectorAll(".sede").forEach(d => d.classList.remove("active"));
    div.classList.add("active");

    sedeSeleccionada = div.textContent;
    document.getElementById("btnCompletar").disabled = false;
  });
});
