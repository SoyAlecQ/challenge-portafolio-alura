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