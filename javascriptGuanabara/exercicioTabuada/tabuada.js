document.getElementById(`btnTabuada`).addEventListener(`click`, function () {
  let number = document.getElementById(`number`);
  let result = document.getElementById(`result`);

  if (number.value.length == 0) {
    alert(`Por favor, Digite um numero!`);
  } else {
    let numberConvertido = Number(number.value);
    let tabuada = 1;
    result.innerText = "";

    while (tabuada <= 10) {
      let item = document.createElement(`option`);
      item.innerText = `${numberConvertido} x ${tabuada} = ${
        numberConvertido * tabuada
      } \n`;
      tabuada++;
      result.appendChild(item);
    }

    number.value = "";
  }
});
