const menu = document.querySelector('.nav__list');
const button = document.querySelector('.nav__button');
const logo = document.querySelector('.nav__logo');
const map = document.querySelector('iframe');
const modal = document.querySelector('.page__modal');
const orderButton = document.querySelector('.week-product__button');
const cartButtonAdd = document.querySelector('.modal__button');
const cartButton = document.querySelectorAll('.cart-button');

// nojs реализация.
menu.classList.remove('nav__list--noscript');
map?.classList.remove('location__map--nojs');
button.classList.remove('nav__button--noscript');
logo.classList.add('nav__logo--closed-menu');

// Меню навигации на мобилке.
button.onclick = function () {
  menu.classList.toggle('nav__list--close');
  button.classList.toggle('nav__button--burger');
  logo.classList.toggle('nav__logo--closed-menu');
};

// Заказать -> модалка с выбором размера.
orderButton.onclick = function () {
  modal.classList.remove('page__modal--closed');
};

// Слайдер отзывов
const slider = document.querySelector('.slider-list');
const prevButton = document.querySelector('.slider-buttons__button--previous');
const nextButton = document.querySelector('.slider-buttons__button--next');
const slides = Array.from(slider.querySelectorAll('.slider__item'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();

// Закрытие модалки каталог
cartButtonAdd.onclick = function () {
  modal.classList.add('page__modal--closed');
}

// Вызов модалки каталог
for (let elements of cartButton) {
  elements.onclick = function () {
    modal.classList.remove('page__modal--closed');
  };
}

// Закрытие модалки каталог
cartButtonAdd.onclick = function () {
  modal.classList.add('page__modal--closed');
}
