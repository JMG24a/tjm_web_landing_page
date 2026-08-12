// ============================
// CONTROL DE SLIDERS
// ============================
let cleanup = null;

// ============================
// TOP BAR ANIMATIONS
// ============================
function animateTopBar(selector) {
    const bar = document.querySelector(selector);
    if (!bar) return;

    bar.classList.remove("visible");
    bar.offsetHeight;
    setTimeout(() => bar.classList.add("visible"), 2000);
}

function showTopBar() {
    animateTopBar(".top-gradient-bar");
}

function showTopBarModal() {
    animateTopBar(".top-gradient-bar_modal");
}

function showTopBarProduct() {
    animateTopBar(".top-gradient-bar_products");
}

// ============================
// WELCOME SLIDER
// ============================
function startWelcomeSlider() {
    const slides = document.querySelectorAll(".about-slider picture");
    if (!slides.length) return;

    let index = 0;

    slides.forEach(s => s.classList.remove("active"));
    slides[0].classList.add("active");

    const interval = setInterval(() => {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }, 4000);

    cleanup = () => clearInterval(interval);
}

// ============================
// PROMOTION SLIDER
// ============================
function startPromotionSlider() {
    const slides = document.querySelectorAll(".promotion-slider picture");
    if (!slides.length) return;

    let index = 0;

    slides.forEach(s => s.classList.remove("active"));
    slides[0].classList.add("active");

    const interval = setInterval(() => {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }, 4000);

    cleanup = () => clearInterval(interval);
}

// ============================
// HOME INIT
// ============================
function initHome() {
    if (typeof cleanup === "function") cleanup();

    const video = document.getElementById("miVideo");
    if (video) video.playbackRate = 0.4;

    showTopBar();
    showTopBarProduct();
    startWelcomeSlider();
    startPromotionSlider();
}

// ============================
// DOM READY
// ============================
document.addEventListener("DOMContentLoaded", () => {
    initHome();
});


// let cleanup = null;

// function showTopBar() {
//   const bar = document.querySelector('.top-gradient-bar');
//   if (!bar) return;

//   // reset
//   bar.classList.remove('visible');

//   // fuerza reflow para reiniciar animación
//   bar.offsetHeight;

//   setTimeout(() => {
//     bar.classList.add('visible');
//   }, 2000);
// }

// function showTopBarModal() {
//   const bar = document.querySelector('.top-gradient-bar_modal');
//   if (!bar) return;

//   // reset
//   bar.classList.remove('visible');

//   // fuerza reflow para reiniciar animación
//   bar.offsetHeight;

//   setTimeout(() => {
//     bar.classList.add('visible');
//   }, 2000);
// }

// function showTopBarProduct() {
//   const bar = document.querySelector('.top-gradient-bar_products');
//   if (!bar) return;

//   // reset
//   bar.classList.remove('visible');

//   // fuerza reflow para reiniciar animación
//   bar.offsetHeight;

//   setTimeout(() => {
//     bar.classList.add('visible');
//   }, 2000);
// }

// function startWelcomeSlider() {
//   console.log("startWelcomeSlider ejecutado");
//   const slides = document.querySelectorAll('.about-slider picture');
//   if (!slides.length) return;

//   let index = 0;

//   slides.forEach(slide => slide.classList.remove('active'));
//   slides[0].classList.add('active');

//   const interval = setInterval(() => {
//     slides[index].classList.remove('active');
//     index = (index + 1) % slides.length;
//     slides[index].classList.add('active');
//   }, 4000);

//   cleanup = () => clearInterval(interval);
// }

// const openBtn = document.getElementById('ws-modal');
// const modal = document.getElementById('modal-container');
// const closeBtn = document.getElementById('close-modal');

// // Abrir modal
// openBtn.addEventListener('click', (e) => {
//   e.preventDefault(); // Evita que el '#' recargue o mueva la página
//   modal.style.display = 'flex';
// });

// // Cerrar modal
// closeBtn.addEventListener('click', () => {
//   modal.style.display = 'none';
// });

// function startPromotionSlider() {
//   const slides = document.querySelectorAll('.promotion-slider picture');
//   if (!slides.length) return;

//   let index = 0;

//   slides.forEach(slide => slide.classList.remove('active'));
//   slides[0].classList.add('active');

//   const interval = setInterval(() => {
//     slides[index].classList.remove('active');
//     index = (index + 1) % slides.length;
//     slides[index].classList.add('active');
//   }, 4000);

//   cleanup = () => clearInterval(interval);
// }

// function initHome() {
//   console.log("initHome ejecutado");

//   if (typeof cleanup === "function") cleanup();

//   const video = document.getElementById("miVideo");
//   video.playbackRate = 0.4; // 0.5 = más lento, 1 = normal, 2 = rápido

//   showTopBar();
//   showTopBarProduct();
//   startWelcomeSlider();
//   startPromotionSlider();
// }

// initHome()
