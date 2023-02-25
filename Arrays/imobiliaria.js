let imoveis = [];
let opçoes = "";
let quartos = "";
let banheiros = "";
let garagem = "";

while (opçoes !== "3") {
  //   let cartas = "";
  // //   for (let i = 0; i < baralho.length; i++) {
  // //     cartas += `${i + 1}°- ${baralho[i]}\n`;
  //  }

  opçoes = prompt(
    `Cadastrados de imoveis:\n
Escolha uma opção:
1. salvar novo imovel
2. imoveis cadastrados
3. Encerrar`
  );

  switch (opçoes) {
    case "1":
      alert(`preencha as informações a seguir:\n`);
      let nome = prompt(`Nome do proprietario`);
      quartos = prompt(`Quantidade de quartos`);
      banheiros = prompt(`Quantidade de banheiros`);
      garagem = prompt(`possui garagem`);
      imoveis.unshift(nome);
      break;
    case "2":
      let imoveisCadastrados = alert(`imoveis cadastrados:${imoveis.length}`);
      break;
    case "3":
      alert(`Encerrando...`);
      break;
    default:
      alert(`opção invalida!`);
  }
}
