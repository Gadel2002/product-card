// 3.Реализовать абстрактный класс Drink (абстрактный он, потому что не должен иметь
// экземпляров. Он используется только для наследования).
// От него мы будем создавать наследников - лимонад, чай, кофе и прочие напитки,
// которые посчитаете нужным. Их должно быть от 3 до 5.
// Наш абстрактный класс должен содержать общие свойства, связанные со всеми напитками
// (это то, что есть у каждого напитка), а это:
// 1) название
// 2) размер
// 3) цена
// 4) температура (приватный). Почему? Потому что мы не можем влиять на температуру
// вне класса.
// Также наш класс должен содержать общие методы, такие как:
// 1) получить информацию про напиток
// 2) получить температуру напитка
// 3) установить температуру напитка
// 4) приготовить напиток (приватный)
// 5) подать напиток
// После уже реализовываем наследников, например для кофе нам нужны дополнительные
// параметры, помимо тех 4, что названы выше. Это вид зёрен, вид молока и прочее.

class Drink {
  #temperature;
  constructor(name, size, price, temperature) {
    if (new.target === Drink) {
      throw new Error('Нельзя использовать абстрактный класс!');
    }
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getDrinkInfo() {
    return `Название: ${this.name}, размер: ${this.size}, цена: ${this.price}`;
  }

  getDrinkTemperature() {
    return `${this.#temperature} °C`;
  }

  setDrinkTemperature(newTemp) {
    if (typeof newTemp === 'number' && newTemp > 0 && newTemp <= 100) {
      this.#temperature = newTemp;
      console.log(
        `Температура напитка  '${this.name}' изменена на ${
          this.#temperature
        } градусов`
      );
    } else {
      console.log('Ошибка! Температура должна быть от 1 до 100 градусов.');
    }
  }

  #cookDrink() {
    console.log(`Процесс: Готовим ${this.name}`);
  }

  bringDrink() {
    this.#cookDrink();
    this.prepare();
    console.log(`Подали ${this.name} на стол`);
  }
}

class Coffee extends Drink {
  constructor(name, size, price, temperature, beansType, milkType, grindType) {
    super(name, size, price, temperature);
    this.beansType = beansType;
    this.milkType = milkType;
    this.grindType = grindType;
  }

  prepare() {
    console.log(
      `Перемалываем ${this.beansType}, затем наливаем ${this.milkType} и ложим ${this.grindType} в кофеварку :)`
    );
  }
}

class Lemonade extends Drink {
  constructor(name, size, price, temperature, fizzy, apple, sweet) {
    super(name, size, price, temperature);
    this.fizzy = fizzy;
    this.apple = apple;
    this.sweet = sweet;
  }

  prepare() {
    console.log(`Добавляем лёд в ${this.name}`);
  }
}

class Tea extends Drink {
  constructor(name, size, price, temperature, strong, black, mint) {
    super(name, size, price, temperature);
    this.strong = strong;
    this.black = black;
    this.mint = mint;
  }

  prepare() {
    console.log(`Подождите 3 минуты ${this.name} заваривается`);
  }
}

class Juice extends Drink {
  constructor(name, size, price, temperature, mango, sugarFree, natural) {
    super(name, size, price, temperature);
    this.mango = mango;
    this.sugarFree = sugarFree;
    this.natural = natural;
  }

  prepare() {
    console.log(
      `Мы взболтали ${this.name}, теперь мякоть распределена равномерно!`
    );
  }
}

const coffee = new Coffee(
  'Турецкий кофе',
  '50ml',
  '200₽',
  50,
  'Семена',
  'Коровье',
  'Молотый кофе'
);
const lemonade = new Lemonade(
  'Яблочный лимонад',
  '60ml',
  '250₽',
  10,
  'Газированный',
  'Красный',
  'Сладкий'
);
const tea = new Tea(
  'Ахмад чай',
  '70ml',
  '100₽',
  45,
  'Крепкий чай',
  'Чай',
  'Свежая мята'
);
const juice = new Juice(
  'Манговый сок',
  '90ml',
  '200₽',
  15,
  'Свежий',
  '0%',
  '100%'
);

coffee.bringDrink();
lemonade.bringDrink();
tea.bringDrink();
juice.bringDrink();

coffee.setDrinkTemperature(40);
lemonade.setDrinkTemperature(8);
tea.setDrinkTemperature(38);
juice.setDrinkTemperature(10);

// 4.После того, как реализовали класс "напиток" и его наследников, приступаем к классу "Кафе".
// Он у нас будет принимать 2 параметра, например название кафе и его месторасположение.
// Реализуем 2 метода внутри него:
// 1) получить информацию про кафе
// 2) заказать напиток
// При заказе напитка мы будем передавать аргументом сам напиток и вызывать его внутренние методы,
// например - подать напиток, А этот метод внутри себя вызывает метод для готовки напитка и
// выполняет всякие побочные действия, по типу изменения температуры и прочее.
// Что итоговое должно получиться:
// 1. Можем получить информацию про кафе
// 2. Можем заказать напиток
// 3. Можем получить информацию про напиток

class Cafe {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  getCafeInfo() {
    return `Название: ${this.name}, Местоположение: ${this.position}`;
  }

  orderDrink(drink) {
    if (!(drink instanceof Drink)) {
      throw new Error('Это не напиток');
    }
    console.log(`Заказ принят: ${drink.name}.`);

    drink.bringDrink();

    console.log(`Информация для чека: ${drink.getDrinkInfo()}`);

    console.log(`Температура подачи: ${drink.getDrinkTemperature()}`);
  }
}

const cafe = new Cafe('Чайхана', 'Ул. Казанская д.20');

console.log(cafe.getCafeInfo());
