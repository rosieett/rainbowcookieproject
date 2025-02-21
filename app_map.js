import data from "/data.json" with { type: "json" };
import { bakeryinfo } from "/modules/bakeryscores.js";


var map = L.map('map').setView([40.763098, -73.843033], 12);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:  '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 22,
  }).addTo(map);

  var pinIcon = L.icon({
    iconUrl: 'images/Pin.png'
  })

data.forEach(data => {
  console.log(data)
  let marker = L.marker([data.lat,data.lng],{icon: pinIcon})
    .addTo(map)
    .bindPopup(`<p>${data.bakeryhed}<br> <p>Overall Score: ${data.Overall}</p>`
    )
})



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
