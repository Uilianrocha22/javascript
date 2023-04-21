let opçoes = "";

while (opçoes <= 4) {
  opçoes = Number(
    prompt(
      `informe o mascote do seu time :\n
    1 -Porco
    2 -Gavião
    3 -Bambi
    4 -Peixe
    5 -Encerrar
  `
    )
  );

  if (opçoes === 1) {
    alert(`seu time do coração é o Palmeiras`);
  } else if (opçoes === 2) {
    alert(`seu time do coração é o corinthians`);
  } else if (opçoes === 3) {
    alert(`seu time do coração é o são paulo`);
  } else if (opçoes === 4) {
    alert(`seu time do coração é o santos`);
  }
}

alert(`Encerrando...`);

// switch (menu) {
//   case 1:
//     alert(`Seu time do coração é o palmeiras`);
// }
