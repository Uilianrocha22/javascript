function execute() {
  return new Promise((resolve, reject) => {
    console.log(`A promisse está sendo executada. `);
    setTimeout(() => {
      if (true) {
        reject(`ERROR.`);
      } else {
        console.log(`Resolvendo a promisse...`);
        resolve(`50.`);
      }
    }, 1000 * 1);
  });
}

execute()
  .then((resolve) => {
    console.log(` A promise foi resolvida o resultado é ${resolve}`);
  })
  .catch((reject) => {
    console.log(`A promisse foi rejeitada motivo: ${reject}`);
  })
  .finally(() => {
    console.log(`A promise foi finalizada.`);
  });
