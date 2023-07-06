function getAge(birthday) {
  return new Promise((resolve, reject) => {
    if (birthday) {
      const birthYear = new Date(birthday).getFullYear();
      const currentYear = new Date().getFullYear();
      resolve(currentYear - birthYear);
    } else {
      reject(new Error(`birthday is required`));
    }
  });
}

function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age) {
      resolve(age > 18);
    } else {
      reject(new Error(`age is required`));
    }
  });
}

getAge(`1998-05-19`)
  .then((age) => checkAge(age))
  .then((isOver18) => {
    if (isOver18) {
      console.log(`maior de idade`);
    } else {
      console.log(`menor de idade`);
    }
  })
  .catch((reject) => {
    console.log(reject.message);
  });
