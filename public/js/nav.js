const navToggle = document.getElementById("navToggle");
const navOverlay = document.getElementById("navOverlay");
const navSidebar = document.getElementById("navSidebar");

function openSidebar() {
  navOverlay.classList.add("active");
  navSidebar.classList.add("active");
}

function closeSidebar() {
  navOverlay.classList.remove("active");
  navSidebar.classList.remove("active");
}

navToggle.addEventListener("click", openSidebar);
navOverlay.addEventListener("click", closeSidebar);
