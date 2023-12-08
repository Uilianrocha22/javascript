// Escreva uma função que recebe uma string e um número e retorne o resultado da aplicação da Cifra de cesar para descriptografar o seu conteúdo, Ou seja, que retroceda cada letra pelo número passado seguidos a ordem alfábetica .

// Entradas: ("Vguvg", 2), ("vjmjbo", 1), ("Amozmlw", 8)
// saida: ("teste") , ("uilian"), ("segredo")

function decipher(str, num) {
  const charsArray = str.split("");
  const normalizedKey = num % 26;

  const codesArray = charsArray.map((char) => {
    const currentCode = char.charCodeAt(0);

    if (
      currentCode >= 65 &&
      currentCode <= 90 &&
      currentCode - normalizedKey < 65
    ) {
      return currentCode + 26;
    }

    if (
      currentCode >= 97 &&
      currentCode <= 122 &&
      currentCode - normalizedKey < 97
    ) {
      return currentCode + 26;
    }

    return currentCode;
  });

  return codesArray
    .map((code) => String.fromCharCode(code - normalizedKey))
    .join("");
}

console.log(decipher("Amozmlw", 8)); // segredo
console.log(decipher("vjmjbo", 1)); // uilian
