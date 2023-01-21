
document.addEventListener("DOMContentLoaded", function () {

  // Cargar copyright
  const e_copyright = document.getElementById("copyright");
  e_copyright.addEventListener('load', getCopyright());

  // Validacion formulario en submit
  const e_formContacto = document.getElementById("formContacto");
  e_formContacto.addEventListener('submit', validarForm);

  // Validacion elementos individuales

});

/* Obtener copyright */
function getCopyright() {
  let lv_year = new Date().getFullYear();
  let lv_copyright = "&copy; Copyright " + lv_year + " - MGC Studio Consulting";
  document.getElementById("copyright").innerHTML = lv_copyright;
}

/* Validar formulario */
function validarForm(evento) {

  let lv_form_valid = "X";

  evento.preventDefault();

  // Validar input Nombre
  var formName = document.getElementById('formName');
  if (validarDato(formName.value)) {
    setValid(formName);
  } else {
    setInvalid(formName, lv_form_valid);
    formName.focus();
    return;
  };

  // Validar input Apellido
  var formLastName = document.getElementById('formLastName');
  if (validarDato(formLastName.value)) {
    setValid(formLastName);
  } else {
    setInvalid(formLastName, lv_form_valid);
    formLastName.focus();
    return;
  };

  // Validar input Correo electronico
  let formEmail = document.getElementById('formEmail');
  let formEmail_if = document.getElementById("invalid-feedback-formEmail");
  if (validarDato(formEmail.value)) {
    setValid(formEmail);

    if (!validarEmail(formEmail.value)) {
      setInvalid(formEmail, lv_form_valid);
      formEmail_if.innerHTML = "Correo electrónico inválido";
      return;
    };

  } else {
    formEmail_if.innerHTML = "Ingresar Correo electrónico";
    setInvalid(formEmail, lv_form_valid);
    formEmail.focus();
    return;
  };

  // Validar input Mensaje
  var formMessage = document.getElementById('formMessage');
  if (validarDato(formMessage.value)) {
    setValid(formMessage);
  } else {
    setInvalid(formMessage, lv_form_valid);
    formMessage.focus();
    return;
  };

  if (lv_form_valid) {
    this.submit();
    this.reset();
    //mostrarAlerta("Formulario enviado correctamente!");
  }

}

function validarDato(value) {
  if (value.length == 0) {
    return false;
  } else {
    return true;
  }
}

function setValid(elemento) {
  elemento.classList.remove('is-invalid');
  elemento.classList.add('is-valid');
}

function setInvalid(elemento, iv_form_valid) {
  iv_form_valid = "";
  elemento.classList.add('is-invalid');
  elemento.classList.remove('is-valid');
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

(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false)
    })
})()