const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
let h3 = document.querySelector("h3");
var interval;

start.addEventListener("click", function () {
  var count =0;
  interval = setInterval(function(){
    h3.textContent=count;
    count++;
  },1000);
});

stop.addEventListener("click",function(){
  clearInterval(interval);
});
