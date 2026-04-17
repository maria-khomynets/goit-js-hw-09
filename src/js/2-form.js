const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

// ВІДНОВЛЕННЯ (ОДРАЗУ ПРИ ЗАПУСКУ)
dataStorage();

function dataStorage() {
  const savedData = localStorage.getItem(localStorageKey);

  if (!savedData) return;

  const parsedData = JSON.parse(savedData);

  formData = parsedData;

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// INPUT — збереження
form.addEventListener('input', handleInput);

function handleInput(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

// SUBMIT
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(localStorageKey);

  formData = {
    email: '',
    message: '',
  };

  form.reset();
}
