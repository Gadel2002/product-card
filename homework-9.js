// 4.К Форме, которая прикреплена в футере - добавить логику:
// email должен соответствовать стандартам (добавить валидацию),
// если он не заполнен - форма не отправляется.
// Кнопка "Подписаться" и есть "отправкой формы",
// при нажатии на которую мы будем выводить консоль лог
// в виде объекта:  { email: 'введенная почта' }

const emailForm = document.getElementById('email-form');
emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
});

// Создать форму для регистрации внутри модального окна.
// Она должна содержать поля: имя, фамилия, дата рождения, логин, пароль,
// повторение пароля. Используйте <label> для того, что бы указать пользователю,
// какое поле за что отвечает. Также важно использовать placeholder
// (обо всем этом можно будет почитать в документации в конце поста)
// Разрешается добавить поля на ваше усмотрение. Все поля должны иметь валидацию.
// Если пользователь ввел два разных пароля или форма невалидна
// (используем метод checkValidity()) - мы должны предупредить его о том,
// что регистрация отклонена. Если регистрация успешна - выводим значения формы в лог,
// как в задании №4. Дополнительно мы должны добавить к этому объекту свойство createdOn
// и указать туда время создания (используем сущность new Date()).
// Также создайте внешнюю переменную user и присвойте ей этот объект.
// После успешной регистрации - модалка должна закрыться.

const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('button-registration');
const closeModalBtn = document.getElementById('close-modal');
const form = document.getElementById('form-registration');

let registeredUser = null;

openModalBtn.addEventListener('click', () => {
  modal.classList.add('show');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    alert('Форма невалидна');
    return;
  }

  const data = Object.fromEntries(new FormData(form).entries());

  if (data.password !== data.passwordConfirm) {
    alert('Пароли не совпадают');
    return;
  }

  registeredUser = {
    ...data,
    createdOn: new Date(),
  };

  console.log('USER:', registeredUser);

  modal.classList.remove('show');
  form.reset();
});
