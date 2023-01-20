
/* window.addEventListener('load', function () {
  'use strict';

  const e_copyright = document.getElementById("copyright");
  e_copyright.addEventListener('load', getCopyright());

}); */

document.addEventListener("DOMContentLoaded", function () {

  // Cargar copyright
  const e_copyright = document.getElementById("copyright");
  e_copyright.addEventListener('load', getCopyright());

  // Validacion formulario
  const e_formContacto = document.getElementById("formContacto");
  e_formContacto.addEventListener('submit', validarForm);

});


/* Obtener copyright */
function getCopyright() {

  let lv_year = new Date().getFullYear();
  let lv_copyright = "&copy; Copyright " + lv_year + " - MGC Studio Consulting";
  document.getElementById("copyright").innerHTML = lv_copyright;

}

/* Validar formulario */
function validarForm(evento) {

  evento.preventDefault();

  var valueNombre = document.getElementById('formName').value;
  if (!validarDato(valueNombre)) {
    mostrarAlerta("Falta completar informacion");
    return;
  };

  var valueEmail = document.getElementById('formEmail').value;
  if (!validarEmail(valueEmail)) {
    mostrarAlerta("Correo electronico inválido");
    return;
  };

  this.submit();
  this.reset();
  mostrarAlerta("Formulario enviado correctamente!");

}

function validarDato(value) {
  if (value.length == 0) {
    return false;
  } else {
    return true;
  }
}

/* Validar Correo electronico */
function validarEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return (true);
  } else {
    return (false);
  }
}

/* Enviar alerta */
function mostrarAlerta(message) {
  alert(message);
}