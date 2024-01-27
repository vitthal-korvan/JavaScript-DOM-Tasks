let home = document.querySelector(".tab1");
let about = document.querySelector(".tab2");
let contact = document.querySelector(".tab3");
let hometext = document.querySelector(".home");
let abouttext = document.querySelector(".about");
let contacttext = document.querySelector(".contact");

let h3 = document.querySelector("h3");

home.addEventListener("click", function () {
  displaying();
  hometext.style.display = "block";
});
about.addEventListener("click", function () {
  displaying();
  abouttext.style.display = "block";
});
contact.addEventListener("click", function () {
  displaying();
  contacttext.style.display = "block";
});

function displaying() {
  document.querySelectorAll("h3").forEach(function (h3) {
    h3.style.display = "none";
  });
}
