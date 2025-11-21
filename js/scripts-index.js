
//MENU HAMBURGUESA
const listMenu = document.getElementById("listMenu");
const menuHamburger = document.getElementById("menuHamburger");
const btnCerrar = document.getElementById("btnCerrar");

menuHamburger.addEventListener("click", () => {
    listMenu.classList.remove("ocultoMenu");
    menuHamburger.classList.add("ocultoMenu");


});
btnCerrar.addEventListener("click", () => {

    listMenu.classList.add("ocultoMenu");
    menuHamburger.classList.remove("ocultoMenu");

});



const links = document.querySelectorAll(".linkNav");

// cerrar al pulsar un link
links.forEach(link => {
    link.addEventListener("click", () => {
        listMenu.classList.add("ocultoMenu");
    });
});