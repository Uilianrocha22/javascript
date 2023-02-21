const medida = prompt("Escolha uma medida em metros:");
const unidade = prompt(
  `Escolha uma unidade de medida para conversão:\n
a. milímetro(mm)
b. centímetro(cm)
c. decímetro(dm)
d. decâmetro(dam)
e. hectômetro(hm)
f. quilômetro(km)`
);

if (unidade === "a") {
  alert(`O resultado ${medida}m= ${medida * 1000}mm`);
} else if (unidade === "b") {
  alert(`O resultado: ${medida}m= ${medida * 100}cm`);
} else if (unidade === "c") {
  alert(`O resultado ${medida}m= ${medida * 10}dm`);
} else if (unidade === "d") {
  alert(`O resultado: ${medida}m= ${medida * 0.1}dam`);
} else if (unidade === "e") {
  alert(`Resultado: ${medida}m= ${medida * 0.01}hm`);
} else if (unidade === "f") {
  alert(`Resultado: ${medida}m= ${medida * 0.001}km`);
} else {
  alert(`Opcão inválida!`);
}
