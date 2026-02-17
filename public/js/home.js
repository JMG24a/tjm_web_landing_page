let cleanup = null;

function showTopBar() {
  console.log("showTopBar ejecutado");

  const bar = document.querySelector('.top-gradient-bar');
  if (!bar) return;

  // reset
  bar.classList.remove('visible');

  // fuerza reflow para reiniciar animación
  bar.offsetHeight;

  setTimeout(() => {
    bar.classList.add('visible');
  }, 2000);
}

function startWelcomeSlider() {
  console.log("startWelcomeSlider ejecutado");
  const slides = document.querySelectorAll('.about-slider picture');
  if (!slides.length) return;

  let index = 0;

  slides.forEach(slide => slide.classList.remove('active'));
  slides[0].classList.add('active');

  const interval = setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 4000);

  cleanup = () => clearInterval(interval);
}

function startPromotionSlider() {
  console.log("startPromotionSlider ejecutado");

  const slides = document.querySelectorAll('.promotion-slider picture');
  if (!slides.length) return;

  let index = 0;

  slides.forEach(slide => slide.classList.remove('active'));
  slides[0].classList.add('active');

  const interval = setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 4000);

  cleanup = () => clearInterval(interval);
}

function initHome() {
  console.log("initHome ejecutado");

  if (typeof cleanup === "function") cleanup();

  const video = document.getElementById("miVideo");
  video.playbackRate = 0.4; // 0.5 = más lento, 1 = normal, 2 = rápido

  showTopBar();
  startWelcomeSlider();
  startPromotionSlider();
}

