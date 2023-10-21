// Escreva uma função que recebe uma string e retorna a maior letra segundo a ordem alfabética em minúsculo. Assuma que a string não possui nenhuma letra com acento, número ou caractere especial, apenas letras e espaços.

function highestLetter(string) {
  const lowerCaseString = string.toLowerCase();
  const lettersArray = lowerCaseString.split("");
  const sortedArray = lettersArray.sort();

  return sortedArray[sortedArray.length - 1];
}

console.log(highestLetter("uilian")); // u
console.log(highestLetter(`Lorem ipsum dolore sec avanti`)); // v
console.log(highestLetter(`Hello`)); // o
console.log(highestLetter(`May the force be with you`)); // y
console.log(highestLetter(`It s over nine thousand`)); // v

//---------------------------------------------------------------------------

function highestLetter2(str) {
  const sortedArray = str.toLowerCase().split("").sort();

  return sortedArray[sortedArray.length - 1];
}

console.log(highestLetter2("uilian")); // u
console.log(highestLetter2(`Lorem ipsum dolore sec avanti`)); // v
console.log(highestLetter2(`Hello`)); // o
console.log(highestLetter2(`May the force be with you`)); // y
console.log(highestLetter2(`It s over nine thousand`)); // v
