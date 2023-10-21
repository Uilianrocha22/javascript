// Escreva uma função que recebe um array e retorne um novo array com todas as posições invertida do original sem altera-lo. não utilize  os métodos do objeto global Array do javascript (reverse, map, forEach, etc).

function reverse(arr) {
  const reversedArray = [];

  for (let i = 0; i < arr.length; i++) {
    reversedArray[i] = arr[arr.length - 1 - i];
  }

  return reversedArray;
}

console.log(reverse([0, 9, 6, 8, 9, 1, 5, 7]));
console.log(reverse(["Oh", "Hi", "Mark"]));
