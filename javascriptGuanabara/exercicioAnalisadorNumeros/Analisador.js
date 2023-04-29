let number = document.querySelector(`input#number`);
let lista = document.getElementById(`lista`);
let result = document.getElementById(`result`);
let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, array) {
  if (array.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

document.getElementById(`btnAdd`).addEventListener(`click`, function () {
  if (isNumero(number.value) && !inLista(number.value, valores)) {
    valores.push(Number(number.value));
    let item = document.createElement(`option`);
    item.innerText = `Valor ${number.value} adicionado. `;
    lista.appendChild(item);
    result.innerHTML = "";
  } else if (number.value == "") {
    alert(`[ERRO], Digite um número! `);
  } else {
    alert(`Valor invalido ou já encontrado na lista.`);
  }
  number.value = "";
  number.focus();
});

let finish = document
  .getElementById(`finish`)
  .addEventListener(`click`, function () {
    if (valores.length == 0) {
      alert(`Adicione valores antes de finalizar!`);
    } else {
      let total = valores.length;
      let maior = valores[0];
      let menor = valores[0];
      let soma = 0;
      let media = 0;

      for (let indice = 0; indice < valores.length; indice++) {
        soma += valores[indice];
        if (valores[indice] > maior) {
          maior = valores[indice];
        } else if (valores[indice] < menor) {
          menor = valores[indice];
        }
      }
      media += parseFloat(soma / total);

      result.innerHTML = "";
      result.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`;
      result.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
      result.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
      result.innerHTML += `<p>A soma dos valores informados é ${soma}.</p>`;
      result.innerHTML += `<p>A média dos valores informados é ${media}.</p>`;
    }
  });

let limpar = document
  .getElementById(`limpar`)
  .addEventListener(`click`, function () {
    result.innerHTML = "";
    lista.innerText = "";
    valores.length = 0;

    /* while (valores.length > 0) {
      valores.shift();
    } */
  });
console.log(valores);
