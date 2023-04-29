// Rest params = O resto dos parâmetros
const numbers = [];
function sum(params, ...numbers) {
  return numbers.reduce((accum, num) => accum + num);
}
console.log(sum(0, 1, 1));
console.log(sum(0, 10, 9, 8, 7, 6));
