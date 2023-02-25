const arr = ["frodo", "sam", "merry", "pippin", "gandalf"];
console.log(arr);

// adicionar elementos
// PUSH === adicionar no final:

arr.push("boromir");
console.log(arr);

// Adicionar elementos
// UNSHIFT === adicionar no inicio:

arr.unshift("Legolas");
console.log(arr);

//Remover elementos
// POP === remover do final:
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

//Remover elementos
// SHIFT === remover do inicio:
primeiroElemento = arr.shift();
console.log(arr);
console.log(primeiroElemento);

// Pesquisar por um elemento:
// INCLUDES === devolve um valor boleano(true ou false)

const inclui = arr.includes("gandalf");
console.log(inclui);

// Pesquisar por um elemento:
//INDEXOF === devolve a posição do elemento

const i = arr.indexOf("gandalf");
console.log(i);

// cortar e concatenar
// SLICE

const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);

console.log(arr);
console.log(hobbits);
console.log(outros);

// CONCAT

const sociedade = hobbits.concat(outros, "boromir", "legolas");
console.log(sociedade);

// Substituição dos elementos
// SPLICE

const elementosRemovidos = sociedade.splice(7, 1, "o cinzento");
console.log(elementosRemovidos);
console.log(sociedade);

//Iterar sobre os Elementos

let indice = 0;
while (indice < sociedade.length) {
  const elemento = sociedade[indice];
  indice++;
  console.log(`${elemento} se encontra na posição ${indice}`);
}

for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice];
  console.log(`${elemento} se encontra na pisição ${indice}`);
}

let inn = sociedade.indexOf("o cinzento");
console.log(inn);
