'use strict';

var display = document.querySelector('.slider__display');
var sliders = Array.from(document.querySelectorAll('.slider__container-image'));
var button = document.querySelector('.slider__button');
var slideFirst = document.querySelector('#first-slide');
var slideLast = document.querySelector("*[data-slide-number=\"".concat(sliders.length - 1, "\"]"));
var numbers = document.querySelector('.slider__numbering');
var delay = 1500;
var delayManual = 300;
var logoPause = "\n\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" \n\t\theight=\"50\" viewBox=\"0 0 24 24\">\n\t\t<path d=\"M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z\"/>\n\t</svg>\n";
var logoPlay = "\n\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" \n\t\theight=\"50\" viewBox=\"0 0 24 24\">\n\t\t<path d=\"M3 22v-20l18 10-18 10z\"/>\n\t</svg>\n";

function replaceSlide(slideNumber) {
  display.querySelector('.slider__container-image--active').classList.remove('slider__container-image--active');
  display.querySelector("*[data-slide-number=\"".concat(slideNumber, "\"]")).classList.add('slider__container-image--active');
}

function checkNumber(number) {
  numbers.querySelector('.slider__container-number--checked').classList.remove('slider__container-number--checked');
  numbers.querySelector("*[data-number=\"".concat(number, "\"]")).classList.add('slider__container-number--checked');
}

function slideShow() {
  var activeSlide = display.querySelector('.slider__container-image--active');
  var slideNumber = activeSlide.dataset.slideNumber;

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
    return setTimeout(function () {
      slideShow();
    }, delay);
  }
}

numbers.addEventListener('click', function (event) {
  var target = event.target;
  console.log('target', target);

  if (target.classList.contains('slider__container-number')) {
    checkNumber(target.dataset.number);
    setTimeout(function () {
      replaceSlide(target.dataset.number);
    }, delayManual, target.dataset.number);
  }
});
button.addEventListener('click', function () {
  button.innerHTML = logoPause;
  setTimeout(function () {
    slideShow();
  }, delay);
});
//# sourceMappingURL=index.js.map
