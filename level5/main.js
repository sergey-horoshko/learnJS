function click() {
	const add = document.querySelector(".add");
	const remove = document.querySelector(".remove");
	const counter = document.querySelector(".counter");

	add.addEventListener("click", () => {
		let i = counter.textContent;
		i++;
		counter.textContent = i;
		color(i, counter);
	});

	remove.addEventListener("click", () => {
		let i = counter.textContent;
		i--;
		counter.textContent = i;
		color(i, counter);
	});

	function color(value, element) {
		if (value > 0) {
			element.style.color = "green";
		} else if (value == 0) {
			element.style.color = "black";
		} else {
			element.style.color = "red";
		}
	}
}

click();
