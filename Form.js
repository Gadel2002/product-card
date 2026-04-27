// 5.Создать файл Form.js и реализовать класс для формы под названием Form.
// Он будет принимать 1 параметр - айди формы.
// Внутри класса будут методы:
// I.Для получения всех значений формы.
// II.Для проверки валидности формы
// (метод возвращает true/false в зависимости от того, валидна ли форма).
// III.Для сброса значений формы.
// Используя данный класс - переписать логику задания №9,
// связанной с формами. Как? Используя внутренние методы -
// мы можем управлять через айди формы получением значений и всем,
// что должна делать модалка.

class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);
  }

  getValuesForm() {
    const formData = new FormData(this.form);
    return Object.fromEntries(formData.entries());
  }

  validateForm() {
    const data = this.getValuesForm();
    const isNativeValid = this.form.checkValidity();
    const passwordsMatch = data.password === data.passwordConfirm;

    if (!passwordsMatch) {
      alert('Пароли не совпадают!');
    }

    return isNativeValid && passwordsMatch;
  }

  resetForm() {
    this.form.reset();
  }
}

const registrationForm = new Form('form-registration');

let registeredUser = null;

registrationForm.form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (registrationForm.validateForm()) {
    const data = registrationForm.getValuesForm();

    registeredUser = {
      ...data,
      createdOn: new Date(),
    };

    console.log('USER:', registeredUser);

    const modal = document.getElementById('modal');
    modal.classList.remove('modal--active');
    modal.style.display = 'none';

    registrationForm.resetForm();
  } else {
    console.log('Форма заполнена не правильно');
  }
});
