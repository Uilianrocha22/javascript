// Escreva uma função que recebe um par ordenado (x,y) e retorne um array de pares (x,y) onde cada um deles possui x e y menor ou igual ao par recebido em ordem crescente. Os pares devem ser ordenados de forma que o primeiro aumente o valor de y e depois o valor de x. Apenas o quadrante onde x e y são positivos devem ser considerados.

// EX:
// Entrada = ([2, 2])
// Saida = [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]]

// o ponto chave é entender a utilização de matrizes (ou arrays bidimensionais) e iterar sobre arrays dentro de outros arrays.

function smallerPairs(x, y) {
  const pairs = [];

  for (let i = 0; i <= x; i++) {
    for (let j = 0; j <= y; j++) {
      pairs.push([i, j]);
    }
  }

  return pairs;
}

console.log(smallerPairs(2, 2));
console.log(smallerPairs(-2, -2));
