import data from "/data.json" with { type: "json" };

let lat = data.forEach((i) => {
    return i.lat;
})

let lng = data.forEach((i) => {
    return i.lng;
})




// let info = data.forEach((i) => {
//   return `["${i.bakeryhed}", ${i.lat}, ${i.lng}]`
// })

// console.log(info)


var locations = [
  ["Leli's Bakery & Pastry Shop", 40.7652558, -73.9178739, "Overall score: 4"],
  ["Parisi Bakery", 40.764889, -73.916199],
  ["Astoria Bakery", 40.7748712, -73.9089097],
  ["Paris Oven", 40.7639406, -73.9154967],
  ["Il Fornaio (34th Street)", 40.7657681, -73.9193608],
  ["Gian Piero Bakery", 40.7618985, -73.9107291],
  ["Oasis Cafe", 40.7647836, -73.923529],
  ["Rose & Joe's Italian Bakery", 40.7753672, -73.9119151],
  ["New York Bakery Café", 40.7709075, -73.9299954],
  ["Il Fornaio (29th Street)", 40.7676046, -73.9232361],
  ["Omonia Cafe", 40.759924, -73.921255],
  ["Martha's Country Bakery", 40.774032, -73.9074739],
  ["La Guli Pastry Shop", 40.776788, -73.911535],
  ["Valerio Bakery", 40.783913, -73.845520],
  ["Cascon Cheesecakes", 40.794168, -73.818232],
  ["Aphrodites Sweets", 40.780095, -73.802159],
  ["Sweet treats pastry shop", 40.748474, -73.756576],
  ["Queens pita", 40.730164, -73.821997],
  ["La Dolce Italian", 40.711338, -73.856448],
  ["Andre's Hungarian Bakery", 40.7264442, -73.8531571]
];



var map = L.map('map').setView([40.764889, -73.916199], 13);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:  '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19,
  }).addTo(map);

for (var i = 0; i < locations.length; i++) {

 let marker = new L.marker([locations[i][1], locations[i][2]])
    .bindPopup(locations[i][0])
    .addTo(map);
}