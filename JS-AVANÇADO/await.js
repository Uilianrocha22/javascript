async function asyncSum(a, b) {
  if (typeof a !== `number` || typeof b !== `number`) {
    return Promise.reject(`arguments sum must be of type number`);
  } else {
    return Promise.resolve(a + b);
  }
}

// function async padrão com .then() .........

// async function execute() {
//   asyncSum(50, 33).then((resolve) => {
//     console.log(resolve);
//   });
// }

// function async com await ....
async function execute() {
  try {
    const result = await asyncSum(50, 33);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

execute();
