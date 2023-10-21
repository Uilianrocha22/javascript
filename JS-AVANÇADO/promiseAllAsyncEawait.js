function waitFor(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

const numbers = [2, 4, 6, 8, 10];

async function execute() {
  console.time("tempo");

  const squares = await Promise.all(
    numbers.map(async (number) => {
      await waitFor(2);
      return Promise.resolve(number * number);
    })
  );

  console.log(squares);

  console.timeEnd("tempo");
}

execute();
