const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
let formData = {
  email: '',
  message: '',
};

form.addEventListener('input', handleInput);
function handleInput(event) {
  formData[event.target.name] = event.target.value;
  const data = JSON.stringify(formData);
  localStorage.setItem(localStorageKey, data);
}
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const message = localStorage.getItem(localStorageKey);
  console.log(message);
  form.reset();
}
