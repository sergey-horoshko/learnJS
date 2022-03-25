function click() {
	const btn = document.querySelector("button");
	const body = document.body;
	const code = document.querySelector(".code");

	btn.addEventListener("click", () => {
		function getRandom(min, max) {
			return Math.ceil(Math.random() * (max - min) + min);
		}

		body.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(
			0,
			255
		)}, ${getRandom(0, 255)})`;

		let color = window.getComputedStyle(body).backgroundColor;

		code.textContent = `${color}`;
	});
}

click();
