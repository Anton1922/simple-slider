'use strict';

var images = [{
  id: 0,
  question: 'Хотите узнать, что будет с ними через 6 лет',
  src: 'images/first-slide-500-min.jpg',
  alt: '',
  description: 'Нажмите Play, чтобы увидеть'
}, {
  id: 1,
  question: '',
  src: 'images/second-slide-500-min.jpg',
  alt: '',
  description: ''
}, {
  id: 2,
  question: '',
  src: 'images/third-slide-500-min.jpg',
  alt: '',
  description: ''
}, {
  id: 3,
  question: '',
  src: 'images/fourth-slide-500-min.jpg',
  alt: '',
  description: ''
}, {
  id: 4,
  question: '',
  src: 'images/fifth-slide-500-min.jpg',
  alt: '',
  description: ''
}, {
  id: 5,
  question: '',
  src: 'images/sixth-slide-500-min.jpg',
  alt: '',
  description: ''
}];
var display = document.querySelector('.slider__display');
console.log('display', display);
var numbers = document.querySelector('.slider__numbering'); //console.log('numbers', numbers);

var buttonPlay = document.querySelector('.slider__button-play');
console.log('buttonPlay', buttonPlay.innerHTML);
var delay = 1000;
var slideTemplate = '';

function createSlide(number) {
  //let numberSlide = number;
  slideTemplate = "\n\t<div class=\"slider__container-image\">\n\t\t<p class=\"slider__question\">".concat(images[number].question, "</p>\n\n\t\t<img src=").concat(images[number].src, " alt=\"\" class=\"slider__image\">\n\n\t\t<p class=\"slider__text\">").concat(images[number].description, "</p>\n\t</div>\n\t");
  display.innerHTML = '';
  display.insertAdjacentHTML('beforeend', slideTemplate);
  numbers.querySelector('.slider__container-number--checked').classList.remove('slider__container-number--checked');
  numbers.querySelector("*[data-number=\"".concat(number, "\"]")).classList.add('slider__container-number--checked');
}

;
createSlide(0);

function show() {
  if (i == images.length - 1) {
    //console.log(i);
    createSlide(i);
    buttonPlay.innerHTML = "\n\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 24 24\">\n\t\t\t<path d=\"M12 0c-3.31 0-6.291 1.353-8.459 3.522l-2.48-2.48-1.061 7.341 7.437-.966-2.489-2.488c1.808-1.808 \n\t\t\t4.299-2.929 7.052-2.929 5.514 0 10 4.486 10 10s-4.486 10-10 10c-3.872 0-7.229-2.216-8.89-5.443l-1.717 \n\t\t\t1.046c2.012 3.803 6.005 6.397 10.607 6.397 6.627 0 12-5.373 12-12s-5.373-12-12-12z\"/>\n\t\t</svg>";
    i = 0;
  } else {
    createSlide(i); //console.log(i);

    setTimeout(show, delay, i);
    ++i;
  }
}

var i = 1;
buttonPlay.addEventListener('click', function (event) {
  console.log('target', event.target);
  buttonPlay.innerHTML = '';
  buttonPlay.innerHTML = "\n\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 24 24\">\n\t\t<path d=\"M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z\"/>\n\t</svg>";
  setTimeout(show, delay, i);
});
numbers.addEventListener('click', function (event) {
  var target = event.target; //console.log('target', target);

  if (target.classList.contains('slider__container-number') || target.classList.contains('slider__number')) {
    //console.log('click NUMBER');
    setTimeout(createSlide, delay, target.dataset.number);
  }
});
//# sourceMappingURL=index.js.map
