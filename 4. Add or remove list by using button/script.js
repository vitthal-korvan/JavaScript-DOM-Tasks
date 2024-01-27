const ul = document.querySelector("ul");
const add = document.querySelector(".add");
const remove = document.querySelector(".remove");
const input = document.querySelector("input");
let li ;

add.addEventListener("click", function () {
  if (input.value.trim() === "") {
  } else {
    li=document.createElement("li");
    li.textContent=input.value;
    ul.appendChild(li);
    input.value="";
  }
});

remove.addEventListener("click", function () {
  ul.removeChild(li);
});
