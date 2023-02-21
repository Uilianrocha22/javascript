let numero = Number(
  prompt(` Bem vindo ao Robô da tabuada!\n informe um numero:`)
);
let resultado = "";
let tabuada = 1;

while (tabuada <= 20) {
  resultado += `${numero} x ${tabuada} = ${numero * tabuada} \n`;
  tabuada += 1;
}
alert(`A tabuada é:\n\n${resultado}`);
