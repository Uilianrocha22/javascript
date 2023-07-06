const App = require("./App");

App.createUser("uilian@email.com", "Uilian Rocha");
App.createUser("natalia@email.com", "Natalia Silva");
App.createUser("sofia@email.com", "Sofia Oliveira");

App.deposit("uilian@email.com", 100);

App.transfer("uilian@email.com", "natalia@email.com", 20);

App.deposit("uilian@email.com", 70);

App.changeLoanFee(10);
App.takeLoan("sofia@email.com", 2000, 24);

console.log(App.findUser("uilian@email.com"));
console.log(App.findUser("uilian@email.com").account);
console.log(App.findUser("uilian@email.com").account.balance);

console.log(App.findUser("natalia@email.com"));
console.log(App.findUser("natalia@email.com").account);

console.log(App.findUser("sofia@email.com"));
console.log(App.findUser("sofia@email.com").account);

console.log(App.findUser("sofia@email.com").account.loans[0].installments);
