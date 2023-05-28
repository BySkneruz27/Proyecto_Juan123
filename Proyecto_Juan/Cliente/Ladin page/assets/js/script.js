document.addEventListener('DOMContentLoaded', function () {
    // Obtener elementos del DOM
    var btnIniciarSesion = document.getElementById('btn__iniciar-sesion');
    var btnRegistrarse = document.getElementById('btn__registrarse');
    var formularioLogin = document.querySelector('.formulario__login');
    var formularioRegister = document.querySelector('.formulario__register');

    // Evento de click en el botón "Iniciar Sesión"
    btnIniciarSesion.addEventListener('click', function () {
        // Agregar clase "activar" al contenedor de login-register
        document.querySelector('.contenedor__login-register').style.left = '10px';

        // Cambiar clase de los formularios
        formularioLogin.style.display = 'block';
        formularioRegister.style.display = 'none';
    });

    // Evento de click en el botón "Registrarse"
    btnRegistrarse.addEventListener('click', function () {
        // Agregar clase "activar" al contenedor de login-register
        document.querySelector('.contenedor__login-register').style.left = '410px';

        // Cambiar clase de los formularios
        formularioLogin.style.display = 'none';
        formularioRegister.style.display = 'block';
    });

    // Evento de envío del formulario de inicio de sesión
    formularioLogin.addEventListener('submit', function (e) {
        e.preventDefault();
        iniciarSesion();
    });
});

// Función para validar el inicio de sesión
function iniciarSesion() {
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;

    // Comprobar si el correo y la contraseña son válidos
    if (email === 'julian.kou2002@gmail.com' && password === 'juanxd12') {
        // Guardar información de inicio de sesión en el LocalStorage
        localStorage.setItem('usuario', email);

        // Redirigir al dashboardUsuario.html
        window.location.href = 'dashboardUsuario.html';
    } else {
        // Mostrar mensaje de error
        Swal.fire('Error', 'Credenciales inválidas', 'error');
    }
}

function regresarIndex() {
    window.location.href = 'index.html';
}
