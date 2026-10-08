const btnEstilo = document.getElementById("botonEstilo");
const formulario = document.getElementById("form1");
const btnEnlaces = document.getElementById("botonEnlaces");

function cambiarParrafo() {
  const parrafo = document.getElementById("parrafo");

  parrafo.style.fontFamily = "monospace";
  parrafo.style.fontSize = "3rem";
  parrafo.style.color = "blue";
}

export function configurarEventoParrafo() {
  btnEstilo.addEventListener("click", cambiarParrafo);
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

function mostrarInformacionEnlaces() {
  const enlaces = document.querySelectorAll("a");
  if (enlaces.length === 0) return;

  const total = enlaces.length;
  const primero = enlaces[0].href;
  const ultimo = enlaces[enlaces.length - 1].href;

  alert(`Información:
  - Total de enlaces: ${total}
  - Primer enlace: ${primero}
  - Último enlace: ${ultimo}`);
}

export function mostrarAlerta() {
  btnEnlaces.addEventListener("click", mostrarInformacionEnlaces);
}

export function manipularDom() {
  const contenedor = document.getElementById("contenedor");
  const segundo = document.querySelectorAll(".segundo");
  const tercero = document.querySelector("ol .tercero");

  contenedor.textContent = "¡Hola!";

  const footer = document.querySelector(".footer");
  footer.classList.add("principal");
  footer.classList.remove("principal");

  const elementoLi = document.createElement("li");
  elementoLi.textContent = "cuatro";

  const listaUl = document.querySelector("ul");
  listaUl.append(elementoLi);
}
