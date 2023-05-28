// Función para cargar y mostrar las citas activas desde localStorage
function cargarCitasActivas() {
    // Obtener citas activas de localStorage
    let citasActivas = localStorage.getItem("citasActivas");
    citasActivas = citasActivas ? JSON.parse(citasActivas) : [];
  
    // Obtener tabla de citas activas
    const tablaCitasActivas = document.getElementById("tabla-citas-activas");
  
    // Limpiar tabla
    tablaCitasActivas.innerHTML = "";
  
    // Generar filas de la tabla con las citas activas
    citasActivas.forEach((cita, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${cita.nombre}</td>
        <td>${cita.telefono}</td>
        <td>${cita.placa}</td>
        <td>${cita.modelo}</td>
        <td>${cita.dni}</td>
        <td>${cita.lugar}</td>
        <td>${cita.fechaHora}</td>
        <td>${cita.problema}</td>
      `;
      tablaCitasActivas.appendChild(row);
    });
    window.addEventListener('beforeunload', function() {
      // Limpiar o eliminar el contenido del local storage
      //localStorage.clear(); CLEAN
    });
  }
  
  // Cargar y mostrar las citas activas al cargar la página
  document.addEventListener("DOMContentLoaded", cargarCitasActivas);
  