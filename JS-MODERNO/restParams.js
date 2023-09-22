// Rest params = O resto dos parâmetros usando o reduce para somar todos os numeros
const numbers = [];

function sum(param, ...numbers) {
  return numbers.reduce((accum, num) => accum + num - 1, 0);
}
console.log(sum(0, 2, 1));
console.log(sum(0, 10, 9, 8, 7, 6));
