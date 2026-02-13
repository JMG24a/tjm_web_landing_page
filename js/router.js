const routes = {
  "/": "/pages/home.html",
  "/home/products": "/pages/products.html",
  "/about": "/pages/about.html",
  "/admin": "/pages/admin.html",
};

const pageScripts = {
  "/": initHome,
  "/home/products": initProducts,
  "/admin": initAdmin
};

const app = document.getElementById("app");

// 🔹 Protección en reload
const validRoutes = Object.keys(routes);
if (!validRoutes.includes(window.location.pathname)) {
  window.history.replaceState({}, "", "/");
  navigateTo("/");
}

// Navegar con categoría
function goToCategory(page) {
  navigateTo(page);
}

async function navigateTo(url) {
  const parsedUrl = new URL(url, window.location.origin);
  const path = parsedUrl.pathname;

  const route = routes[path] || routes["/"];
  const res = await fetch(route);
  const html = await res.text();

  app.innerHTML = html;
  window.history.pushState({}, "", url);

  window.scrollTo({ top: 0, behavior: "instant" });

  pageScripts[path]?.();
}

function handleLinks() {
  document.body.addEventListener("click", e => {
    const link = e.target.closest("a[data-link]");
    if (!link) return;

    e.preventDefault();
    navigateTo(link.getAttribute("href"));
  });
}

window.addEventListener("popstate", () => {
  navigateTo(window.location.pathname + window.location.search);
});

// INIT
navigateTo(window.location.pathname + window.location.search);
handleLinks();
