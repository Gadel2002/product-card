import { productCards } from './product-cards.js';

//По аналогии из лекции — создать и реализовать шаблон
// для продуктовых карточек.

const productCardTemplate = document.getElementById('product-card__template');
const productCardsList = document.getElementById('product-card__list');

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
    return getNumberOfCards();
  }
};

const renderCards = (cards, count) => {
  productCardsList.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const card = cards[i];
    const cardClone = productCardTemplate.content.cloneNode(true);
    cardClone.querySelector('.card__img').src = `./images/${card.image}.png`;
    cardClone.querySelector('.card__for-skin').textContent = card.skinType;
    cardClone.querySelector('.card__use').textContent = card.title;
    cardClone.querySelector('.card__description').textContent =
      card.description;
    cardClone.querySelector('.price').textContent =
      card.price.toLocaleString('ru-RU') + ' ₽';

    const ul = cardClone.querySelector('.card__ingredients');
    ul.innerHTML = '';
    card.ingredients.forEach((ingredient) => {
      const li = document.createElement('li');
      li.textContent = ingredient;
      ul.appendChild(li);
    });

    productCardsList.appendChild(cardClone);
  }
};

//Используя метод .reduce(), получить массив объектов,
//где ключем является название продукта, а значением - его описание

const productDescription = productCards.reduce((acc, card) => {
  acc[card.title] = card.description;
  return acc;
}, []);


const numberOfCards = getNumberOfCards();
renderCards(productCards, numberOfCards);
