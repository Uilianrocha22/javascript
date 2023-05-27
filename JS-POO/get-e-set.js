class Wallet {
  #amount;
  #username;

  constructor() {
    this.#amount = 100.99 * 100; // === 10099
  }

  get amount() {
    return this.#amount / 100;
  }

  set username(newUsername) {
    if (typeof newUsername === "string") {
      this.#username = newUsername;
    } else {
      console.log("Nome de usuario precisa ser do tipo string.");
    }
  }

  get username() {
    return this.#username;
  }
}

const myWallet = new Wallet();

console.log(myWallet.amount);

myWallet.username = "Uilian";
myWallet.username += " Rocha";

console.log(myWallet.username);

myWallet.username = 1914;
console.log(myWallet.username);
