/* Función que oculta o muestra el menú */

let menuVisible = false;

function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("menu__nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("menu__nav").classList = "responsive";
        menuVisible = true;
    }
}

/* Función que oculta el menú al seleccionar opción */

function seleccionar() {
    document.getElementById("menu__nav").classList = "";
    menuVisible = false;
}

/* Función que valida el formulario de contacto */

const form = document.querySelector("form");

const nombre = document.getElementById("nombre").value.trim();
const email = document.getElementById("email").value.trim();
const asunto = document.getElementById("asunto").value.trim();
const mensaje = document.getElementById("mensaje").value.trim();

function enviarCorreo() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "byalmon@gmail.com",
        Password: "F396B9517CE3E1FC6295358F6003800E88ED",
        To: 'byalmon@gmail.com',
        From: "byalmon@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    enviarEmail();
});

function validarFormulario() {

    // Validación del campo Nombre
    if (nombre === "") {
        errorNombre.innerHTML = "Por favor, ingresa tu nombre.";
        return false;
    } else if (nombre.length > 50) {
        errorNombre.innerHTML = "El nombre no debe exceder los 50 caracteres.";
        return false;
    } else {
        errorNombre.innerHTML = "";
    }

    // Validación del campo Email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        errorEmail.innerHTML = "Por favor, ingresa tu correo electrónico.";
        return false;
    } else if (!emailRegex.test(email)) {
        errorEmail.innerHTML = "Por favor, ingresa un correo electrónico válido.";
        return false;
    } else {
        errorEmail.innerHTML = "";
    }

    // Validación del campo Asunto
    if (asunto === "") {
        errorAsunto.innerHTML = "Por favor, ingresa un asunto.";
        return false;
    } else if (asunto.length > 50) {
        errorAsunto.innerHTML = "El asunto no debe exceder los 50 caracteres.";
        return false;
    } else {
        errorAsunto.innerHTML = "";
    }

    // Validación del campo Mensaje
    if (mensaje === "") {
        errorMensaje.innerHTML = "Por favor, ingresa un mensaje.";
        return false;
    } else if (mensaje.length > 300) {
        errorMensaje.innerHTML = "El mensaje no debe exceder los 300 caracteres.";
        return false;
    } else {
        errorMensaje.innerHTML = "";
    }

    // Habilitar el botón de enviar
    enviarBoton.disabled = false;

    // Enviar el formulario
    return true;
}