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
