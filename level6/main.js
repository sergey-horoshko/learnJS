function click() {
	const prev = document.querySelector(".prev"),
		next = document.querySelector(".next"),
		box = document.querySelector(".box"),
		imgArr = [
			"https://www.rabstol.net/uploads/gallery/comthumb/190/rabstol_net_differ_movie_23.jpg",
			"https://pw.artfile.me/wallpaper/04-11-2018/650x366/kino-filmy-venom-venom-1405945.jpg",
			"https://poster.nicefon.ru/2016_12/30/1080x610/1915444d0d0fb5e56debf8.jpg",
			"https://img3.goodfon.ru/wallpaper/nbig/5/4d/volk-s-uoll-strit-the-wolf-of-4778.jpg",
			"http://wallpapers1.ru/filmi/data/Filmi_a78.jpg",
			"http://wallpapers1.ru/filmi/data/filmi_186.jpg",
			"http://fonday.ru/images/tmp/4/2/648x365/4201yZRGopB0TYy30JtGN9tBwcw09mC9u.jpg",
		];

	let i = 0;
	// console.log(imgArr.length);
	function setIndex() {
		if (i == -1) {
			i = imgArr.length - 1;
		}

		if (i == imgArr.length) {
			i = 0;
		}

		box.style.backgroundImage = `url(${imgArr[i]})`;
	}

	setIndex();

	next.addEventListener("click", () => {
		i++;
		setIndex();
		return i;
	});

	prev.addEventListener("click", () => {
		i--;
		setIndex();
		return i;
	});
}

click();
