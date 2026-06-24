let currentStep = 1;
let metodoPago = null;
let sedeSeleccionada = null;

const steps = document.querySelectorAll(".step-content");
const progressSteps = document.querySelectorAll(".progress-bar .step");

function showStep(step) {
  steps.forEach(s => s.classList.add("hidden"));
  document.querySelector(`.step-content[data-step="${step}"]`).classList.remove("hidden");

  progressSteps.forEach((p, i) => {
    p.classList.toggle("active", i < step);
  });

  currentStep = step;
}

// BOTONES SIGUIENTE
document.querySelectorAll(".btn_next").forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentStep === 1) showStep(2);
    if (currentStep === 2 && metodoPago) showStep(3);
  });
});

// BOTONES ATRÁS
document.querySelectorAll(".btn_back").forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentStep === 2) showStep(1);
    if (currentStep === 3) showStep(1);
  });
});

// MÉTODO DE PAGO
document.querySelectorAll(".method").forEach(div => {
  div.addEventListener("click", () => {
    document.querySelectorAll(".method").forEach(d => d.classList.remove("active"));
    div.classList.add("active");

    metodoPago = div.dataset.value;

    aplicarMetodoPago(); // tu función actual
    document.getElementById("btnPagoNext").disabled = false;
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
