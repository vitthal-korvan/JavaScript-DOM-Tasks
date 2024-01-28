// Working with Local Storage:
/*
localStorage ek aisa space hai browser ke paas jismein tum
data store kardo to data stored hi rehta hai, aap chaahe to
browser band krdo, refresh krdo ya kuchh bhi karo aapka data
stored rahega jab tak aap khud usey delete naa kar de

localstorage poore browser ka hota hai ya website ka, local storage hota
to browser ka part hai par data store ye website ke naam se
karta hai
*/

// ek button banao jisse aap user block kardo ab website khole use screen par blocked dikhey, nahi toh button show ho and ek button jisse wo unblock ho

const block = document.querySelector("#block");

const unblock = document.querySelector("#unblock");

block.addEventListener("click",function(){
  localStorage.setItem("block",true);
  show();
})

unblock.addEventListener("click",function(){
  localStorage.setItem("block",false);
  show();
})

function show(){
  if(localStorage.getItem("block")==='false'){
    document.querySelector("#status span").textContent = "Not Blocked"
  }
  else{
    document.querySelector("#status span").textContent = "Blocked"
  }
  
}

show();