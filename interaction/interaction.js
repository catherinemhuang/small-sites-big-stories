console.log("This is the interaction site!");

let block = document.querySelector('.block');
let numberOfInteractions = 0;

let emojiList = [
	"💩", 
	"🫚", 
	"🦪 ", 
	"🫩", 
	"🗿", 
	"🧌"
];
let emojiIndex = 0;

function followMouse(e) {
  block.style.transform = `translate(${e.clientX - 75}px, ${e.clientY - 75}px)`;
  numberOfInteractions++;

  if (numberOfInteractions > 1) {
    block.innerText = "💩";
  }
}

function changeEmoji(e) {
  if (e.code === "Space") {
    emojiIndex = (emojiIndex + 1) % emojiList.length;
    block.innerText = emojiList[emojiIndex];
  }
}

document.addEventListener('mousemove', followMouse);
document.addEventListener('keydown', changeEmoji);  