const btnEstilo = document.getElementById("botonEstilo");

export function cambiarParrafo() {
  const parrafo = document.getElementById("parrafo");

  parrafo.style.fontFamily = "monospace";
  parrafo.style.fontSize = "3rem";
  parrafo.style.color = "blue";
}

export function configurarEventoParrafo(callback) {
  btnEstilo.addEventListener("click", callback);
}

export function enviarFormulario(callback) {
  const formulario = document.getElementById("form1");

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = formulario.elements["fname"].value.trim();
    const apellido = formulario.elements["lname"].value.trim();

    callback(nombre, apellido);
  });
}
