const menu = document.querySelector(".menu");
const butMenu = document.querySelector(".but-menu");
const iconBars = document.querySelector(".icon-bars");
const iconClose = document.querySelector(".icon-close");

butMenu.addEventListener("click", displayMenu);
menu.addEventListener("click", displayMenu);

function displayMenu() {
  if (menu.classList.contains("tampil")) {
    menu.classList.remove("tampil");
    iconBars.style.display = "inline";
    iconClose.style.display = "none";
  } else {
    menu.classList.add("tampil");
    iconBars.style.display = "none";
    iconClose.style.display = "inline";
  }
}
