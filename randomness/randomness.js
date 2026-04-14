console.log("This is the randomness site!");
let emojiDisplay = document.querySelector('.emoji-display');
emojiDisplay.style.transform = `rotate(${Math.random() * 95 - 45}deg) scale(${Math.random() * 3 + 2})`;
emojiDisplay.style.fontSize = `${Math.random() * 90 + 110}px`;

let randomWords = [
	"😂",
	"✌",
	"🐻",
	"🎂",
	"🥑",
	"😀",
    "🏆",
    "🥝",
    "🌞",
    "🎪"
]
let randomWord = randomWords[Math.floor(Math.random()*randomWords.length)];

emojiDisplay.innerHTML = randomWord;
if (Math.random() < .5) {
	let randomWord = randomWords[Math.floor(Math.random()*randomWords.length)];
	emojiDisplay.innerHTML += " " + randomWord;
}
