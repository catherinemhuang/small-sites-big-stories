console.log("Hello world!");

function changeStyles() {
	let allSpans = document.querySelectorAll('span');

	allSpans.forEach((element) => {
		let r = Math.floor(Math.random() * 255);
		let g = Math.floor(Math.random() * 255);
		let b = Math.floor(Math.random() * 255);

		element.style.color = `rgb(${r}, ${g}, ${b})`;
	});

	let allSize = document.querySelectorAll('size');

	allSize.forEach((element) => {
		let randomSpacing = Math.random() * 8 - 2;
		element.style.letterSpacing = randomSpacing + "px";
	});
}

setInterval(changeStyles, 300);

