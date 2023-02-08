const primeiroNumero = prompt("insira um numero");
const segundoNumero = prompt("insira outro numero");

const x = parseFloat(primeiroNumero);
const y = parseFloat(segundoNumero);

const soma = x + y;
const subtração = x - y;
const multiplicação = x * y;
const divisão = x / y;

alert(
  "Resultado dos calculos:\n" +
    "\nsoma:" +
    soma +
    "\nsubtração:" +
    subtração +
    "\nmultiplicação:" +
    multiplicação +
    "\ndivisão:" +
    divisão
);
