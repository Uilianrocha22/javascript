document.getElementById(`btnSomar`).addEventListener(`click`, function () {
  let num1 = document.getElementById(`num1`);
  let num2 = document.querySelector(`input#num2`);

  let n1 = Number(num1.value);
  let n2 = Number(num2.value);

  let soma = n1 + n2;
  let subtracao = n1 - n2;
  let divi = n1 / n2;

  let result = document.getElementById(`resultado`);
  let sub = document.getElementById(`sub`);
  let div = document.getElementById(`divi`);

  result.innerText = `A soma de ${n1} + ${n2} = ${soma}`;
  sub.innerText = `A subtraçaõ de ${n1} - ${n2} = ${subtracao}`;
  div.innerText = `A divisão de ${n1} % ${n2} = ${divi}`;

  num1.value = ``;
  num2.value = ``;
});
