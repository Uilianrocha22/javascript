let opçoes = 0;

let dinheiro = 0;

let depositar = 0;

let sacar = 0;

dinheiro = Number(prompt(`qual a quantidade de dinheiro inicial?`));

while (opçoes < 3) {
  opçoes = Number(
    prompt(`Saldo disponível:  R$${dinheiro}\n
 1 -depositar
 2 -sacar
 3 -sair`)
  );

  if (opçoes === 1) {
    depositar = Number(prompt(`qual o valor a ser adicionado?`));
    dinheiro = dinheiro += depositar;
  } else if (opçoes === 2) {
    sacar = Number(prompt(`qual o valor a ser sacado?`));
    dinheiro = dinheiro -= sacar;
  }

  alert(`seu saldo é:  R$${dinheiro}`);
}
alert(`Encerrando...`);
