function imc(Weight, height) {
  return new Promise((resolve, reject) => {
    if (typeof Weight !== `number` || typeof height !== `number`) {
      reject(`Arguments must be of type number`);
    } else {
      resolve(Weight / (height * height));
    }
  });
}

function showImc(Weight, height) {
  imc(Weight, height)
    .then((resolve) => {
      console.log(`O resultado do imc é ${resolve}`);
      if (resolve < 18.5) console.log(`Situação: Magreza.`);
      else if (resolve < 25) console.log(`Situação: Normal.`);
      else if (resolve < 30) console.log(`Situação: Sobrepeso.`);
      else if (resolve < 40) console.log(`Situação: Obesidade.`);
      else console.log(`Situação: Obesidade grave.`);
    })
    .catch((reject) => {
      console.log(reject);
    });

  console.log(`Calculando IMC para peso ${Weight} e altura ${height}`);
}

showImc(200, "2000");
showImc(40, 1.68);
showImc(68, 1.68);
showImc(71, 1.68);
showImc(90, 1.68);
showImc(140, 1.68);
