function register(element) {
  const username = element.children.username.value;
  const password = element.children.password.value;
  const passwordConfirmation = element.children.passwordConfirmation.value;

  if (password === passwordConfirmation) {
    alert(`Usuário ${username} Registrado com sucesso!`);
  } else {
    alert(`Não foi possivel Registrar, senhas diferentes!`);
  }

  console.log({ username, password, passwordConfirmation });
}
