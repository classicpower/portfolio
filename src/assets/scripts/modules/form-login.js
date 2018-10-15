const form = document.getElementById('form');
const submit = document.querySelector('.form__submit');
const action = form.getAttribute('action');
const method = form.getAttribute('method');

submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (validateForm(form)) {
    const data = {
      name: form.elements.name.value,
      password: form.elements.password.value,
      checkCaptcha: form.elements.checkCaptcha.value,
      radioCaptcha: form.elements.checkCaptcha.value,
      to: "karasev.dev@gmail.com"
    };

    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open(method, action);
    xhr.send(JSON.stringify(data));
    xhr.addEventListener("load", function () {
    })

  }
});
function validateForm(form) {
  const name = form.elements.name;
  const password = form.elements.password;
  const checkCaptcha = form.elements.checkCaptcha;
  const radioCaptcha = form.elements.radioCaptcha;
  let valid = true;
  if (!validateField(name)) {
    valid = false;
  }
  if (!validateField(password)) {
    valid = false;
  }
  if (!validateField(checkCaptcha)) {
    valid = false;
  }
  if (!validateField(radioCaptcha)) {
    valid = false;
  }
  return valid;
}
function validateField(field) {
  field.nextElementSibling.textContent = field.validationMessage;
  return field.checkValidity();
}
