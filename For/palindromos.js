const palavra = prompt("Informe uma palavra");
let palavraInvertida = "";
let indice = palavra.length - 1;

while (indice >= 0) {
  palavraInvertida += palavra[indice];
  indice--;
}
if (palavra === palavraInvertida) {
  alert(`${palavra} é um palíndromo`);
} else {
  alert(`${palavra} não é um palíndromo \n\n
 "${palavra}" !==  "${palavraInvertida}"`);
}
