import {
  configurarEventoParrafo,
  cambiarParrafo,
  enviarFormulario,
} from "./events.js";

configurarEventoParrafo(cambiarParrafo);

enviarFormulario((nombre, apellido) => {
  console.log(`Nombre: ${nombre}`);
  console.log(`Apellido: ${apellido}`);
});
