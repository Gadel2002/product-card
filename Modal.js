// 4.Создать файл Modal.js и в нем создать  класс для модального окна
// под названием Modal.
// Он будет принимать 1 параметр через конструктор - айди модального окна.
// Внутри класса будут методы:
// I.Для открытия модального окна.
// II.Для закрытия модального окна.
// III.Для проверки, открыто ли сейчас модальное окно.
// IV.Метод, который слушает кнопку (крестик) для закрытия модалки
// и закрывает модалку (реализовать через eventListener)
// и вызывать в конструкторе
// Используя данный класс - переписать логику задания №9, связанной с
// модальными окнами. Как? Используя внутренние методы - мы можем
// управлять через айди модалки ее закрытием, открытием.

class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.initCloseBtn();
  }
  open() {
    this.modal.classList.add('show');
  }
  close() {
    this.modal.classList.remove('show');
  }
  isOpen() {
    return this.modal.classList.contains('active');
  }
  initCloseBtn() {
    const btn = this.modal.querySelector('.close__modal');
    if (btn) {
      btn.addEventListener('click', () => {
        this.close();
      });
    }
  }
}

const modal = new Modal('modal');

const openBtn = document.getElementById('button-registration');
openBtn.addEventListener('click', () => {
  modal.open();
});
