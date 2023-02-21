let nome = prompt(`Qual seu nome?`);
let contador = 1;

while (contador < 6) {
  alert(`${contador} passos`);
  contador++;

  if (contador == 5) {
    alert(`O ${nome} andou ${contador} passos`);

    break;
  }
}

// console.log(`Tudo bem?`);
