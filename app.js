import data from "/data.json" with { type: "json" };

//get the bakery number for the profile that was selected
let url = new URL(document.location);
let params = url.searchParams;
let bakeryNumber = params.get("bakeryNumber");

//set up a filter to filter the array for objects whos bakery number matches the bakerNumber then grab the first object from that filtered set







var source = document.getElementById("bakerypage-template").innerHTML;

var template = Handlebars.compile(source);

var html = template(data);
console.log(html)

document.getElementById("bakery-page").innerHTML = html;

