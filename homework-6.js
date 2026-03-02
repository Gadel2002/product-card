//Объект с моими данными

const myInfo = {
  name: 'Gadel',
  surname: 'Khuzin',
  email: 'Khuzin.gadel@gmail.com',
  work: 'Frontend developer',
  position: 'Angular developer',
  age: 23,
  country: 'Saudia Arabia',
  city: 'Madina',
  relationshipStatus: 'Married',
};

//Объект с данными автомобиля

const dataCar = {
  brand: 'BMW',
  model: 'BMW X3',
  modelYear: 2025,
  colour: 'Blue',
  typeOfTransmission: 'Automatic',
};

dataCar.owner = myInfo;

//Написать функцию которая аргументом будет принимать объект,
//описанный в пункте №4. Она проверяет,
//есть ли в объекте свойство "максимальная скорость",
//если нет - добавляет его и задает значение,
//если есть - прекращает выполнение (ничего не делает)

const addMaxSpeed = (dataCar) => {
  if (!('maxSpeed' in dataCar)) {
    dataCar.maxSpeed = 300;
  }
};

addMaxSpeed(dataCar);

// Написать функцию, которая получает первым аргументом  — объект,
// а вторым аргументом — свойство объекта,
// которое нужно вывести и выводит его значение

const outputObjectValue = (obj, value) => {
  console.log(obj[value]);
};

outputObjectValue(myInfo, 'position');

// Создать массив, который содержит названия продуктов (просто строки)

const products = ['milk', 'bread', 'oil', 'sugar', 'salt'];

// Создать массив, состоящий из объектов, где объект
// представляет собой книгу (название, автор, год выпуска, цвет обложки, жанр)
// (3-5 книг). После, используя известный нам метод массива,
// добавить еще одну книгу в конец списка.

const arrayBooks = [
  {
    title: 'The Genius of Birds',
    author: 'Jennifer Ackerman',
    yearOfRelease: 2016,
    coverColor: 'Blue',
    genre: 'Nature',
  },
  {
    title: 'Bird by Bird',
    author: 'Anne Lamott',
    yearOfRelease: 1994,
    coverColor: 'White',
    genre: 'Nature',
  },
  {
    title: 'The Bird Way',
    author: 'Jennifer Ackerman',
    yearOfRelease: 2020,
    coverColor: 'Yellow',
    genre: 'Animal Behavior',
  },
  {
    title: 'H Is for Hawk',
    author: 'Helen Macdonald',
    yearOfRelease: 2014,
    coverColor: 'Red',
    genre: 'Memoir',
  },
  {
    title: 'Silent Spring',
    author: 'Rachel Carson',
    yearOfRelease: 1962,
    coverColor: 'Green',
    genre: 'Nature',
  },
];

arrayBooks.push({
  title: 'The Peregrine',
  author: 'J. A. Baker',
  yearOfRelease: 1967,
  coverColor: 'Brown',
  genre: 'Nature Writing',
});

// Создать еще один массив, состоящих из тех же книг,
// но относящийся к определенной вселенной (Гарри Поттер, Марвел и так далее).
// (Если используете другую, свою сущность - импровизируйте).
// С помощью известного нам метода массива или оператора
// (рекомендую использовать оператор), объединить эти два массива в один

const twoArrayBooks = [
  {
    title: 'Harry Potter and the Philosopher’s Stone',
    author: 'J. K. Rowling',
    yearOfRelease: 1997,
    coverColor: 'Purple',
    genre: 'Fantasy',
  },
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J. K. Rowling',
    yearOfRelease: 1998,
    coverColor: 'Green',
    genre: 'Fantasy',
  },
  {
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J. K. Rowling',
    yearOfRelease: 1999,
    coverColor: 'Blue',
    genre: 'Fantasy',
  },
];

const unificArray = [...arrayBooks, ...twoArrayBooks];

// Почитать про метод массива — map. Написать функцию,
// которая принимает массив сущностей с задания №9.
// Добавляем новое свойство для объекта "isRare (это редкий)"
// и в зависимости от года выпуска книги (или какой-то логики,
// связанной с вашей сущностью), устанавливаем true или false.
// Что я хочу этим сказать: если книга выпущена позже 2000 года,
// устанавливаем true (да, это редкий), нет - false (значит это не редкий)

const getRareBook = (booksArray) => {
  return booksArray.map((book) => {
    return { ...book, isRare: book.yearOfRelease > 2000 };
  });
};

const updateBook = getRareBook(unificArray);
console.log(updateBook);
