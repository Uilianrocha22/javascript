// Escreva uma função que receba um array bidimensional de inteiros e retorna um único array contendo todos os números em ordem ascendente(crescente)

function ArrayNave(arr) {
  const newArray = [];

  arr.forEach((numbers) => {
    newArray.push(...numbers);
  });

  return newArray.sort((a, b) => a - b);
}

console.log(
  ArrayNave([
    [1, 5, 3],
    [6, 19, 11, 40],
    [47, 125, 103],
    [1, 6, 47],
  ])
);

console.log(ArrayNave([[], [], [], []]));

console.log(
  ArrayNave([
    [100, 50],
    [60, 100],
    [20, 100, 70],
    [10, 40, 80, 90],
  ])
);
