let input = document.querySelector("input");

let data = [
  {
    name: "Maheshwari",
    src: "https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Shreya",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Aradhya",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Shruti",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Lavanya",
    src: "https://images.unsplash.com/photo-1607957159143-de3859adca2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
  },
];


var pers = "";
  data.forEach(function (elem) {
    pers += `<div class="person">
           <div class="img">
             <img src="${elem.src}">
           </div>
           <h4>${elem.name}</h4>
         </div>`;
  });

  document.querySelector(".people").innerHTML = pers;




input.addEventListener("input", function () {
  var matching = data.filter(function (e) {
    return e.name.startsWith(input.value)
  })

  var newUsers = "";
  matching.forEach(function (elem) {
    newUsers += `<div class="person">
           <div class="img">
             <img src="${elem.src}">
           </div>
           <h4>${elem.name}</h4>
         </div>`;
  });

  document.querySelector(".people").innerHTML = newUsers;
});
