function click() {
	const btn = document.querySelector("button");
	const body = document.body;

	btn.addEventListener("click", () => {
		body.classList.toggle("_active");
	});
}

click();
