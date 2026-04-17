// Покраска первой карточки

const firstCardRecolerButton = document.getElementById(
  'recolor-first-card-button'
);

const orangeHashColor = '#FFA500';

firstCardRecolerButton.addEventListener('click', () => {
  const firstProductCard = document.querySelector('.product-card__card');
  if (firstProductCard) {
    firstProductCard.style.background = orangeHashColor;
  }
});

//Покраска всех карточек

const redHashColor = '#FF0000';
const allCardRecolerButton = document.getElementById('recolor-all-card-button');

allCardRecolerButton.addEventListener('click', () => {
  const productCards = document.querySelectorAll('.product-card__card');
  productCards.forEach((card) => (card.style.background = redHashColor));
});

//Переход на страницу гугл

const googlePageOpenButton = document.getElementById('open-google-page-button');
googlePageOpenButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы по правде хотите перейти на страницу гугл?');
  if (answer) {
    window.open('https://google.com');
  } else {
    console.log('Пользователь не перешел на страницу');
  }
}

//Наводим мышкой на главный заголовок страницы

const mainClickTitle = document.getElementById('main-title');
const mainTitlePage = document.querySelector('.container__title');

mainClickTitle.addEventListener('click', () => {
  console.log('не произвольный текст, написанный от руки');
});

//Меняем цвет кнопки с одного цвета на другой

const myButton = document.getElementById('change-my-color');

myButton.addEventListener('click', () => {
  myButton.classList.toggle('active');
});
