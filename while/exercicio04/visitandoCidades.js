const turista = prompt("Eai turista , qual seu nome:");
let cidades = "";
let contagem = 0;

let resposta = prompt("Você visitou alguma cidade? (sim/não)");

while (resposta === "sim") {
  let cidade = prompt("qual o nome da cidade visistada?");

  // cidades = cidades + cidade
  cidades += `- ${cidade} \n`;

  contagem++;
  resposta = prompt("Você ja visitou outra cidade? (sim/não)");
}

alert(
  `Turista: ${turista}
Quantidade de cidades: ${contagem}
Cidades visitadas:
${cidades}`
);

//  alert(`${nome} visitou ${visitou} um total de ${cidade} cidades.`);
