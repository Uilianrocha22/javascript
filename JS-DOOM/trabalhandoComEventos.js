function register(ev) {
  console.log(ev);

  const sectionElement = ev.currentTarget.parentNode;

  const username = sectionElement.children.username.value;
  const password = sectionElement.children.password.value;
  const passwordConfirmation =
    sectionElement.children.passwordConfirmation.value;

  if (password === passwordConfirmation) {
    alert(`Usuário ${username} Registrado com sucesso!`);
  } else {
    alert(`Não foi possivel Registrar, senhas diferentes!`);
  }
}

const button = document.getElementById(`register-button`);

button.addEventListener(`click`, register);

function removeListener() {
  button.removeEventListener(`click`, register);
  alert(`Event Removed`);
}

button.addEventListener(`mouseover`, function (ev) {
  alert(ev.currentTarget);
});
