class Account {
  #password;
  #balance = 0;

  constructor(user) {
    this.email = user.email;
    this.#password = user.password;
  }

  deposit(email, password, value) {
    if (this.#authenticate(email, password)) {
      return console.log(
        `depósito no valor de ${value} efetuado com sucesso saldo: ${(this.#balance +=
          value)} `
      );
    } else {
      return console.log(
        `(ERROR no depósito), email ou senha inválidos! saldo: ${
          this.#balance
        } `
      );
    }
  }

  saque(email, password, value) {
    if (this.#authenticate(email, password)) {
      return console.log(
        `Saque no valor de ${value} efetuado com sucesso saldo: ${(this.#balance -=
          value)} `
      );
    } else {
      return console.log(
        `(ERROR no saque), email ou senha inválidos! saldo: ${this.#balance} `
      );
    }
  }

  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return this.#balance;
    } else {
      return null;
    }
  }

  #authenticate(email, password) {
    return this.email === email && this.#password === password;
  }
}

const user = {
  email: "Uilian@gmail.com",
  password: "123456",
};

const myAccount = new Account(user);

console.log(myAccount);
myAccount.deposit("Uilian@gmail.com", "123456", 770);
myAccount.deposit("Uilian@gmail.com", "123456", 2330);
console.log(myAccount.getBalance("Uilian@gmail.com", "123456"));
myAccount.saque("Uilian@gmail.com", "12345", 1200);
myAccount.saque("Uilian@gmail.com", "123456", 1200);
console.log(myAccount.getBalance("Uilian@gmail.com", "123456"));
