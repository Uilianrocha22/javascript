console.log("Programa iniciado!");

let seconds = 0;

const intervalId = setInterval(() => {
  seconds += 3;
  console.log(` ${seconds} segundos se passaran desde o inicio do programa.`);
  if (seconds > 10) {
    clearInterval(intervalId);
    console.log(`Tempo esgotado, encerrando programa...`);
  }
}, 1000 * 3);
