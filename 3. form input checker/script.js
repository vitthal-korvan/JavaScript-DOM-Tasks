const h4 = document.querySelector("h4");
const form = document.querySelector("form");
const inp = document.querySelectorAll("input[type='text']");

// const txt1 = document.querySelector(".txt1");
// const txt2 = document.querySelector(".txt2");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  for(let i=0;i<inp.length;i++){
    if(inp[i].value===""){
      h4.textContent="Error! some fields are blank";
      h4.style.color="red";
      break;
    }
    else{
      h4.textContent="";
      h4.style.color="";
    }
  }
  
  /*
  var text1 = txt1.value;
  let text2 = txt2.value;
  if (text1 === "" || text2 === "") {
    // alert("You are submitting the empty form");
    h4.textContent="Error! some fields are blank";
    h4.style.color="red";
  }
  else{
    h4.textContent="";
    h4.style.color="";
  }

  */
});
