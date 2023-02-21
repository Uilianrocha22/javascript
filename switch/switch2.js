let diaSemana = prompt(
  `Qual é o dia da semana?\n
 - domingo
 - segunda
 - terça
 - quarta
 - quinta
 - sexta
 - sábado
`
);
let agora = diaSemana;

/*
javascript lê nessa ordêm dias da semana:

0= domingo
1= segunda 
2= terça
3= quarta
4= quinta 
5= sexta 
6= sábado


var diaSemana = new Date() === "DATA"
var agora = diaSemana.getDay() === "DIA DA SEMANA"

*/

switch (agora) {
  case "domingo":
    console.log(`dia 0`);
    break;
  case "segunda":
    console.log(`dia 1`);
    break;
  case "terça":
    console.log(`dia 2`);
    break;
  case "quarta":
    console.log(`dia 3`);
    break;
  case "quinta":
    console.log(`dia 4`);
    break;
  case "sexta":
    console.log(`dia 5`);
    break;
  case "sábado":
    console.log(`dia 6`);
    break;
  default:
    alert(`(ERRO)Dia inválido`);
}
