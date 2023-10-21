// // Escreva uma função que recebe um número inteiro qualquer, eleve ao quadrado cada um de seus algarismos e depois concatene o resultado retornando um único número inteiro .

function square(num) {
  const str = num.toString();

  let result = "";

  for (let i = 0; i < str.length; i++) {
    result += Math.pow(Number(str[i]), 2).toString();
  }

  return Number(result);
}

console.log(square(3514)); // 9 25 1 16
console.log(square(94571)); // 81 16 25 49 1
console.log(square(24)); // 4 16
console.log(square(745821698)); // 49 16 25 64 4 1 36 81 64

function square2(num) {
  const digitsArray = num.toString().split("");
  const squaredArray = digitsArray.map((digit) => Number(digit) ** 2).join("");

  return Number(squaredArray);
}

console.log(square2(3514)); // 9 25 1 16
console.log(square2(94571)); // 81 16 25 49 1
console.log(square2(24)); // 4 16
console.log(square2(745821698)); // 49 16 25 64 4 1 36 81 64
