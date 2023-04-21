let number = [5, 8, 2, 9, 3];
console.log(number);

number.push(1);
console.log(number);
console.log(`O array tem ${number.length} posicões!`);
console.log(number.sort());
console.log(number[4]);

// iterando com (FOR) ----------------------------------------------------------------------------

for (let indice = 0; indice < number.length; indice++) {
  const elemento = number[indice];
  console.log(`O número ${elemento} se encontra na posição ${indice}`);
}
console.log(number);

// iterando com (WHILE)  ----------------------------------------------------------------------------
let indice = 0;

while (indice < number.length) {
  const elemento = number[indice];
  console.log(`O ${elemento} se encontra na posição ${indice}`);
  indice++;
}
console.log(number);

// iterando com (ForEACH)   -----------------------------------------------------------------------------

number.forEach(function (numero, posição, comprimento) {
  console.log({ numero, posição, comprimento });
});
console.log(number);

// iterando com (For(simplificado))   ------------------------------------------------------------------------------

for (let indice in number) {
  console.log(`A pocição ${indice} tem o número ${number[indice]}`);
}

console.log(number);

//console.log(`A posição do número 8 é = ${posiçao}`);
let posicao = number.indexOf(8);

if (posicao == -1) {
  console.log(`O número não foi encontrado!`);
} else {
  console.log(` O número está na posição = ${posicao}`);
}

// Quando o indexOf não encontra o elemento no array ele devolve a posição -1

/*console.log(`A posição do número 7 é = ${number.indexOf(7)}`);
console.log(`A posição do número 4 é = ${number.indexOf(4)}`); */
