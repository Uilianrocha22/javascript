// Escreva uma função que recebe um número e retorna o seu factorial sem utilizar nenhuma estrutura de repetição (while, dowhile, for etc).O factorial de un número é igual a multiplicação de todos os inteiros menores a ele. Ela deve retornar números corretos mesmo para valores altos.

// EX: factorial de !5 === 5x4x3x2x1, ou 5 x !4

// para números muitos grandes logo alcançaremos o MAX_SAFE_INTEGER maior número suportado pelo javascript , para números inteiros maiores que isso podemos ultilizar o (BigInt)

function factorial(num) {
  const bigNum = BigInt(num);

  if (bigNum === 0n) {
    return 1n;
  } else {
    return bigNum * factorial(bigNum - 1n);
  }
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(32));
console.log(factorial(9n));
