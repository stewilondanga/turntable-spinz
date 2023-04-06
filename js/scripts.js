var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

let playBtn = document.getElementById("play-btn");
let stopBtn = document.getElementById("stop-btn");
let rootCSS = document.querySelector(":root");
playBtn.addEventListener("click", () => {
	rootCSS.style.setProperty("--pink", "#fd357e");
	for (let i = 1; i <= 5; i++) {
		document
			.querySelector(`.dots:nth-of-type(1) .dot:nth-of-type(${i})`)
			.classList.add(`light-animation-delay-${i}`);
		document
			.querySelector(`.dots:nth-of-type(2) .dot:nth-of-type(${i})`)
			.classList.add(`light-animation-delay-${i}`);
		//   ------------
		document
			.querySelector(`.dots:nth-of-type(1) .dot:nth-of-type(${i}) .inside-dot`)
			.classList.add(`light-animation-delay-${i}`);
		document
			.querySelector(`.dots:nth-of-type(2) .dot:nth-of-type(${i}) .inside-dot`)
			.classList.add(`light-animation-delay-${i}`);
	}
	//   --------------------------------
	document
		.querySelector(`.circle.left-circle .inside-circle-1`)
		.classList.add("rot-animation-500ms", "box-shadow-2", "border");
	document
		.querySelector(`.circle.left-circle .inside-circle`)
		.classList.add("rot-animation-1000ms", "box-shadow-1");
	document
		.querySelector(`.circle.right-circle .inside-circle-1`)
		.classList.add("rot-animation-500ms", "box-shadow-2", "border");
	document
		.querySelector(`.circle.right-circle .inside-circle`)
		.classList.add("rot-animation-1000ms", "box-shadow-1");
	//   --------------------------------
	for (let i = 1; i <= 3; i++) {
		document
			.querySelector(`.screen-top .column:nth-of-type(${i})`)
			.classList.add("opacity-1", `top-down-animation-delay-${i}`);
	}
	//   --------------------------------
	document.querySelector(`.screen-bottom-after`).classList.add("opacity-1");
	//   --------------------------------
	for (let i = 1; i <= 3; i++) {
		document
			.querySelector(`.columns-container .column:nth-of-type(${i}) .column-before`)
			.classList.add(`top-animation-delay-${i}`);
	}
	//   --------------------------------
	document.querySelectorAll(".dashes").forEach((ele) => {
		ele.classList.add("opacity-2");
	});
	//   --------------------------------
});
stopBtn.addEventListener("click", () => {
	rootCSS.style.setProperty("--pink", "#721839");
	for (let i = 1; i <= 5; i++) {
		document
			.querySelector(`.dots:nth-of-type(1) .dot:nth-of-type(${i})`)
			.classList.remove(`light-animation-delay-${i}`);
		document
			.querySelector(`.dots:nth-of-type(2) .dot:nth-of-type(${i})`)
			.classList.remove(`light-animation-delay-${i}`);
		//   ------------
		document
			.querySelector(`.dots:nth-of-type(1) .dot:nth-of-type(${i}) .inside-dot`)
			.classList.remove(`light-animation-delay-${i}`);
		document
			.querySelector(`.dots:nth-of-type(2) .dot:nth-of-type(${i}) .inside-dot`)
			.classList.remove(`light-animation-delay-${i}`);
	}
	//   --------------------------------
	document
		.querySelector(`.circle.left-circle .inside-circle-1`)
		.classList.remove("rot-animation-500ms", "box-shadow-2", "border");
	document
		.querySelector(`.circle.left-circle .inside-circle`)
		.classList.remove("rot-animation-1000ms", "box-shadow-1");
	document
		.querySelector(`.circle.right-circle .inside-circle-1`)
		.classList.remove("rot-animation-500ms", "box-shadow-2", "border");
	document
		.querySelector(`.circle.right-circle .inside-circle`)
		.classList.remove("rot-animation-1000ms", "box-shadow-1");
	//   --------------------------------
	for (let i = 1; i <= 3; i++) {
		document
			.querySelector(`.screen-top .column:nth-of-type(${i})`)
			.classList.remove("opacity-1", `top-down-animation-delay-${i}`);
	}
	//   --------------------------------
	document.querySelector(`.screen-bottom-after`).classList.remove("opacity-1");
	//   --------------------------------
	for (let i = 1; i <= 3; i++) {
		document
			.querySelector(`.columns-container .column:nth-of-type(${i}) .column-before`)
			.classList.remove(`top-animation-delay-${i}`);
	}
	//   --------------------------------
	document.querySelectorAll(".dashes").forEach((ele) => {
		ele.classList.remove("opacity-2");
	});
	//   --------------------------------
});
