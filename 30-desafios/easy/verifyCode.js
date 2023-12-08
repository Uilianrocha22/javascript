// Escreva uma função que recebe um número e verifica se ele é um código de identificação válido segundo as regras de criação do digito verificador:

// 1. some os digitos das posições pares

// 2. multiplique esse resultado por 3

// 3. some os digitos das posições impares do numero original e então some esse resultado ao resultado do passo anterior

// 4. encontre o resto da divisão do resultado do passo anterior por 10

// 5. se o resto da divisão for 0 , o digito verificador é 0, do contrário o digito verificador é 10 -resto

function generateDigit(arr) {
  const step1 = arr.reduce((accum, current, index) => {
    return index === 0 || index % 2 === 0 ? accum + current : accum;
  }, 0);

  const step2 = step1 * 3;

  const step3 =
    step2 +
    arr.reduce((accum, current, index) => {
      return index % 2 !== 0 ? accum + current : accum;
    }, 0);

  return step3 % 10 === 0 ? 0 : 10 - (step3 % 10);
}

function verifyCode(code) {
  const numberArray = code.toString().split("").map(Number);

  const numberArrayDigit = numberArray.slice(0, -1);

  const correctDigit = generateDigit(numberArrayDigit);

  return correctDigit === numberArray[numberArray.length - 1];
}

console.log(verifyCode(547020743789));
console.log(verifyCode(301354030348));
console.log(verifyCode(301354030349));
console.log(verifyCode(123456789872));
