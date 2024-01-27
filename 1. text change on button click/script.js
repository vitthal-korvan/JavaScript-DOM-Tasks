const btn = document.querySelector("button");
const p = document.querySelector("p");

btn.addEventListener("click", function () {
  p.innerHTML += " <br> and I'm a front end web developer"; // it'll go the next line because the <br> will work as break tag.
  //p.textContent += "<br> and I'm a front end web developer"; // it'll just print <br> as it is.
});
