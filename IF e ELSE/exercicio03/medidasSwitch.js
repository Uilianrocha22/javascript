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

switch (unidade) {
  case "a":
    alert(`Resultado: ${medida}m= ${medida * 1000}mm`);
    break;
  case "b":
    alert(`resultado: ${medida}m= ${medida * 100}cm`);
    break;
  case "c":
    alert(`Resultado: ${medida}m= ${medida * 10}dm`);
    break;
  case "d":
    alert(`Resultado: ${medida}m= ${medida * 0.1}dam`);
    break;
  case "e":
    alert(`Resultado: ${medida}m= ${medida * 0.01}hm`);
    break;
  case "f":
    alert(`Resultado: ${medida}m= ${medida * 0.001}km`);
    break;
  default:
    alert(`Opcão inválida!`);
}
