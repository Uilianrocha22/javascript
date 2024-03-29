function calcularAreaTriangulo() {
  let base = Number(prompt(`Informe a base do triangulo:`));
  let altura = Number(prompt(`Informe a altura do triangulo:`));
  return (base * altura) / 2;
}

function calcularAreaRetangulo() {
  let base = Number(prompt(`Informe a base do Retângulo:`));
  let altura = Number(prompt(`Informe a altura do Retângulo:`));
  return base * altura;
}

function calcularAreaQuadrado() {
  let lado = Number(prompt(`Informe o lado do quadrado:`));
  return lado * lado;
}

function calcularAreatrapezio() {
  let baseMaior = Number(prompt(`Informe a base maior do Trapézio:`));
  let baseMenor = Number(prompt(`Informe a base menor do Trapézio:`));
  let altura = Number(prompt(`Informe a altura do Trapézio:`));
  return ((baseMaior + baseMenor) * altura) / 2;
}

function calcularAreaCirculo() {
  let raio = Number(prompt(`Informe o raio do circulo:`));
  return 3.14 * raio * raio;
}

function calcularAreaLosango() {
  let diagonalMaior = Number(prompt(`Informe a diagonál maior do Losango:`));
  let diagonalMenor = Number(prompt(`Informe a diagonál menor do Losango:`));
  return (diagonalMaior * diagonalMenor) / 2;
}

let opçoes = "";

while (opçoes !== "7") {
  opçoes = prompt(
    `    Bem vindo(a) á Calculadora Geometrica!\n
        1. Calcular área do Triângulo
        2. Calcular área do Retângulo
        3. Calcular área do Quadrado
        4. Calcular área do Trapézio
        5. Calcular área do Círculo
        6. Calcular área do Losango
        7. sair
     `
  );

  switch (opçoes) {
    case "1":
      alert(`Resultado: ${calcularAreaTriangulo()}`);
      break;
    case "2":
      alert(`Resultado: ${calcularAreaRetangulo()}`);
      break;
    case "3":
      alert(`Resultado: ${calcularAreaQuadrado()}`);
      break;
    case "4":
      alert(`Resultado: ${calcularAreatrapezio()}`);
      break;
    case "5":
      alert(`Resultado: ${calcularAreaCirculo()}`);
      break;
    case "6":
      alert(`Resultado: ${calcularAreaLosango()}`);
      break;
    case "7":
      alert(`Saindo...`);
      break;
    default:
      alert(`Opção invalida...`);
      break;
  }
}
