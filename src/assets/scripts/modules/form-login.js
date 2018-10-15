const form = document.getElementById(form);
const submit = document.querySelector('.form__submit');
const action = form.attributes['action'].value;
const method = form.attributes['method'].value;
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
  let valid = true;
  if (!validateField(form.elements.name)) {
    valid = false;
  }
  if (!validateField(form.elements.phone)) {
    valid = false;
  }
  return valid;
}
function validateField(field) {
  field.nextElementSibling.textContent = field.validationMessage;
  return field.checkValidity();
}
