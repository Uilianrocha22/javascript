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

function exibirMenu() {
  return prompt(
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
}

function executar() {
  let opçoes = "";

  while (opçoes !== "7") {
    opçoes = exibirMenu();

    let resultado = "";

    switch (opçoes) {
      case "1":
        resultado = calcularAreaTriangulo();
        break;
      case "2":
        resultado = calcularAreaRetangulo();
        break;
      case "3":
        resultado = calcularAreaQuadrado();
        break;
      case "4":
        resultado = calcularAreatrapezio();
        break;
      case "5":
        resultado = calcularAreaCirculo();
        break;
      case "6":
        resultado = calcularAreaLosango();
        break;
      case "7":
        alert(`Saindo...`);
        break;
      default:
        alert(`Opção invalida...`);
        break;
    }

    if (resultado) {
      alert(`Resultado: ${resultado}`);
    }
  }
}

executar();
