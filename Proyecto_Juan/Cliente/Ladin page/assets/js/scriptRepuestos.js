var partsData = [
  { marca: "Bajaj", modelo: "Pulsar NS200", repuesto: "Filtro de aire", precio: "$35,000" },
  { marca: "Bajaj", modelo: "Discover 125", repuesto: "Pastillas de freno", precio: "$25,000" },
  { marca: "Bajaj", modelo: "Dominar 400", repuesto: "Kit de cadena", precio: "$180,000" },
  { marca: "Bajaj", modelo: "Platina 100", repuesto: "Batería", precio: "$70,000" },
  { marca: "Bajaj", modelo: "Avenger 220", repuesto: "Llantas", precio: "$250,000" },
  { marca: "TVS", modelo: "Apache RTR 160", repuesto: "Aceite de motor", precio: "$25,000" },
  { marca: "TVS", modelo: "Jupiter", repuesto: "Kit de embrague", precio: "$40,000" },
  { marca: "TVS", modelo: "Ntorq 125", repuesto: "Espejos laterales", precio: "$30,000" },
  { marca: "TVS", modelo: "Radeon", repuesto: "Farola delantera", precio: "$20,000" },
  { marca: "TVS", modelo: "Star City Plus", repuesto: "Filtro de aceite", precio: "$10,000" },
  { marca: "Yamaha", modelo: "FZ25", repuesto: "Caja de cambios", precio: "$120,000" },
  { marca: "Yamaha", modelo: "YZF R15 V3", repuesto: "Sistema de escape", precio: "$180,000" },
  { marca: "Yamaha", modelo: "MT-15", repuesto: "Filtro de aire", precio: "$25,000" },
  { marca: "Yamaha", modelo: "FZ-S FI", repuesto: "Farola trasera", precio: "$30,000" },
  { marca: "Yamaha", modelo: "RayZR 125", repuesto: "Bujía", precio: "$12,000" },
  { marca: "Suzuki", modelo: "Gixxer SF 250", repuesto: "Llantas", precio: "$320,000" },
  { marca: "Suzuki", modelo: "Access 125", repuesto: "Filtro de aire", precio: "$20,000" },
  { marca: "Suzuki", modelo: "Gixxer 155", repuesto: "Pastillas de freno", precio: "$30,000" },
  { marca: "Suzuki", modelo: "Hayabusa", repuesto: "Kit de pistón", precio: "$800,000" },
  { marca: "Suzuki", modelo: "V-Strom 650", repuesto: "Batería", precio: "$150,000" },
  { marca: "Kawasaki", modelo: "Ninja 300", repuesto: "Aceite de motor", precio: "$50,000" },
  { marca: "Kawasaki", modelo: "Z650", repuesto: "Kit de embrague", precio: "$90,000" },
  { marca: "Kawasaki", modelo: "Versys 650", repuesto: "Espejos laterales", precio: "$70,000" },
  { marca: "Kawasaki", modelo: "Ninja 650", repuesto: "Farola delantera", precio: "$80,000" },
  { marca: "Kawasaki", modelo: "Z900", repuesto: "Filtro de aceite", precio: "$40,000" }
];

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

