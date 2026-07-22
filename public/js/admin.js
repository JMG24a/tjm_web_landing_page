const btnLogin = document.getElementById("btnLogin");
const errorMsg = document.getElementById("loginError");

btnLogin.addEventListener("click", () => {
  const user = document.getElementById("user").value.trim();
  const pass = document.getElementById("pass").value.trim();

  // Usuario y contraseña "falsos" (hardcodeados)
  const USER_OK = "tjm.admin";
  const PASS_OK = "tjm.admin123";

  if (user === USER_OK && pass === PASS_OK) {
    // Guardar sesión
    localStorage.setItem("session_tjm", "123tjmadmin");

    // Redirigir al home
    window.location.href = "/";
  } else {
    errorMsg.textContent = "Usuario o contraseña incorrectos";
  }
});

