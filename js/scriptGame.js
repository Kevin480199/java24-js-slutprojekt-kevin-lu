import { renderNavbar } from "/java24-js-slutprojekt-kevin-lu/js/module/render.js";
import { playGame } from "/java24-js-slutprojekt-kevin-lu/js/module/game.js";

renderNavbar();

const reset = document.querySelector('#reset');
if (reset) {
    reset.addEventListener('click', playGame);
}