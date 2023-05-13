const input = document.getElementById(`input`);

document.getElementById(`value`).addEventListener(`click`, function () {
  //sintaxe OPERADOR TERNARIO
  //input.value = input.value === `` ? `Uilian Oliveira Rocha` : ``;
  //------------------------------------------------------------------
  //sintaxe: IF E ELSE PADRÃO

  if (input.value === ``) {
    input.value = `Uilian Rocha`;
  } else {
    input.value = ``;
  }
  input.getAttribute(`value`);
});

document.getElementById(`type`).addEventListener(`click`, function () {
  input.type = input.type !== `date` ? `date` : `text`;
});

document.getElementById(`placeholder`).addEventListener(`click`, function () {
  input.placeholder = `nome completo :`;
});

document.getElementById(`disable`).addEventListener(`click`, function () {
  input.setAttribute(`disable`, !input.disabled);
});

document.getElementById(`data`).addEventListener(`click`, function () {
  const data = input.dataset.something;
  console.log(`O valor do atributo data-something é: ${data}`);
  input.dataset.something = `Algun outro valor!`;
  console.log(
    `O valor do atributo data-something agora é: ${input.dataset.something}`
  );
});
