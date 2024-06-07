const data = require("js/data.json");

console.log(data);
var source = document.getElementById("bakerypage-template").innerHTML;
var template = Handlebars.compile(source);

var html = template(data);

document.getElementById("bakery-page").innerHTML = html;

console.log(html);
