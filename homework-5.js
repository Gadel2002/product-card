//Создание функции, которая анализирует погоду в определенном городе

const showWeather = (city, temperature) => {
  console.log(
    `Сейчас в ${city} температура — ${temperature} градусов по Цельсию`
  );
};

showWeather('Медина', 30);

//Создание функции, которая анализирует скорость света

const SPEED_LIGHT = 299792458;

function washSpeed(speed) {
  if (speed > SPEED_LIGHT) {
    console.log('Сверхсветовая скорость');
  } else if (speed < SPEED_LIGHT) {
    console.log('Субсветовая скорость');
  } else {
    console.log('Световая скорость');
  }
}
washSpeed(300000000);
washSpeed(290000000);
washSpeed(299792458);

//Создание функции, которая анализирует определенный продукт

const product = 'milk';
const price = 4;

const purchase = (budget) => {
  if (budget >= price) {
    console.log(`${product} приобретён. Спасибо за покупку!`);
  } else {
    const difference = price - budget;
    console.log(`Вам не хватает ${difference}$, пополните баланс`);
  }
};
purchase(6);
purchase(2);

//Создание функций и именование её по своему усмотрению

const myFn = (name) => {
  console.log(`Меня зовут ${name}`);
};

myFn('Гадель');

//Создание трех переменных и именование их по своему усмотрению

const myName = 'Gadel';
const mySurname = 'Khuzin';
const myFullName = 'Gadel khuzin';
