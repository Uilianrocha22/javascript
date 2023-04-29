let imoveis = [];
let opçoes = "";

while (opçoes !== "3") {
  //   let cartas = "";
  // //   for (let i = 0; i < baralho.length; i++) {
  // //     cartas += `${i + 1}°- ${baralho[i]}\n`;
  //  }

  opçoes = prompt(
    `Cadastrados de imoveis: ${imoveis.length}\n
Escolha uma opção:
1. salvar novo imovel
2. imoveis cadastrados
3. Encerrar`
  );

  switch (opçoes) {
    case "1":
      alert(`preencha as informações a seguir:\n`);
      let nome = prompt(`Nome do proprietario`);
      let quartos = prompt(`Quantidade de quartos`);
      let banheiros = prompt(`Quantidade de banheiros`);
      let garagem = prompt(`possui garagem`);
      imoveis.unshift(nome);
      break;
    case "2":
      alert(`imoveis cadastrados: ${imoveis.length}
      nome: ${nome}
      quartos: ${quartos}
      banheiros: ${banheiros}
      garagem: ${garagem}`);

      break;
    case "3":
      alert(`Encerrando...`);
      break;
    default:
      alert(`opção invalida!`);
  }
}
