function click() {
	const btn = document.querySelector("button");
	const input = document.querySelector("input");
	const error = document.querySelector(".error");
	const message = document.querySelector(".message");

	btn.addEventListener("click", (e) => {
		e.preventDefault();

		if (input.value !== "" && input.value !== null) {
			message.textContent = `${input.value}`;
			error.style.display = "none";
		} else {
			error.style.display = "block";
		}
	});
}

click();
