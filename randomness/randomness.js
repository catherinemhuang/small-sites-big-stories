console.log("This is the randomness site!");
let container = document.querySelector('.container');
container.style.transform = `rotate(${Math.random()*90-45}deg) scale(${Math.random()*5+3})`;

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