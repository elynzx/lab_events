const btnEstilo = document.getElementById("botonEstilo");
const formulario = document.getElementById("form1");

export function cambiarParrafo() {
  const parrafo = document.getElementById("parrafo");

  parrafo.style.fontFamily = "monospace";
  parrafo.style.fontSize = "3rem";
  parrafo.style.color = "blue";
}

export function configurarEventoParrafo(callback) {
  btnEstilo.addEventListener("click", callback);
}

function mostrarValores(event) {
  event.preventDefault();
  const nombre = formulario.elements["fname"].value.trim();
  const apellido = formulario.elements["lname"].value.trim();
  console.log("fname:", nombre);
  console.log("lname:", apellido);
}

export function enviarFormulario() {
  formulario.addEventListener("submit", mostrarValores);
}
