let form = document.querySelector("#form");
let nameinput = document.querySelector("#name");
let sendButton = document.querySelector("#sendButton");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = nameinput.value;
  console.log(name);
  form.submit();
});

let submitted = false;
