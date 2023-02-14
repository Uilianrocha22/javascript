const primeiroNome = prompt("insira o seu primeiro nome !");
const sobrenome = prompt("insira o seu sobrenome !");
const campoDeEstudo = prompt("Qual é o seu campo de estudo ? ");
const anoDeNascimento = prompt("Qual seu ano de nascimento ?");

alert(
  "Recruta cadastrado com sucesso !\n" +
    ` \nNome completo: ${primeiroNome} ${sobrenome}` +
    ` \nFormação: ${campoDeEstudo}` +
    "\nIdade:" +
    " " +
    (2023 - anoDeNascimento)
);
