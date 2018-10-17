const form = document.getElementById('form');
const submit = document.querySelector('.form__submit');
const action = form.getAttribute('action');
const method = form.getAttribute('method');
const login = form.elements.login;
const password = form.elements.password;
const checkCaptcha = form.elements.checkCaptcha;
const radioCaptcha = form.elements.radioCaptcha;

submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (validateForm(form)) {
    const data = {
      login: form.elements.login.value,
      password: form.elements.password.value,
      checkCaptcha: form.elements.checkCaptcha.value,
      radioCaptcha: form.elements.radioCaptcha.value,
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
login.addEventListener('change', function () {
  if (this.value.length <= 0) {
    validateField(login, "Вы не ввели логин");
  } else {
    validateField(login, "");
  }
});
password.addEventListener('change', function () {
  if (this.value.length <= 3) {
    validateField(password, "Пароль должен быть больше 3х символов");
  } else {
    validateField(password, "");
  }
});
checkCaptcha.addEventListener('change', function () {
  if (!checkCaptcha.checked) {
    validateField(checkCaptcha, "Робот! Ты не пройдешь!");
  } else {
    validateField(checkCaptcha, "");
  }
});

function validateForm(form) {
  const login = form.elements.login;
  const password = form.elements.password;
  const checkCaptcha = form.elements.checkCaptcha;
  const radioCaptcha = form.elements.radioCaptcha;
  let valid = true;
  if (login.value.length <= 0) {
    validateField(login, "Вы не ввели логин");
    valid = false
  } else {
    validateField(login, "");
    valid = true
  }
  if (password.value.length <= 3) {
    validateField(password, "Пароль должен быть больше 3х символов");
    valid = false
  } else {
    validateField(password, "")
    valid = true
  }

  if (!checkCaptcha.checked) {
    validateField(checkCaptcha, "Робот! Ты не пройдешь!");
    valid = false;
  } else {
    validateField(checkCaptcha, "");
    valid = true;
  }
  for (let i = 0; i < radioCaptcha.length; i++) {
    const radio = radioCaptcha[i];
    if (radio.checked) {
      validateField(radioCaptcha, "Робот! Ты не пройдешь!");
      valid = false;
    } else {
      validateField(radioCaptcha, "");
      valid = true;
    }

  }

  return valid;
}
function validateField(field, messege) {
  const fieldError = field.nextElementSibling;
  const parentLabel = field.parentNode;
  if (field === login || field === password) {
    fieldError.textContent = messege;
    if (messege) {
      const div = document.createElement('div');
      div.className = 'form__error-triangle';
      fieldError.appendChild(div);
      parentLabel.classList.add('form__input-label--error');
      parentLabel.classList.remove('form__input-label--success');
    } else {
      parentLabel.classList.add('form__input-label--success');
      parentLabel.classList.remove('form__input-label--error');
    }
  }
  if (field === checkCaptcha) {
    console.log(parentLabel);
    const lastFieldError = parentLabel.children[3];
    lastFieldError.textContent = messege;
    if (messege) {
      const div = document.createElement('div');
      div.className = 'form__error-triangle';
      lastFieldError.appendChild(div);
    }
  }
  if (field === radioCaptcha) {
    for (let i = 0; i < radioCaptcha.length; i++) {
      const field = radioCaptcha[i];
      const parentLabel = field.parentNode;
      const parentRow = parentLabel.parentNode;
      const lastFieldRow = parentRow.children[3];
      lastFieldRow.textContent = messege;
      if (messege) {
        const div = document.createElement('div');
        div.className = 'form__error-triangle';
        lastFieldRow.appendChild(div);
      }
    }
  }
}
