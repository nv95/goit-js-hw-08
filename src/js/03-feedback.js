import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form input'),
};

let formData = {};
const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onSubmitForm);
refs.form.addEventListener('input', throttle(onMessageForm, 500));

reloadPage();

function onMessageForm(e) {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function reloadPage() {
  const savedValues = localStorage.getItem(STORAGE_KEY);
  const parseValues = JSON.parse(savedValues);

  if (parseValues) {
    formData.email = parseValues.email;
    formData.message = parseValues.message;
    refs.form.elements.email.value = formData.email;
    refs.form.elements.message.value = formData.message;
  }
}

function onSubmitForm(e) {
  e.preventDefault();
  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
