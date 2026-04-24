/*
    ARCHIVO: scripts.js
 Menú hamburguesa (mostrar/ocultar nav)
*/

/* Botón hamburguesa */
const toggleBtn = document.getElementById("menu-toggle");

/* Lista del menú */
const menu = document.getElementById("nav-menu");

/* Verifica que existan antes de agregar el evento */
if (toggleBtn && menu) {

    /* Abrir / cerrar menú al hacer click */
    toggleBtn.addEventListener("click", function () {

        /* Activa o desactiva la clase responsive */
        menu.classList.toggle("active");
    });
}


