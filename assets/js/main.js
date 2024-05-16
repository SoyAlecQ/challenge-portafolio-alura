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

function enviarCorreo() {

    var asunto = document.getElementById("asunto").value.trim();
    var mensaje = document.getElementById("mensaje").value.trim();

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "byalmon@gmail.com",
        Password: "F396B9517CE3E1FC6295358F6003800E88ED",
        To: 'byalmon@gmail.com',
        From: "byalmon@gmail.com",
        Subject: asunto,
        Body: mensaje
    }).then(
        message => alert(message)
    );
}

function validarFormulario() {

    var nombre = document.getElementById("nombre").value.trim();
    var email = document.getElementById("email").value.trim();
    var asunto = document.getElementById("asunto").value.trim();
    var mensaje = document.getElementById("mensaje").value.trim();

    var errorNombre = document.getElementById("errorNombre");
    var errorEmail = document.getElementById("errorEmail");
    var errorAsunto = document.getElementById("errorAsunto");
    var errorMensaje = document.getElementById("errorMensaje");
    var enviarBoton = document.getElementById("enviarBoton");

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

    // Enviar el formulario
    enviarCorreo();
}