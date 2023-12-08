// escreva uma função que receba uma string contendo um nome completo e retorna uma string com todos os nomes, exceto o último nome do autor que é utilizado para identificação. A direção da biblioteca precisa que você crie um programa para converter o nome completo de um autor para um nome abreviado corretamente no formato utilizado na organização das publicações.

function quotation(fullName) {
  const names = fullName.toUpperCase().split(" ");
  let initials = "";

  for (let i = 0; i < names.length - 1; i++) {
    initials += ` ${names[i][0]}. `;
  }

  return `${names[names.length - 1]},${initials}`;
}

console.log(quotation(`uilian oliveira rocha`));
