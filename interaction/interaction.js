console.log("This is the interaction site!");

let block = document.querySelector('.block');
let numberOfInteractions = 0;

function followMouse(e) {
	block.style.transform = `translate(${e.clientX-75}px, ${e.clientY-75}px)`;
	numberOfInteractions++;
	if (numberOfInteractions > 2) {
		block.innerText = "hahahhaa";
	}
	if (numberOfInteractions > 4) {
	block.innerText = "💩";	}
}
document.addEventListener('mousemove', followMouse);