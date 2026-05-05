import './script.js';
import './comments.js';
import './product-cards.js';
import './homework-5.js';
import './homework-6.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import './homework-10.js';
import './homework-11.js';
import { Modal } from './Modal.js';
import { Form } from './Form.js';

const registrationForm = new Form('form-registration');
const modal = new Modal('modal');

const openBtn = document.getElementById('button-registration');
openBtn.addEventListener('click', () => {
  modal.open();
});

const closeBtn = document.getElementById('close-modal');
closeBtn.addEventListener('click', () => {
  modal.close();
});

registrationForm.form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (registrationForm.validateForm()) {
    const data = registrationForm.getValuesForm();

    console.log('USER:', data);

    modal.close();

    registrationForm.resetForm();
  }
});
