// Obtener elementos del formulario
const form = document.getElementById("agendar-cita-form");
const lugarSelect = document.getElementById("lugar");
const fechaHoraSelect = document.getElementById("fecha-hora");
const tablaCitasActivas = document.getElementById("tabla-citas-activas");

// Opciones de lugares con fechas y horas
const lugares = [
  {
    lugar: "Lugar 1",
    fechas: [
      { fecha: "2023-06-01", hora: "08:30 AM" },
      { fecha: "2023-06-02", hora: "09:00 AM" },
      { fecha: "2023-06-03", hora: "10:00 AM" },
    ],
  },
  {
    lugar: "Lugar 2",
    fechas: [
      { fecha: "2023-06-01", hora: "10:30 AM" },
      { fecha: "2023-06-02", hora: "11:00 AM" },
      { fecha: "2023-06-03", hora: "12:00 PM" },
    ],
  },
  // Agrega más lugares y fechas aquí según sea necesario
];

// Función para generar opciones de fechas y horas
function generarOpcionesFechas() {
  const lugarSeleccionado = lugarSelect.value;
  const lugar = lugares.find((l) => l.lugar === lugarSeleccionado);

  // Restablecer opciones
  fechaHoraSelect.innerHTML = "<option disabled selected>Seleccionar Fecha y Hora</option>";

  // Generar nuevas opciones
  lugar.fechas.forEach((f) => {
    const option = document.createElement("option");
    option.value = f.fecha + " " + f.hora;
    option.textContent = `Fecha: ${f.fecha}, Hora: ${f.hora}`;
    fechaHoraSelect.appendChild(option);
  });
}

// Agregar evento al cambiar la selección del lugar
lugarSelect.addEventListener("change", generarOpcionesFechas);

// Función para guardar la cita en localStorage
function guardarCita() {
  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const placa = document.getElementById("placa").value;
  const modelo = document.getElementById("modelo").value;
  const dni = document.getElementById("dni").value;
  const lugar = lugarSelect.value;
  const fechaHora = fechaHoraSelect.value;
  const problema = document.getElementById("problema").value;

  const cita = {
    nombre,
    telefono,
    placa,
    modelo,
    dni,
    lugar,
    fechaHora,
    problema,
  };

  // Obtener citas guardadas en localStorage
  let citasActivas = localStorage.getItem("citasActivas");
  citasActivas = citasActivas ? JSON.parse(citasActivas) : [];

  // Agregar nueva cita
  citasActivas.push(cita);

  // Guardar citas en localStorage
  localStorage.setItem("citasActivas", JSON.stringify(citasActivas));

  // Actualizar tabla de citas activas
  actualizarTablaCitasActivas();

  // Restablecer formulario
  form.reset();

  alert("La cita ha sido agendada con éxito.");
}

// Función para actualizar la tabla de citas activas
function actualizarTablaCitasActivas() {
  // Obtener citas activas de localStorage
  let citasActivas = localStorage.getItem("citasActivas");
  citasActivas = citasActivas ? JSON.parse(citasActivas) : [];

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
}

// Agregar evento al enviar el formulario
form.addEventListener("submit", function (e) {
  e.preventDefault();
  guardarCita();
});


// Actualizar tabla de citas activas al cargar la página
actualizarTablaCitasActivas();
