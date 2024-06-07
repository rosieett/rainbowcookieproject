var source = document.getElementById("bakerypage-template").innerHTML;
var template = Handlebars.compile(source);

var context = {
  title: "Hello world",
  body: "this is the body",
};
var html = template(context);

document.getElementById("bakery-page").innerHTML = html;

console.log(html);
