let opçoes = "";

while (opçoes <= 4) {
  opçoes = Number(
    prompt(
      `informe o seu time do coração :\n
    1 -Palmeiras
    2 -corintians
    3 -São paulo
    4 -Santos
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
