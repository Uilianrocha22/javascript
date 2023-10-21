async function imc(Weight, height) {
  if (typeof Weight !== `number` || typeof height !== `number`) {
    return Promise.reject(`arguments must be of type number`);
  }
  return Promise.resolve(Weight / (height * height));
}

async function showImc(Weight, height) {
  try {
    console.log(`Calculando IMC para peso ${Weight} e altura ${height}`);

    const resultImc = await imc(Weight, height);

    if (resultImc < 18.5) console.log(`Situação ${resultImc}: Magreza.`);
    else if (resultImc < 25) console.log(`Situação ${resultImc}: Normal.`);
    else if (resultImc < 30) console.log(`Situação ${resultImc}: Sobrepeso.`);
    else if (resultImc < 40) console.log(`Situação ${resultImc}: Obesidade.`);
    else console.log(`Situação ${resultImc}: Obesidade grave.`);
  } catch (error) {
    console.log(error);
  }
}

showImc(200, "2 metros");
showImc(40, 1.68);
showImc(68, 1.68);
showImc(71, 1.68);
showImc(90, 1.68);
showImc(140, 1.68);
