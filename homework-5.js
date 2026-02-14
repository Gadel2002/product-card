//Создание функции, которая анализирует погоду в определенном городе

const observationWeather = (city, temperature) => {
  console.log(
    `Сейчас в ${city} температура — ${temperature} градусов по Цельсию`
  );
};

observationWeather('Медина', 30);

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

const calculationBudget = (budget) => {
  if (budget >= price) {
    console.log(`${product} приобретён. Спасибо за покупку!`);
  } else {
    const difference = price - budget;
    console.log(`Вам не хватает ${difference}$, пополните баланс`);
  }
};

calculationBudget(6);
calculationBudget(2);
