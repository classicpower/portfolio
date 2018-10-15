const form = document.getElementById('form');
const submit = document.querySelector('.form__submit');
const action = form.getAttribute('action');
const method = form.getAttribute('method');

submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (validateForm(form)) {
    const data = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      message: form.elements.message.value,
      to: "karasev.dev@gmail.com"
    };
    console.log(data);
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open(method, action);
    xhr.send(JSON.stringify(data));
    xhr.addEventListener("load", function () {
    })

  }
});

function validateForm(form) {
  let valid = true;
  const name = form.elements.name;
  const email = form.elements.email;
  if (!validateField(name)) {
    valid = false;
  }
  if (!validateField(email)) {
    valid = false;
  }
  return valid;
}
function validateField(field) {
  const fieldError = field.nextElementSibling;
  fieldError.textContent = field.validationMessage;
  if(field.validationMessage){
    const div = document.createElement('div');
    div.className = 'form__error-triangle';
    fieldError.appendChild(div);
  }
  return field.checkValidity();
}