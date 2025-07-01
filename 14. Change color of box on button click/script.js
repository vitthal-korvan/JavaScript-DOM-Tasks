function getRandomRGBValue() {
  return Math.floor(Math.random() * 256);
}

function changeBackgroundColor() {
  const r = getRandomRGBValue();
  const g = getRandomRGBValue();
  const b = getRandomRGBValue();
  const rgbColor = `rgb(${r}, ${g}, ${b})`;

  document.body.style.backgroundColor = rgbColor;
}
