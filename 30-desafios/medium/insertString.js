// Escreva uma função que recebe  três argumentos, uma frase, uma palavra e um array de indices. A função deve retornar a frase com a palavra inserida em cada uma das posições especificadas pelo array de indices.

//- A funçaõ não deve funcionar em indices que não estejam no alcance da frase

//- A funcão deve retornar a mesma frase caso o array de indices estaja vazio

function insertIntoString(str, toInsert, indexes) {
  const charsArray = str.split("");
  let insertCount = 0;

  for (let i = 0; i <= str.length; i++) {
    if (indexes.includes(i)) {
      charsArray.splice(i + insertCount, 0, toInsert);
      insertCount++;
    }
  }

  return charsArray.join("");
}

console.log(
  insertIntoString("capaz utilizar as cápsulas emergência", "de ", [6, 27, 38])
);

console.log(insertIntoString("Hello", " world", [5]));

console.log(insertIntoString("isso é um teste", " não", []));
