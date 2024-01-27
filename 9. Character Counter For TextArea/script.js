var txtarea = document.querySelector("textarea");
var counter = document.querySelector("#counter");

txtarea.addEventListener("input",function(){
  counter.textContent = txtarea.value.length;
});