const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen"];
console.log(towns);
console.log(...towns);
console.log(...towns[0]);

// Referencia ao Array towns (Não cria um array novo)
const townsCopy = towns;

townsCopy.pop();
townsCopy.pop();
townsCopy.push("Juno");

console.log({ towns, townsCopy });

// Copia do Array towns ( esse cria um array novo)
const townsClone = [...towns];

townsClone.push("Brasilia");

console.log({ towns, townsCopy, townsClone });

// Spread em Objeto

const townsObj = { ...towns };
const townsObjClone = { ...townsObj };

townsObjClone.test = "Test";

console.log({ townsObj, townsObjClone });
