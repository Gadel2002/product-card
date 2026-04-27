//3.Создать структуру на ваш выбор, как было показано в лекции
//(имеется ввиду - с машинами/бьюти-продуктами).
//Придумайте свою структуру и реализуйте наследуемость классов

class Book {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  showBook() {
    console.log(`${this.name} - published in ${this.year}`);
  }
}

class DetailedBook extends Book {
  constructor(name, year, pages) {
    super(name, year);
    this.pages = pages;
  }
  showBook() {
    console.log(
      `${this.name} - published in ${this.year}, ${this.pages} pages`
    );
  }
}

const book1 = new Book('Silent Spring', 1962);
book1.showBook();

const book2 = new DetailedBook('Silent Spring', 1962, 300);
book2.showBook();
