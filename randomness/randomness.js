console.log("This is the randomness site!");
let container = document.querySelector('.emoji-display');
container.style.transform = 
`rotate(${Math.random() * 95 - 45}deg) 
scale(${Math.random() * 1 + 2})`;
container.style.fontSize = `${Math.random() * 1 + 50}px`;

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

container.innerHTML = randomWord;
if (Math.random() < .5) {
	let randomWord = randomWords[Math.floor(Math.random()*randomWords.length)];
	container.innerHTML += " " + randomWord;
}
