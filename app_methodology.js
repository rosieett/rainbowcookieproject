const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

openModalBtn.addEventListener("click", openModal);

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const body = document.querySelector("body");
const backdrop = document.createElement("div");
backdrop.classList.add("menu-backdrop");

body.appendChild(backdrop);

burger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
  backdrop.classList.toggle("display"); // Show or hide the backdrop

  // Burger Animation
  burger.classList.toggle("toggle");
});

backdrop.addEventListener("click", function () {
  navLinks.classList.remove("nav-active");
  this.classList.remove("display"); // Hide the backdrop when clicked
  burger.classList.remove("toggle");
});
