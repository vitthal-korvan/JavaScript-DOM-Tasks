setInterval(()=>{
      let dt = new Date();
      let str =
        (dt.getHours() % 12) +
        " : " +
        dt.getMinutes() +
        " : " +
        dt.getSeconds();
      dt.getHours() % 12 > 0 ? (str += " PM ") : " AM ";

      document.querySelector(".timing1").textContent = str;
},1000)


setInterval(() => {
  let dt = new Date();
  let str =
    (dt.getHours() % 12) + " : " + dt.getMinutes() + " : " + dt.getSeconds();
  dt.getHours() % 12 > 0 ? (str += " PM ") : " AM ";

  document.querySelector(".timing2").textContent = str;
}, 1000);

setInterval(() => {
  let dt = new Date();
  let str =
    (dt.getDate()) + " / " + (dt.getMonth()+1) + " / " + dt.getFullYear();


  document.querySelector(".date").textContent = str;
}, 1000);


let date = new Date();
console.log(date.getDate());
console.log(date.getMonth()+1);
console.log(date.getFullYear());


