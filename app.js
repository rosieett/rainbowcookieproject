import data from "/data.json" with { type: "json" };


//get the bakery number for the profile that was selected
let url = new URL(document.location);
let params = url.searchParams;
let bakeryID = params.get("bakeryNumber");

//set up a filter to filter the array for objects whos bakeryID matches the bakeryNumber then grab the first object from that filtered set
let result = data.filter((b) => b.bakeryNumber == bakeryID)[0]
console.log(result)


var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);
var context = result;

var html = template(context);

document.getElementById("profile").innerHTML = html;






// document.getElementById("bakery-page").innerHTML = html;

// var context = {bakeryhed: "test info"};
// var html = template(context);


