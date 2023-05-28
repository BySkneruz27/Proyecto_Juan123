document.addEventListener("DOMContentLoaded", function() {
  // Obtener referencias a los elementos del formulario
  var nombreInput = document.getElementById("nombre");
  var emailInput = document.getElementById("email");
  var contrasenaInput = document.getElementById("contrasena");
  var telefonoInput = document.getElementById("telefono");
  var guardarBtn = document.getElementById("guardar");
  var editarBtn = document.getElementById("editar");

  // Comprobar si existen datos en el Local Storage
  var datosUsuario = localStorage.getItem("datosUsuario");
  if (datosUsuario) {
    // Si existen datos, cargarlos en el formulario
    datosUsuario = JSON.parse(datosUsuario);
    nombreInput.value = datosUsuario.nombre;
    emailInput.value = datosUsuario.email;
    contrasenaInput.value = datosUsuario.contrasena;
    telefonoInput.value = datosUsuario.telefono;
  }

  // Función para guardar los datos en el Local Storage
  function guardarDatos() {
    var datos = {
      nombre: nombreInput.value,
      email: emailInput.value,
      contrasena: contrasenaInput.value,
      telefono: telefonoInput.value
    };

    // Guardar los datos en el Local Storage
    localStorage.setItem("datosUsuario", JSON.stringify(datos));
    alert("Datos guardados correctamente.");
  }

  // Función para habilitar la edición del formulario
  function habilitarEdicion() {
    nombreInput.removeAttribute("readonly");
    emailInput.removeAttribute("readonly");
    contrasenaInput.removeAttribute("readonly");
    telefonoInput.removeAttribute("readonly");
    guardarBtn.style.display = "block";
    editarBtn.style.display = "none";
  }

  // Asignar eventos a los botones
  guardarBtn.addEventListener("click", guardarDatos);
  editarBtn.addEventListener("click", habilitarEdicion);
});
