console.log("This is the interaction site!");

let block = document.querySelector('.block');
let numberOfInteractions = 0;
function runAway() {
	block.style.transform = `translate(${Math.random()*100-50}vw, ${Math.random()*100-50}vh)`;
	numberOfInteractions++;
	if (numberOfInteractions > 10) {
		block.innerText = "AHHHHHH";
	}
	if (numberOfInteractions > 20) {
		block.innerText = "STOP IT STOP IT STOOOOOP";
	}
}
block.addEventListener('mouseenter', runAway)