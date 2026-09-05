import { loadHomePage } from "./home.js";
import { loadMenuPage } from "./menu.js";
loadHomePage();

const menuButton = document.querySelector(".menu-btn");
const content = document.querySelector("#content");

menuButton.addEventListener("click", function(){
    content.innerHTML = "";
    loadMenuPage();
});

const homeButton = document.querySelector(".home-btn");

homeButton.addEventListener("click", function() {
    content.innerHTML = "";
    loadHomePage();
});
