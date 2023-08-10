import "./styles/index.scss";

document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.querySelector(".burger-icon");
  const burgerNav = document.querySelector(".burger-nav");

  burgerIcon.addEventListener("click", function () {
    burgerNav.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    if (!burgerNav.contains(event.target) && !burgerIcon.contains(event.target)) {
      burgerNav.classList.remove("active");
    }
  });
});
