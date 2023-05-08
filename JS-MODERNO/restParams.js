// Rest params = O resto dos parâmetros usando o reduce para somar todos os numeros
const numbers = [];
function sum(...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0);
}
console.log(sum(0, 1, 1));
console.log(sum(0, 10, 9, 8, 7, 6));
