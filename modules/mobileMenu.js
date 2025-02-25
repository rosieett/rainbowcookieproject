export function mobileMenu() {

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

var burger = document.querySelector(".burger");
var navlinks = document.querySelector(".ul");

burger.addEventListener("click", function () {
  this.classList.toggle("is-active");
  navlinks.classList.toggle("is-active");
});

}