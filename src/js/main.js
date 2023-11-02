const btnMenu = document.getElementById("menu-btn");
const navMenu = document.getElementById("menu");

btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("open");
  navMenu.classList.toggle("hidden");
});
