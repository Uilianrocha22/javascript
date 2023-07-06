// momentos da promise :
// pendente - pending
// resolvida - resolved
// rejeitada - rejected

// const promise = new Promise((resolve, reject) => {
//   console.log(`A promisse está sendo executada. `);
//   setTimeout(() => {
//     console.log(`Resolvendo a promisse...`);
//     resolve(true);
//   }, 1000 * 1);
// });

// console.log(promise);

// setTimeout(() => {
//   console.log(promise);
// }, 1000 * 3);

function execute() {
  return new Promise((resolve, reject) => {
    console.log(`A promisse está sendo executada. `);
    setTimeout(() => {
      console.log(`Resolvendo a promisse...`);
      resolve(`Resultado.`);
    }, 1000 * 1);
  });
}

const p = execute();
console.log(p);

setTimeout(() => {
  console.log(p);
}, 1000 * 2);
