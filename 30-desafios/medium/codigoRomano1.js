// Escreva uma função que recebe uma string de algarismos romanos e seja capaz de traduzir seu conteudo retornando o inteiro decimal correspondente.

// algarismos romanos são:
// - I: 1
// - V: 5
// - X: 10
// - L: 50
// - C: 100
// - D: 500
// - M: 1000

//- notações PADRÃO:
//- I,II e III(1,2 e 3), VI, VII e VIII(5,7 e 8), X,XX e XXX(10, 20 e 30) etc.

//- -----------------------------------------------------------------------------
//- notações SUBTRATIVAS:

//- IV(1 -5 = 4), IX(1 - 10 =9), XLIX(10 - 50 + 1 - 10 = 49), XC(10 - 100 = 90),
// CMXCIX(100 - 1000 + 10 - 100 + 1 - 10 = 999)

function romanNumeral(str) {
  const numeralArray = str.split("");

  const decimalsArray = numeralArray.map((numeral) => {
    switch (numeral) {
      case "I":
        return 1;
      case "V":
        return 5;
      case "X":
        return 10;
      case "L":
        return 50;
      case "C":
        return 100;
      case "D":
        return 500;
      case "M":
        return 1000;
      default:
        return 0;
    }
  });

  return decimalsArray.reduceRight((accum, current, index, array) => {
    if (current < array[index + 1]) {
      return accum - current;
    } else {
      return accum + current;
    }
  });
}

console.log(romanNumeral("XLVII")); // 47
console.log(romanNumeral("CDXXXVIII")); // 438
console.log(romanNumeral("CMIX")); // 909
console.log(romanNumeral("MMMCMXCIX")); // 3999

// Refatorando a função:
