// DEVELOPER PROBLEMS

// 1. Debugging a TypeError: Cannot read property 'X' of undefined:
var obj = {};
obj?.name?.first; // conditional chaining

//2.  Handling Asynchronous Operations

let getUser=document.querySelector("#getUser");

getUser.addEventListener("click", function(){
      getNewUser();
})

function getNewUser() {
  fetch(`https://randomuser.me/api/`)
    .then((raw) => raw.json())
    .then((result) => {
      const { name, email, gender, picture } = result.results[0];
      document.querySelector(
        "#parent"
      ).innerHTML += `<div class="card w-60 p-4 rounded-md bg-zinc-700">
<div class="w-20 h-20 bg-zinc-500 rounded-2xl mb-3 overflow-hidden">
      <img src="${picture.large}" class="w-full h-full fit-cover">
</div>
<h3 class="font-semibold text-2xl">${name.first}</h3>
<h5 class="text-sm font-semibold opacity-40">${gender}</h5>
<h6 class="text-sm opacity-40">${email}</h6>
<p class="mt-5 text-xs font-semibold opacity-80">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, odio
  ex pariatur nisi necessitatibus facere.
</p>
</div>`;
    });
}

// Working with Local Storage
// blocking scroll until something happens
// custom tooltip
