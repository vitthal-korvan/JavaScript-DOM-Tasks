const btn = document.querySelector("button");
const img1 = document.querySelector(".img-1");
const img2 = document.querySelector(".img-2");

btn.addEventListener("click", function () {
  const src1=img2.src;
  const src2=img1.src;
  img1.src=src1;
  img2.src=src2;
});
