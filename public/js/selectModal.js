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
    const img = opt.querySelector("img")?.outerHTML || "";
    const name = opt.querySelector(".method-name")?.outerHTML || "";
    const badge = opt.querySelector(".badge")?.outerHTML || "";
    selectedOption.innerHTML = `
      <div class="selected-wrapper">
        ${img}
        ${name}
        ${badge}
      </div>
    `;
    select.classList.remove("open");
      console.log("HELLO?1")

    if (typeof loadPay === "function") {
      console.log("HELLO2")
      loadPayPercentage();
    }
  });
});

document.addEventListener("click", (e) => {
  if (!select.contains(e.target)) {
    select.classList.remove("open");
  }
});
