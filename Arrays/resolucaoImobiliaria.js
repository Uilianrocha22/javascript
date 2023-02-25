let imoveis = [];
let opçoes = "";

while (opçoes !== "3") {
  opçoes = prompt(
    `Bem vindo(a) ao Cadastrados de imóveis!:
   Total de imóveis : ${imoveis.length}\n
   Escolha uma opção :
   1. Novo imóvel
   2. Listar imóveis
   3. Encerrar`
  );

  switch (opçoes) {
    case "1":
      let imovel = {};
      imovel.proprietario = prompt(`Nome do proprietario do imóvel:`);
      imovel.quartos = prompt(`Quantos quartos possui o imóvel:`);
      imovel.banheiros = prompt(`Quantos banheiros possui o imóvel:`);
      imovel.garagem = prompt(`O imóvel Possui garagem? (sim/não)`);
      let confirmacao = confirm(`salvar este imóvel?\n
      -Proprietario: ${imovel.proprietario}
      -Quartos: ${imovel.quartos}
      -Banheiros: ${imovel.banheiros}
      -Possui garagem?: ${imovel.garagem}
      `);
      if (confirmacao) {
        imoveis.push(imovel);
        alert(`Imóvel salvo com sucesso!`);
      } else {
        alert(`Voltando ao menu!`);
      }
      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          `imóvel : ${i + 1}
            -Proprietario: ${imoveis[i].proprietario}
            -Quartos: ${imoveis[i].quartos}
            -Banheiros: ${imoveis[i].banheiros}
            -Possui garagem?: ${imoveis[i].garagem}
            `
        );
      }
      break;
    case "3":
      alert(`Encerrando...`);
      break;
    default:
      alert(`opção invalida!`);
  }
}
