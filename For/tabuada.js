let numero = Number(
  prompt(` Bem vindo ao Robô da tabuada!\n informe um numero:`)
);

let tabuada = numero;

let resultado = `

${numero} x 1 = ${numero * 1}
${numero} x 2 = ${numero * 2}
${numero} x 3 = ${numero * 3}
${numero} x 4 = ${numero * 4}
${numero} x 5 = ${numero * 5}
${numero} x 6 = ${numero * 6}
${numero} x 7 = ${numero * 7}
${numero} x 8 = ${numero * 8}
${numero} x 9 = ${numero * 9}
${numero} x 10 = ${numero * 10}
${numero} x 11 = ${numero * 11}
${numero} x 12 = ${numero * 12}
${numero} x 13 = ${numero * 13}
${numero} x 14 = ${numero * 14}
${numero} x 15 = ${numero * 15}
${numero} x 16 = ${numero * 16}
${numero} x 17 = ${numero * 17}
${numero} x 18 = ${numero * 18}
${numero} x 19 = ${numero * 19}
${numero} x 20 = ${numero * 20}
`;

if (tabuada) {
  alert(
    `A tabuada é:
      ${resultado}`
  );
}
alert(`Encerrando...`);
