import { cambiarParrafo, enviarFormulario } from "./events.js";

const btnEstilo = document.getElementById("botonEstilo");
btnEstilo.addEventListener("click", cambiarParrafo);

enviarFormulario((nombre, apellido) => {
  console.log(`Nombre: ${nombre}`);
  console.log(`Apellido: ${apellido}`);
});