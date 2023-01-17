import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form input'),
};
const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onSubmitForm);
refs.form.addEventListener('input', throttle(onMessageForm, 500));

reloadPage();

const formData = {};

function onMessageForm(e) {
  formData[e.target.neme] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(e) {
  e.preventDefault();
  const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(saveData);

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function reloadPage() {
  const savedValues = localStorage.getItem(STORAGE_KEY);

  if (savedValues) {
    formData = JSON.parse(savedValues);
    console.log(formData);
    refs.email.value = formData.email;
    refs.message.value = formData.message;
  }
}
