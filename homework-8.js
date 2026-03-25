import { productCards } from './product-cards.js';

//По аналогии из лекции — создать и реализовать шаблон
// для продуктовых карточек.

const productCardTemplate = document.getElementById('product-card__template');
const productCardsList = document.getElementById('product-card__list');

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

//Реализовать функцию, которая при старте страницы выводит
//сообщение (через функцию prompt) "Сколько карточек отобразить? От 1 до 5"
//и в зависимости от результата - будет выводить введенное количество.
//Должна быть защита от ввода других значений (проверка if).
//То-есть: у нас будет 2 функции, одна возвращает количество карточек,
//которое нужно ввести, другая - рендерить эти карточки
//(принимая массив аргументом)

const getNumberOfCards = () => {
  const input = prompt('Сколько карточек отобразить? От 1 до 5');

  const number = Number(input);

  if (number >= 1 && number <= 5) {
    return number;
  } else {
    console.log('Нужно ввести число от 1 до 5!');
    return 0;
  }
};

const renderCards = (n) => {
  productCardsList.innerHTML = '';
  for (let i = 0; i < n; i++) {
    const card = productCards[i];
    const cardClone = productCardTemplate.content.cloneNode(true);
    cardClone.querySelector('.card__img').src = card.image;
    cardClone.querySelector('.card__for-skin').textContent = card.skinType;
    cardClone.querySelector('.card__use').textContent = card.title;
    cardClone.querySelector('.card__description').textContent =
      card.description;

    const ul = cardClone.querySelector('.card__ingredients');
    ul.innerHTML = '';
    card.ingredients.forEach((ingredient) => {
      const li = document.createElement('li');
      li.textContent = ingredient;
      ul.appendChild(li);
    });

    const formattedPrice = formatPrice(card.price);
    cardClone.querySelector('.price').textContent = formattedPrice + ' ₽';

    productCardsList.appendChild(cardClone);
  }
};

//Используя метод .reduce(), получить массив объектов,
//где ключем является название продукта, а значением - его описание

const productDescription = productCards.reduce((acc, card) => {
  acc[card.title] = card.description;
  return acc;
}, {});

const numberOfCards = getNumberOfCards();
if (numberOfCards > 0) {
  renderCards(numberOfCards);
}
