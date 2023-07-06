function validateEmail(email) {
  if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
    const err = new Error("Email inválido.");
    err.input = "email";
    throw err;
  }
}

function validatePassword(password) {
  if (
    password.length < 8 ||
    !password.match(/[a-z]/) ||
    !password.match(/[A-Z]/) ||
    !password.match(/[\d]/) ||
    !password.match(/[^a-zA-Z0-9\s]/)
  ) {
    // lançar erro
    const err = new Error(`Senha inválida!`);
    err.input = "password";
    throw err;
  }
}

function resetFormStyles(inputs) {
  Object.entries(inputs).forEach(([key, value]) => {
    value.classList.remove(`success`, `error`);
    document.querySelector(`#${key}-error`).textContent = "";
  });
}

const userInputs = {
  name: document.querySelector(`#name`),
  email: document.querySelector(`#email`),
  password: document.querySelector(`#password`),
};

const form = document.querySelector(`form`).addEventListener("submit", (ev) => {
  ev.preventDefault();
  resetFormStyles(userInputs);

  try {
    userInputs.name.classList.add("success");
    validateEmail(userInputs.email.value);
    userInputs.email.classList.add("success");
    validatePassword(userInputs.password.value);
    userInputs.password.classList.add("success");
  } catch (err) {
    userInputs.email.classList.add("error");
    userInputs.password.classList.add("error");
    document.querySelector(`#${err.input}-error`).textContent = err.message;
  }
});
