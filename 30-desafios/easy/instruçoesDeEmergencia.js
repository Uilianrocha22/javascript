// Escreva uma função que recebe uma string, verifica se ela possui a mesma quantidade de cada letra que a compõe e retorna true caso possua ou false caso não possua.

function compareCounts(element, index, array) {
  return index !== 0 ? element === array[index - 1] : true;
}

function checkBalance(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    charCount[str[i]] = charCount[str[i]] ? charCount[str[i]] + 1 : 1;
  }

  console.log(charCount);
  return Object.values(charCount).every(compareCounts);
}

console.log(checkBalance(`this is thee`));
console.log(checkBalance(`ssd`));
console.log(checkBalance(`rocha rocha `));
