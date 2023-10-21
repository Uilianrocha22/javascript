// Escreva uma função que recebe um número e retorna uma quantidade equivalente de "chunks" separados por um traço " - " sem utilizar nenhuma estrutura de repetição(while, dowhile, for, etc).

function chunks(num) {
  if (num === 0) {
    return "";
  } else if (num === 1) {
    return "1chunk";
  } else {
    return `${num}chunk- ${chunks(num - 1)}`;
  }
}

console.log(chunks(4));

function recursivoChunks(num) {
  if (num === 0) return "";
  return num === 1 ? "1chunk" : `${num}chunk- ${recursivoChunks(num - 1)}`;
}

console.log(recursivoChunks(8));
