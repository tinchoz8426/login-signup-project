const buttonMenu = document.querySelector(".fas");
const links = document.querySelector(".nav-left__list");

buttonMenu.addEventListener("click", () =>{
    links.classList.toggle("active");
})