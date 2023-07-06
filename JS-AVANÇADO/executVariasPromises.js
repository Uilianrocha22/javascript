function asyncSum(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== `number` || typeof b !== `number`) {
      reject(`arguments must be of type number`);
    } else {
      resolve(a + b);
    }
  });
}

function asyncSubtract(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== `number` || typeof b !== `number`) {
      reject(`arguments must be of type number`);
    } else {
      resolve(a - b);
    }
  });
}

const sumResult = asyncSum(50, 33);
const subtractResult = asyncSubtract(50, 33);

Promise.all([sumResult, subtractResult])
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });

//------------------------------------------------
// Um outro exemplo interresante onde podemos utilizar o Promise.All() é quando trabalhamos com função assincronas em um .Map(), que retorna um array.

const numbers = [4, 9, 5, 10, 77];

function asyncSquare(num) {
  return new Promise((resolve, reject) => {
    if (typeof num !== `number`) {
      reject(`arguments must be of type number`);
    } else {
      resolve(num * num);
    }
  });
}

Promise.all(numbers.map((number) => asyncSquare(number)))
  .then((squares) => {
    console.log(squares);
  })
  .catch((err) => {
    console.log(err);
  });
