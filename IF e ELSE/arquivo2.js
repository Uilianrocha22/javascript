var velocidade = 75;
var idade = 19;

console.log(`A velocidade do seu carro é ${velocidade}km/h`);
if (velocidade > 60) {
  console.log(`Você ultapassou a velocidade permitida, MULTADO!`);
} else if (velocidade < 60) {
  console.log(`Você é um ótimo motorista!`);
}
if (idade < 18) {
  console.log(`você é menor de idade, MULTADO`);
} else if (velocidade > 18) {
  console.log(`você é maior de idade`);
}
console.log(`Dirija sempre usando cinto de segurança!`);
