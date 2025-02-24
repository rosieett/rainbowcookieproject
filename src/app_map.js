import data from "../data/data.json" with { type: "json" };
import { bakeryinfo } from "/modules/bakeryscores.js";
import { mobileMenu } from "../modules/mobileMenu.js";



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


mobileMenu();