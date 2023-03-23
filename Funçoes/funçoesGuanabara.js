function parImpar(n) {
  if (n % 2 === 0) {
    return "Este numero é Par!";
  } else {
    return " Este numero é Impar!";
  }
}

let opcao = "";
while (opcao !== "2") {
  opcao = prompt(`Escolha um numero para saber se é (par) ou (impar):\n
  1. Escolher numero
  2. sair`);

  switch (opcao) {
    case "1":
      let numero = prompt(`qual numero?`);
      alert(`Resultado: ${parImpar(numero)}`);
      break;
    case "2":
      alert("saindo...");
      break;
    default:
      alert(`opção invalida...`);
      break;
  }
}
