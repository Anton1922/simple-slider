'use strict';

var display = document.querySelector('.slider__display');
var button = document.querySelector('.slider__button');
var slideFirst = document.querySelector('#first-slide');
var slideSecond = document.querySelector('#second-slide');
var slideThird = document.querySelector('#third-slide');
var slideFourth = document.querySelector('#fourth-slide');
var slideFifth = document.querySelector('#fifth-slide');
var slideSixth = document.querySelector('#sixth-slide');
var numbers = document.querySelector('.slider__numbering');
var delay = 1500;
var delayManual = 300;
var logoPause = "\n\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" \n\t\theight=\"50\" viewBox=\"0 0 24 24\">\n\t\t<path d=\"M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z\"/>\n\t</svg>\n";
var logoPlay = "\n\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 24 24\"><path d=\"M3 22v-20l18 10-18 10z\"/></svg>\n";

function replaceSlide(slideNumber) {
  display.querySelector('.slider__container-image--active').classList.remove('slider__container-image--active');
  display.querySelector("*[data-slide-number=\"".concat(slideNumber, "\"]")).classList.add('slider__container-image--active');
}

function checkNumber(target) {
  if (target.classList.contains('slider__container-number') || target.classList.contains('slider__number')) {
    numbers.querySelector('.slider__container-number--checked').classList.remove('slider__container-number--checked');
    target.classList.add('slider__container-number--checked');
  }
}

numbers.addEventListener('click', function (event) {
  var target = event.target;
  checkNumber(target);
  setTimeout(function () {
    replaceSlide(target.dataset.number);
  }, delayManual, target.dataset.number);
});

function slideShow(slideNumber) {
  var activeSlide = display.querySelector('.slider__container-image--active');
  console.log('activeSlide', activeSlide);
  new Promise(function (resolve) {
    setTimeout(function () {
      slideFirst.classList.remove('slider__container-image--active');
      numbers.querySelector('*[data-number="0"]').classList.remove('slider__container-number--checked');
      numbers.querySelector('*[data-number="1"]').classList.add('slider__container-number--checked');
      resolve(slideSecond.classList.add('slider__container-image--active'));
    }, delay);
  }).then(function (result) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        slideSecond.classList.remove('slider__container-image--active');
        numbers.querySelector('*[data-number="1"]').classList.remove('slider__container-number--checked');
        numbers.querySelector('*[data-number="2"]').classList.add('slider__container-number--checked');
        resolve(slideThird.classList.add('slider__container-image--active'));
      }, delay);
    });
  });
}

button.addEventListener('click', function (slide) {
  numbers.querySelector('.slider__container-number--checked').classList.remove('slider__container-number--checked');
  numbers.querySelector('*[data-number="0"]').classList.add('slider__container-number--checked');
  display.querySelector('.slider__container-image--active').classList.remove('slider__container-image--active');
  slideFirst.classList.add('slider__container-image--active');
  button.innerHTML = logoPause;
  new Promise(function (resolve) {
    setTimeout(function () {
      slideFirst.classList.remove('slider__container-image--active');
      numbers.querySelector('*[data-number="0"]').classList.remove('slider__container-number--checked');
      numbers.querySelector('*[data-number="1"]').classList.add('slider__container-number--checked');
      resolve(slideSecond.classList.add('slider__container-image--active'));
    }, delay);
  }).then(function (result) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        slideSecond.classList.remove('slider__container-image--active');
        numbers.querySelector('*[data-number="1"]').classList.remove('slider__container-number--checked');
        numbers.querySelector('*[data-number="2"]').classList.add('slider__container-number--checked');
        resolve(slideThird.classList.add('slider__container-image--active'));
      }, delay);
    });
  }).then(function (result) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        slideThird.classList.remove('slider__container-image--active');
        numbers.querySelector('*[data-number="2"]').classList.remove('slider__container-number--checked');
        numbers.querySelector('*[data-number="3"]').classList.add('slider__container-number--checked');
        resolve(slideFourth.classList.add('slider__container-image--active'));
      }, delay);
    });
  }).then(function (result) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        slideFourth.classList.remove('slider__container-image--active');
        numbers.querySelector('*[data-number="3"]').classList.remove('slider__container-number--checked');
        numbers.querySelector('*[data-number="4"]').classList.add('slider__container-number--checked');
        resolve(slideFifth.classList.add('slider__container-image--active'));
      }, delay);
    });
  }).then(function (result) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        slideFifth.classList.remove('slider__container-image--active');
        numbers.querySelector('*[data-number="4"]').classList.remove('slider__container-number--checked');
        numbers.querySelector('*[data-number="5"]').classList.add('slider__container-number--checked');
        resolve(slideSixth.classList.add('slider__container-image--active'));
      }, delay);
    });
  }).then(function (result) {
    setTimeout(function () {
      slideSixth.classList.remove('slider__container-image--active');
      numbers.querySelector('*[data-number="5"]').classList.remove('slider__container-number--checked');
      numbers.querySelector('*[data-number="0"]').classList.add('slider__container-number--checked');
      slideFirst.classList.add('slider__container-image--active');
      button.innerHTML = logoPlay;
    }, delay);
  });
});
//# sourceMappingURL=index.js.map
