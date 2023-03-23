function calcularMedia(a, b) {
  const media = (a + b) / 2;
  return media;
}

const resultado = calcularMedia(10, 2);

console.log(resultado);

//-------------------------------------------

function criarProduto(nome, preco, estoque) {
  const produto = {
    nome:,
    preco:,
    estoque: 1,
  };

  return produto;
}

const notbook = criarProduto("Notebook intel core i7 18gb", 3000, 5);
const mi9 = criarProduto("mi9 128gb 8ram", 1800, 100);
console.log(notbook);
console.log(mi9);
console.log(criarProduto("Notebook intel core i7 18gb", 3000, 5));

//-----------------------------------------------------

function areaRetangular(base, altura) {
  return base * altura;
}
console.log(areaRetangular(10, 10));

function areaQuadrada(lado) {
  return areaRetangular(lado, lado);
}
console.log(areaQuadrada(5));

//--------------------------------------------------

function ola() {
  let texto = "......";
  texto = "ola mundo";
  return texto;
  console.log(texto);
}
console.log(ola());

//-----------------------------------------------------

function maioridade(idade) {
  if (idade >= 18) {
    return "maior de idade";
  } else {
    return "menor de idade";
  }
}

console.log(maioridade(16));
console.log(maioridade(26));
