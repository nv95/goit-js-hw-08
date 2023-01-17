const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onSubmitForm);
function onSubmitForm(e) {}

refs.message.addEventListener('input', onMessageInput);
function onMessageInput(e) {
  const message = e.currentTarget.value;

  localStorage.setItem('feedback-form-state', message);
}
