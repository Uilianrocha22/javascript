let baralho = [];
let opçoes = "";

while (opçoes !== "3") {
  //   let cartas = "";
  // //   for (let i = 0; i < baralho.length; i++) {
  // //     cartas += `${i + 1}°- ${baralho[i]}\n`;
  //  }

  opçoes = prompt(
    `Cartas no baralho: ${baralho.length}\n
Escolha uma opção:
1. Adicionar uma carta
2. Puxar uma carta 
3. Encerrar`
  );

  switch (opçoes) {
    case "1":
      let AdicionarCarta = prompt(`Qual é a carta?`);
      baralho.unshift(AdicionarCarta);
      break;
    case "2":
      let puxarCarta = baralho.shift();
      if (puxarCarta) {
        alert(`Você puxou: ${puxarCarta}`);
      } else {
        alert(`Não há cartas no baralho!`);
      }
      break;
    case "3":
      alert(`Encerrando...`);
      break;
    default:
      alert(`opção invalida!`);
  }
}
