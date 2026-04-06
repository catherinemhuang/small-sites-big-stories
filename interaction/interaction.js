console.log("This is the interaction site!");

const block = document.querySelector(".block");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

block.addEventListener("mousedown", (e) => {
  isDragging = true;

  offsetX = e.clientX - block.offsetLeft;
  offsetY = e.clientY - block.offsetTop;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  block.style.position = "absolute";
  block.style.left = `${e.clientX - offsetX}px`;
  block.style.top = `${e.clientY - offsetY}px`;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});