console.log("This is the interaction site!");

let block = document.querySelector('.block');
let numberOfInteractions = 0;

function runAway() {
	block.style.transform = `translate(${Math.random()*100-50}vw, ${Math.random()*100-50}vh)`;
	numberOfInteractions++;
	if (numberOfInteractions > 2) {
		block.innerText = "hahahhaa";
	}
	if (numberOfInteractions > 4) {
		block.innerText = "You can't get me";
	}
}
block.addEventListener('mouseenter', runAway)