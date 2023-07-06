async function asyncSum(a, b) {
  return a + b;
}

async function asyncSubtract(a, b) {
  return a - b;
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

//-----------------------------------------

const numbers = [4, 9, 5, 10, 77];

async function asyncSquare(num) {
  return num * num;
}

Promise.all(numbers.map((number) => asyncSquare(number)))
  .then((squares) => {
    console.log(squares);
  })
  .catch((err) => {
    console.log(err);
  });
