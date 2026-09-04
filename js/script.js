

document.getElementById("year").textContent = new Date().getFullYear();
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    const scroll = window.scrollY;

    /* Cuánto se mueve la imagen */
const movimiento = Math.min(scroll * 0.6, 90);
    header.style.backgroundPosition =
        `center calc(50% + ${movimiento}px)`;
        

});