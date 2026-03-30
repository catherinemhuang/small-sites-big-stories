console.log("This is the time site!");
let container = document.querySelector('.container');
setTimeout(() => {
	container.innerText = "A long time ago in a galaxy far, far away....";
	container.style.fontSize = "60px";
},700)
setTimeout(() => {
	container.innerText = "there came a time of revolution...";
	container.style.fontSize = "50px";
}, 2200)
setTimeout(() => {
	container.innerText = "...when rebels united to challenge a tyrannical empire.";
	container.style.fontSize = "50px";
}, 3300)
setTimeout(() => {
	container.innerText = "It is a period of civil war.";
    container.style.fontSize = "50px";
}, 6000)
setTimeout(() => {
	container.innerText = "Rebel spaceships striking from a hidden base...";
	container.style.fontSize = "50px";
}, 8000)
setTimeout(() => {
	container.innerText = "have won their first victory against the evil Galactic Empire.";
    container.style.fontSize = "50px";
}, 10000)
setTimeout(() => {
	container.innerText = "During the battle";
	container.style.fontSize = "50px";
}, 13000)
setTimeout(() => {
	container.innerText = " Rebel spies managed to steal secret plans";
	container.style.fontSize = "40px";
}, 14500)
setTimeout(() => {
	container.innerText = "...the Empire's ultimate weapon...";
	container.style.fontSize = "100px";
}, 17000)
setTimeout(() => {
	container.innerText = "the DEATH STAR";
	container.style.fontSize = "300px";
}, 19000)
setTimeout(() => {
	container.innerText = "THE.";
	container.style.fontSize = "100px";
}, 20500)
setTimeout(() => {
	container.innerText = "DEATH.";
	container.style.fontSize = "300px";
}, 21000)
setTimeout(() => {
	container.innerText = "STAR.";
	container.style.fontSize = "500px";
}, 22000)
setTimeout(() => {
    container.innerText = "";
    let img = document.createElement("img");
    img.src = "https://fbi.cults3d.com/uploaders/15008782/illustration-file/869010b7-0dd9-4f4d-b5ef-6202b311198e/deathstar.png"; 
    img.style.width = "100%"; 
    img.style.height = "108%";
    container.appendChild(img);
}, 23000);