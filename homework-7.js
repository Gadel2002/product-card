import { commentsInSocialMedia } from './comments.js';

// Создать массив чисел от 1 до 10.
// Отфильтровать его таким образом,
// что бы мы получил массив чисел, начиная с 5.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.filter((number) => number >= 5);

// Создать массив строк, относящихся к любой сущности
// (название фильмов/книг, кухонные приборы, мебель и т.д.),
// проверить, есть ли в массиве какая-то определенная сущность.

const books = [
  'The Genius of Birds',
  'Bird by Bird',
  'The Bird Way',
  'Silent Spring',
];

const hasBook = books.includes('The Bird Way');

// Написать функцию, которая аргументом будет принимать массив
// и изменять его порядок на противоположный ("переворачивать") .
// Два вышеуказанных массива с помощью этой функции перевернуть.

const reverseArray = (array) => array.reverse();

console.log(reverseArray(numbers));
console.log(reverseArray(books));

// Вывести в консоль массив тех комментариев,
// почта пользователей которых содержит ".com"

const usersCom = commentsInSocialMedia.filter((comment) =>
  comment.email.includes('.com')
);

// Перебрать массив таким образом, что бы пользователи с id меньше
// или равно 5 имели postId: 2, а те, у кого id больше 5,
// имели postId: 1

const updatedComments = commentsInSocialMedia.map((comment) => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1,
}));

// Перебрать массив, что бы объекты состояли только из айди и имени

const usersWithIdandName = commentsInSocialMedia.map((comment) => ({
  id: comment.id,
  name: comment.name,
}));

// Перебираем массив, добавляем объектам свойство isInvalid и проверяем:
// если длина тела сообщения (body) больше 180 символов - устанавливаем true,
// меньше - false.

const commentsWithIsInvalidFlag = commentsInSocialMedia.map((comment) => ({
  ...comment,
  isInvalid: comment.body.length > 180,
}));

// Почитать про метод массива reduce.
// Используя его, вывести массив почт и провернуть тоже самое
// с помощью метода map

//REDUSE
const emailsFromReduce = commentsInSocialMedia.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

//MAP
const emailsFromMap = commentsInSocialMedia.map((comment) => comment.email);

// Почитать про методы toString(), join()
// и перебрав массив с задания №11,
// привести его к строке

//toString()
const emailsStringFromReduce = emailsFromReduce.toString();

const emailsStringFromMap = emailsFromMap.toString();

//join()
const joinedEmailsFromReduce = emailsFromReduce.join();

const joinedEmailsFromMap = emailsFromMap.join();
