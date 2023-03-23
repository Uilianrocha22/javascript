const vagasDisponiveis = [];

function listarVagas() {
  const vagasEmTexto = vagasDisponiveis.reduce(function (
    textoFinal,
    vaga,
    indice
  ) {
    textoFinal += `${indice + 1}.  `;
    textoFinal += `${vaga.nome}`;
    textoFinal += " ( " + vaga.candidatos.length + " candidatos)\n";
    return textoFinal;
  },
  "");
  alert(`${vagasEmTexto}`);
}

function novaVaga() {
  const nome = prompt(`Informe o nome da vaga?`);
  const descrissao = prompt(`Informe a descrissão da vaga:`);
  const dataLimite = prompt(
    `Informe uma data limite (dd/mm/aaaa) para a vaga:`
  );

  const confirmacao = confirm(`
        Deseja salvar esta vaga?\n
      -Nome da vaga: ${nome}
      -Descrissão: ${descrissao}
      -Data limite: ${dataLimite}
      `);

  if (confirmacao) {
    const novaVaga = { nome, descrissao, dataLimite, candidatos: [] };
    vagasDisponiveis.push(novaVaga);
    alert(`Vaga cadastrada com sucesso!`);
  } else {
    alert(` Voltando ao menu...`);
  }
}

function exibirVaga() {
  const indice = Number(prompt(`Informe o índice da vaga que dejesa exibir:`));
  if (indice >= vagasDisponiveis.length || indice < 0) {
    alert(`Índice invalido`);
    return;
  }
  const vaga = vagasDisponiveis[indice];

  const candidatoEmTexto = vaga.candidatos.reduce(function (
    textoFinal,
    candidato
  ) {
    return `${textoFinal} \n - ${candidato}`;
  },
  "");
  alert(`
  Vaga n°${indice + 1} \n
  Nome da vaga: ${vaga.nome}
  Descrissão: ${vaga.descrissao}
  Data limite: ${vaga.dataLimite}
  Quantidade de candidatos: ${vaga.candidatos.length}
  Candidatos inscritos: ${candidatoEmTexto}`);
}

function inscreverCandidato() {
  const candidato = prompt(`Informe o nome do(a) candidoto(a):`);
  const indice = prompt(
    `Informe o índice da vaga para qual o(a) candidato(a) dejesa se indcrever:`
  );
  const vaga = vagasDisponiveis[indice];

  const confirmacao = confirm(`
  Deseja inscrever o candidato ${candidato} na vaga ${indice}?\n
  Nome da vaga: ${vaga.nome}
  Descrissão: ${vaga.descrissao}
  Data limite: ${vaga.dataLimite}
`);

  if (confirmacao) {
    vaga.candidatos.push(candidato);
    alert(`Incrição realizada.`);
  }
}

function excluirVaga() {
  const indice = prompt(`Informe o índice da vaga que dejesa excluir:`);
  const vaga = vagasDisponiveis[indice];

  const confirmacao = confirm(`
  Tem certeza que dejesa excluir a vaga ${indice}?\n
  Nome da vaga: ${vaga.nome}
  Descrissão: ${vaga.descrissao}
  Data limite: ${vaga.dataLimite}
`);
  if (confirmacao) {
    vagasDisponiveis.splice(indice, 1);
    alert(`Vaga excluida.`);
  }
}

function exibirMenu() {
  return prompt(
    `    Cadastro de vagas de emprego:\n
    1. Listar vagas disponíveis
    2. Criar uma nova vaga
    3. Visualizar uma vaga
    4. Inscrever um candidato a uma vaga
    5. Excluir uma vaga
    6. Encerrar
    `
  );
}

let opçoes = "";

while (opçoes !== "6") {
  opçoes = exibirMenu();

  switch (opçoes) {
    case "1":
      listarVagas();
      break;
    case "2":
      novaVaga();
      break;
    case "3":
      exibirVaga();
      break;
    case "4":
      inscreverCandidato();
      break;
    case "5":
      excluirVaga();
      break;
    case "6":
      alert(`Encerrando...`);
      break;
    default:
      alert(`Opção invalida...`);
  }
}
