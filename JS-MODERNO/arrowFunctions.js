// Função normal --------------------------------------

function normalSum(a, b) {
  return a + b;
}

console.log(`A soma normal é ${normalSum(2, 2)}`);

// Funçao anonima -------------------------------------

const anonimousSoma = function (a, b) {
  return a + b;
};

console.log(`A soma anonima é ${anonimousSoma(2, 2)}`);

// Função com Arrow functions --------------------------

const arrowSoma = (a, b) => {
  return a + b;
};

console.log(`A soma Arrow(moderna) é ${arrowSoma(2, 2)}`);

const arrowSubtract = (a, b) => a - b;

console.log(`A subtração é ${arrowSubtract(4, 2)}`);

const double = (num) => `O dobro de ${num} é ${num * 2}`;

const number = 10;
console.log(double(number));

// Arrow function com high-order function

const avengers = [
  "Thor",
  "SpiderMan",
  "Capitão America",
  "Homen de ferro",
  "Viuva negra",
  "gavião arqueiro",
  "Hulk",
];

const avengerStarting = avengers.filter((hero) => hero[0] === "H");

console.log(avengers);
console.log(avengerStarting);
