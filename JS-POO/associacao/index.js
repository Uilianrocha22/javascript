const Address = require("./address");
const Person = require("./person");

const addr = new Address(
  "Sebastião justino",
  172,
  "Marcos freire",
  "Guarulhos",
  "SP"
);
const uilian = new Person("Uilian", addr);
console.log(uilian);
console.log(uilian.address.fullAddress());
