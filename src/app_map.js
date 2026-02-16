import data from "../data/data.json" with { type: "json" };
import { bakeryinfo } from "/modules/bakeryscores.js";
import { mobileMenu } from "../modules/mobileMenu.js";

// Create map (no setView when using fitBounds)
var map = L.map('map');

// Add tile layer
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  maxZoom: 22,
}).addTo(map);

// Custom pin icon
var pinIcon = L.icon({
  iconUrl: 'images/Pin.png'
});

// Store marker coordinates
let markers = [];

// Loop through data and create markers
data.forEach(item => {
  console.log(item);

  let marker = L.marker([item.lat, item.lng], { icon: pinIcon })
    .addTo(map)
    .bindPopup(`
      <p>${item.bakeryhed}</p>
      <p>Overall Score: ${item.Overall}</p>
    `);

  markers.push([item.lat, item.lng]);
});

// Automatically fit map to all markers
map.fitBounds(markers, { padding: [25, 25] });

// Run mobile menu
mobileMenu();
