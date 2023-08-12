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

document.addEventListener('DOMContentLoaded', function () {
  var modalOverlay = document.getElementById('modalOverlay');
  var contactButton = document.getElementById('contactButton');
  var contactButton2 = document.getElementById('contactButton2');

  function openModal() {
    modalOverlay.style.display = 'flex';
  }

  function closeModal() {
    modalOverlay.style.display = 'none';
  }

  modalOverlay.addEventListener('click', function (event) {
    if (event.target === modalOverlay) {
      closeModal();
    }
  });

  contactButton.addEventListener('click', openModal);
  contactButton2.addEventListener('click', openModal);
});

