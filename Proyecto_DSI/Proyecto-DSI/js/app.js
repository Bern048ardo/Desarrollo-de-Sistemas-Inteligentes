
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        window.location.href = "admin/index.html";
    });
}

function mostrarSeccion(seccion) {

    const titulo = document.getElementById("titulo");
    const descripcion = document.getElementById("descripcion");

    if (seccion === "usuarios") {
        titulo.textContent = "Usuarios";
        descripcion.textContent = "Sección de administración de usuarios.";
    }

    else if (seccion === "reportes") {
        titulo.textContent = "Reportes";
        descripcion.textContent = "Sección de consulta de reportes.";
    }

    else if (seccion === "configuracion") {
        titulo.textContent = "Configuración";
        descripcion.textContent = "Sección de configuración del sistema.";
    }
}
