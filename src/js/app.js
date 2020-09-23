'use strict';

const display = document.querySelector('.slider__display');
const sliders = Array.from(document.querySelectorAll('.slider__container-image'));
const button = document.querySelector('.slider__button');
const slideFirst = document.querySelector('#first-slide');
const slideLast = document.querySelector(`*[data-slide-number="${sliders.length - 1}"]`);
const numbers = document.querySelector('.slider__numbering');
const delay = 1500;
const delayManual = 300;
const logoPause = `
	<svg xmlns="http://www.w3.org/2000/svg" width="50" 
		height="50" viewBox="0 0 24 24">
		<path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z"/>
	</svg>
`;
const logoPlay = `
	<svg xmlns="http://www.w3.org/2000/svg" width="50" 
		height="50" viewBox="0 0 24 24">
		<path d="M3 22v-20l18 10-18 10z"/>
	</svg>
`;

function replaceSlide(slideNumber) {
	display.querySelector('.slider__container-image--active').classList.remove('slider__container-image--active');
	display.querySelector(`*[data-slide-number="${slideNumber}"]`).classList.add('slider__container-image--active');
}

function checkNumber(number) {
	numbers.querySelector('.slider__container-number--checked').classList.remove('slider__container-number--checked');
	numbers.querySelector(`*[data-number="${number}"]`).classList.add('slider__container-number--checked');
}

function slideShow() {
	let activeSlide = display.querySelector('.slider__container-image--active');
	let slideNumber = activeSlide.dataset.slideNumber;

	if (slideNumber == sliders.length - 1) {
		checkNumber(slideNumber);
		replaceSlide(slideNumber);

		button.innerHTML = logoPlay;

		replaceSlide(0);
		checkNumber(0);
	} else {
		++slideNumber;
		checkNumber(slideNumber);
		replaceSlide(slideNumber);

		return (setTimeout(() => {
			slideShow()
		}, delay));
	}
}

numbers.addEventListener('click', function(event) {
	let target = event.target;
	console.log('target', target);

	if (target.classList.contains('slider__container-number')) {
		checkNumber(target.dataset.number);

		setTimeout(() => {
			replaceSlide(target.dataset.number);
		}, delayManual, target.dataset.number);
	}
});

button.addEventListener('click', () => {
	button.innerHTML = logoPause;

	setTimeout(() => {
		slideShow()
	}, delay);
});
