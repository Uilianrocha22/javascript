console.log("Programa iniciado!");

const timeoutID = setTimeout(() => {
  console.log("3 segundos se passaran desde que o programa foi iniciado.");
}, 1000 * 3); // esse número é em milesegundos por isso a multiplicação

clearTimeout(timeoutID); // === encerrar o timeout
