const form = document.getElementById(`orderForm`);

form.addEventListener(`submit`, function (event) {
  event.preventDefault();

  const name = document.querySelector(`input[name="name"]`).value;
  const address = document.querySelector(`input[name="address"]`).value;
  const breadType = document.querySelector(`select[name="breadType"]`).value;
  const main = document.querySelector(`input[name="main"]`).value;
  const observations = document.querySelector(
    `textarea[name="observations"]`
  ).value;

  let salad = "";

  document
    .querySelectorAll(`input[name="salad"]:checked`)
    .forEach(function (item) {
      salad += `- ${item.value} \n`;
    });

  alert(` 
Pedido realizado!\n
nome: ${name}
endereço: ${address}
tipo de pão: ${breadType}
complemento:\n ${salad}
`);

  console.log({
    name,
    address,
    breadType,
    main,
    observations,
  });
});
