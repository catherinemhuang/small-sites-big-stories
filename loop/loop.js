console.log("This is the loop site!");
		let container = document.querySelector('.container');

		let i = 0;
		while (i < 100) {

			let randomSize = Math.random() * 100;

			let r = Math.floor(Math.random() * 100);
			let g = Math.floor(Math.random() * 100);
			let b = Math.floor(Math.random() * 255);
			let opacity = Math.random();

			let newDiv = `
				<div style="
					width: ${randomSize}px;
					height: ${randomSize}px;
					background-color: rgba(${r}, ${g}, ${b}, ${opacity});
				"></div>
			`;

			container.innerHTML += newDiv;
			i++;
		}

		function changeSizes() {
			let allChildren = document.querySelectorAll('.container div');

			for (let i = 0; i < allChildren.length; i++) {
				let child = allChildren[i];

				let randomSize = Math.random() * 100;

				let r = Math.floor(Math.random() * 1);
				let g = Math.floor(Math.random() * 1);
				let b = Math.floor(Math.random() * 1);
				let opacity = Math.random();

				child.style.width = randomSize + "px";
				child.style.height = randomSize + "px";
				child.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
			}
		}

		setInterval(changeSizes, 500);

        setTimeout(() => {
		document.body.style.backgroundColor = "gray";
	}, 100); // small delay so transition applies