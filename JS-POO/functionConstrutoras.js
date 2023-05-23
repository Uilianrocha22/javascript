// Function construtoras comecam com a primeira letra maiúscula = ( Palmeiras )

function Time(nome, fundacao, brasileiros, libertadores, mundiais, tecnico) {
  this.nome = nome;
  this.fundacao = fundacao;
  this.brasileiros = brasileiros;
  this.libertadores = libertadores;
  this.mundiais = mundiais;
  this.tecnico = tecnico;

  this.addTituloLiberta = function (quantity) {
    this.libertadores += quantity;
  };
  this.addTituloMundial = function (quantity) {
    this.mundiais += quantity;
  };
}

const verdao = new Time(
  "Sociedade Esportiva Palmeiras",
  1914,
  11,
  3,
  1,
  "Abel Ferreira"
);

console.log(verdao);
verdao.addTituloLiberta(1);
verdao.addTituloMundial(1);
console.log(verdao);
