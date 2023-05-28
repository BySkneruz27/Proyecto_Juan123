var servicesData = [
  { servicio: "Sincronización", descripcion: "Ajuste de la sincronización del motor", precio: "$50,000" },
  { servicio: "Calibración de válvulas", descripcion: "Ajuste y verificación de las válvulas del motor", precio: "$80,000" },
  { servicio: "Cambio de aceite", descripcion: "Cambio de aceite y filtro de aceite", precio: "$25,000" },
  { servicio: "Limpieza de carburador", descripcion: "Limpieza y ajuste del carburador", precio: "$60,000" },
  { servicio: "Ajuste de frenos", descripcion: "Ajuste y verificación del sistema de frenos", precio: "$30,000" },
  { servicio: "Cambio de bujías", descripcion: "Reemplazo de las bujías de encendido", precio: "$20,000" },
  { servicio: "Revisión de sistema eléctrico", descripcion: "Verificación y reparación de fallas en el sistema eléctrico", precio: "$40,000" },
  { servicio: "Cambio de cadena de transmisión", descripcion: "Reemplazo de la cadena de transmisión y ajuste", precio: "$70,000" },
  { servicio: "Alineación de ruedas", descripcion: "Ajuste y alineación de las ruedas", precio: "$35,000" },
  { servicio: "Revisión de sistema de suspensión", descripcion: "Verificación y ajuste del sistema de suspensión", precio: "$45,000" }
];

var servicesTable = document.getElementById("services-table");
var servicesList = document.getElementById("services-list");

// Generar filas de la tabla
servicesData.forEach(function(service) {
  var row = document.createElement("tr");

  var servicioCell = document.createElement("td");
  servicioCell.innerText = service.servicio;
  row.appendChild(servicioCell);

  var descripcionCell = document.createElement("td");
  descripcionCell.innerText = service.descripcion;
  row.appendChild(descripcionCell);

  var precioCell = document.createElement("td");
  precioCell.innerText = service.precio;
  row.appendChild(precioCell);

  servicesList.appendChild(row);
});

  
  
  var partsTable = document.getElementById("parts-table");
  var partsList = document.getElementById("parts-list");
  
  // Generar filas de la tabla
  partsData.forEach(function(part) {
    var row = document.createElement("tr");
  
    var marcaCell = document.createElement("td");
    marcaCell.innerText = part.marca;
    row.appendChild(marcaCell);
  
    var modeloCell = document.createElement("td");
    modeloCell.innerText = part.modelo;
    row.appendChild(modeloCell);
  
    var repuestoCell = document.createElement("td");
    repuestoCell.innerText = part.repuesto;
    row.appendChild(repuestoCell);
  
    var precioCell = document.createElement("td");
    precioCell.innerText = part.precio;
    row.appendChild(precioCell);
  
    partsList.appendChild(row);
  });
  