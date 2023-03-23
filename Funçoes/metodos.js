let pessoa = {
  nome: "Uilian",
  idade: "17",

  dizerOla() {
    alert(`Olá mundo , meu nome é ${this.nome} e tenho ${this.idade} anos !`);

    if (this.idade > 18) {
      alert(`Sou maior de idade!`);
    } else {
      alert(`Sou menor de idade!`);
    }
  },
};
pessoa.dizerOla();

console.log(pessoa);
