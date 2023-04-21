document.getElementById(`btn`).addEventListener(`click`, function () {
  let inicio = document.getElementById(`inicio`);
  let fim = document.getElementById(`fim`);
  let passos = document.getElementById(`passos`);
  let result = document.getElementById(`result`);

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passos.value.length == 0
  ) {
    result.innerHTML = `Impossível contar!`;
    alert(`[ERRO] Faltam dados!`);
  } else {
    result.innerHTML = `Contando: <br>`;
    let inicioConvertido = Number(inicio.value);
    let fimConvertido = Number(fim.value);
    let passosConvertido = Number(passos.value);
    let contador = inicioConvertido;

    if (passosConvertido <= 0) {
      alert(`Passo inválido! Considerando passo 1`);
      passosConvertido = 1;
    }

    if (inicioConvertido < fimConvertido) {
      // Contagem crescente

      while (contador < fimConvertido) {
        contador += passosConvertido;
        result.innerHTML += ` ${contador}\u{1F449}`;
      }
    } else {
      // Contagem decrescente

      while (contador > fimConvertido) {
        contador -= passosConvertido;
        result.innerHTML += ` ${contador}\u{1F449}`;
      }
    }

    result.innerHTML += `\u{1f3c1}`;
  }

  inicio.value = ``;
  fim.value = ``;
  passos.value = ``;
});
