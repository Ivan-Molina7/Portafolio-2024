const hamMenu = document.querySelector(".ham-menu");
const nav = document.querySelector(".header nav");
const navList = document.querySelector(".nav__list");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("open");
  nav.classList.toggle("open");

  if(nav.classList.contains("open")){
    document.body.style.overflow = 'hidden';
  }
});

document.addEventListener("click", (event) => {
  if (
    nav.classList.contains("open") && // Si el menú está abierto
    !navList.contains(event.target) && // Y el clic NO fue dentro del menú
    !hamMenu.contains(event.target) // Ni en el botón de hamburguesa
  ) {
    document.body.style.overflow = '';
    nav.classList.remove("open");
    hamMenu.classList.remove("open");
  }
});
