class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }

  login(emailConfirm, passwordConfirm) {
    if (emailConfirm === this.email && passwordConfirm === this.password) {
      console.log(`Login realizado com sucesso!`);
    } else {
      console.log(`Erro no login! Email ou senha incorretos.`);
    }
  }
}

const uilian = new User("Uilian Rocha", "uilian@gmail.com", 1914);
console.log(uilian);
uilian.login("uilian@gmail.com", 1914);
