// blocking scroll until something happens


document.querySelector("#hide").addEventListener("click",function(){
  document.body.classList.toggle("overflow-hidden");
  // for adding class once and it settles
  // document.body.classList.add("overflow-hidden");
})