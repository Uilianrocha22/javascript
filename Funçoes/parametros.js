function dobro(x) {
  alert(`O dobro de ${x} é ${x * 2}`);
}

// dobro(5);
// dobro(10);
//dobro();

function dizerOla(nome = "mundo") {
  alert(`ola ${nome}!`);
}
// dizerOla("Uilian Oliveira Rocha");
// dizerOla();

function soma(a, b, c) {
  alert(`resultado da soma é ${a + b * c}`);
}
// soma(10, 5, 5);
// soma(1, 5, 6);

function criarUsuario(nome, email, senha, sexo) {
  const usuario = {
    nome: nome,
    email: email,
    senha: senha,
    sexo: sexo,
  };
  console.log(usuario);
}
// criarUsuario("Uilian", "uilianoliveira126@gmail.com", "1234", "masculino");

// Funçaõ com muitos parametros
function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {
  alert(`
   nome: ${nome}
   telefone: ${telefone}
   endereço: ${endereco}
   aniversario: ${aniversario}
   email: ${email}
   senha: ${senha}
`);
}

muitosParametros(
  "Uilian Oliveira Rocha",
  "(11)98333-1546",
  "Rua sebastião justino da silva N°172",
  "19/05/1998",
  "uilianoliveira126@gmail.com",
  "1234"
);

// É aconselhavel quando a função tiver muitos parametros usar objeto como parmetro para o código ficar mais legível

function objetoComoParametros(usuario) {
  alert(`
 Nome: ${usuario.nome}
 Telefone: ${usuario.telefone}
 Endereço: ${usuario.endereco}
 Aniversario: ${usuario.aniversario}
 Email: ${usuario.email}
 Senha: ${usuario.senha}`);
}

const dadosDoUsuario = {
  nome: "Uilian Oliveira Rocha",
  telefone: "(11)98333-1546",
  endereco: "Rua sebastião justino da silva N°172",
  aniversario: "19/05/1998",
  email: "uilianoliveira126@gmail.com",
  senha: "********",
};

objetoComoParametros(dadosDoUsuario);
