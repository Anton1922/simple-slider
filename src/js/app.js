'use strict';

const display = document.querySelector('.slider__display');
const buttonPlay = document.querySelector('.slider__button-play');
const slideFirst = document.querySelector('#first-slide');
const slideSecond = document.querySelector('#second-slide');
const slideThird = document.querySelector('#third-slide');
const slideFourth = document.querySelector('#fourth-slide');
const slideFifth = document.querySelector('#fifth-slide');
const slideSixth = document.querySelector('#sixth-slide');
const numbers = document.querySelector('.slider__numbering');
const delay = 1500;
const delayManual = 0;

numbers.addEventListener('click', function(event) {
	let target = event.target;

	if (target.classList.contains('slider__container-number') || target.classList.contains('slider__number')) {
		numbers.querySelector('.slider__container-number--checked').classList.remove('slider__container-number--checked');

		if (target.classList.contains('slider__number')) {
				target.closest('.slider__container-number').classList.add('slider__container-number--checked');
			} else {
				target.classList.add('slider__container-number--checked');
			}
		
		setTimeout(() => {
			display.querySelector('.slider__container-image--active').classList.remove('slider__container-image--active');
			display.querySelector(`*[data-slide-number="${target.dataset.number}"]`).classList.add('slider__container-image--active');
		}, delayManual, target.dataset.number);
	}
});


buttonPlay.addEventListener('click', (slide) => {
	numbers.querySelector('.slider__container-number--checked').classList.remove('slider__container-number--checked');
	numbers.querySelector('*[data-number="0"]').classList.add('slider__container-number--checked');
	display.querySelector('.slider__container-image--active').classList.remove('slider__container-image--active');
	slideFirst.classList.add('slider__container-image--active');
	buttonPlay.innerHTML = `
	<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
		<path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z"/>
	</svg>`;

	new Promise(resolve => {
		setTimeout(() => {
			slideFirst.classList.remove('slider__container-image--active');
			numbers.querySelector('*[data-number="0"]').classList.remove('slider__container-number--checked');
			numbers.querySelector('*[data-number="1"]').classList.add('slider__container-number--checked');
			resolve(slideSecond.classList.add('slider__container-image--active'));
		}, delay);
	})
	.then((result) => {
		return new Promise(resolve => {
			setTimeout(() => {
				slideSecond.classList.remove('slider__container-image--active');
				numbers.querySelector('*[data-number="1"]').classList.remove('slider__container-number--checked');
				numbers.querySelector('*[data-number="2"]').classList.add('slider__container-number--checked');
				resolve(slideThird.classList.add('slider__container-image--active'));
			}, delay);
		});
	})
	.then((result) => {
		return new Promise(resolve => {
			setTimeout(() => {
				slideThird.classList.remove('slider__container-image--active');
				numbers.querySelector('*[data-number="2"]').classList.remove('slider__container-number--checked');
				numbers.querySelector('*[data-number="3"]').classList.add('slider__container-number--checked');
				resolve(slideFourth.classList.add('slider__container-image--active'));
			}, delay);
		});
	})
	.then((result) => {
		return new Promise(resolve => {
			setTimeout(() => {
				slideFourth.classList.remove('slider__container-image--active');
				numbers.querySelector('*[data-number="3"]').classList.remove('slider__container-number--checked');
				numbers.querySelector('*[data-number="4"]').classList.add('slider__container-number--checked');
				resolve(slideFifth.classList.add('slider__container-image--active'));
			}, delay);
		});
	})
	.then((result) => {
		return new Promise(resolve => {
			setTimeout(() => {
				slideFifth.classList.remove('slider__container-image--active');
				numbers.querySelector('*[data-number="4"]').classList.remove('slider__container-number--checked');
				numbers.querySelector('*[data-number="5"]').classList.add('slider__container-number--checked');
				resolve(slideSixth.classList.add('slider__container-image--active'));
			}, delay);
		});
	})
	.then((result) => {
			setTimeout(() => {
				slideSixth.classList.remove('slider__container-image--active');
				numbers.querySelector('*[data-number="5"]').classList.remove('slider__container-number--checked');
				numbers.querySelector('*[data-number="0"]').classList.add('slider__container-number--checked');
				slideFirst.classList.add('slider__container-image--active');
				buttonPlay.innerHTML = `
					<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z"/></svg>`;
			}, delay);
	});
});
