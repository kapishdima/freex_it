import "./styles/index.scss";

// burger

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

//Modal

function openModal() {
  var modalOverlay = document.getElementById('modalOverlay');
  var modalContent = document.getElementById('modalContent');
  modalOverlay.style.display = 'flex';
  modalContent.innerHTML = '<p>Здесь можно добавить свой контент для модального окна</p>';
}

function closeModal() {
  var modalOverlay = document.getElementById('modalOverlay');
  modalOverlay.style.display = 'none';
}