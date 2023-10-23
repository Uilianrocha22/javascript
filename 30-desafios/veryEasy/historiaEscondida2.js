// Escreva uma função que recebe uma string e retorna cada palavra da string invertida e em letras minusculas, porém com as palavras na mesma ordem. Assuma que a string não possui nenhuma letra com acento, número ou caractere especial, apenas letras e espaços.

// método SPLIT() divide string ("")= em letras , (" ")= em palavras a cada espaço

// método JOIN() faz ao contráro junta string

// REVERSE() inverte palavras, strings, array etc

function invert(str) {
  const wordArray = str.split(" ");
  const invertedWords = wordArray.map((word) => {
    const lowerCaseString = word.toLowerCase();
    return lowerCaseString.split("").reverse().join("");
  });

  return invertedWords.join(" ");
}

function invertWord(word) {
  return word.split("").reverse().join("");
}

function invertWords(str) {
  return str.toLowerCase().split(" ").map(invertWord).join(" ");
}

console.log(invert("uilian oliveira rocha"));
console.log(invertWords("uilian oliveira rocha"));
