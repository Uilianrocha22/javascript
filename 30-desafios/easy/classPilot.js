// Escreva uma classe que contenha um método para gerar uma licença de vôo e os seguintes atributos:

// - nome
// - sobrenome
// - data de nascimento
// - licença de voo (que deve iniciar sempre como falso)

// - Os primeiros 5 caracteres de sobrenome em letras maiúsculas(completando com 9 caso possua menos de cinco)
// - O 6° caractere é um traço (-)
// - O 7° caractere é o algarismo da década (penúltimo) do ano de nascimento
// - O 8° e 9° caracteres são o mês de nascimento
// - O 10° caractere é o algarismo do ano(ultimo) do ano de nascimento
// - O 11° caractere é um ponto (.)
// - O 12° caractere é a primeira letra do primeiro nome em (minúscula)

class Pilot {
  constructor(firstName, lastName, birthday, flightLicense = false) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(birthday);
    this.flightLicense = flightLicense;
  }

  generateFlightLicense() {
    let licence = "";

    for (let i = 0; i < 5; i++) {
      licence += this.lastName[i] ? this.lastName[i].toUpperCase() : "9";
    }

    licence += "-";
    licence += this.birthday.getFullYear().toString()[2];
    licence += this.generateGetMonth();
    licence += this.birthday.getFullYear().toString()[3];
    licence += ".";
    licence += this.firstName[0].toLowerCase();

    this.flightLicense = licence;
  }

  generateGetMonth() {
    if (this.birthday.getMonth() < 9) {
      return `0${this.birthday.getMonth() + 1}`;
    } else {
      return `${this.birthday.getMonth() + 1}`;
    }
  }
}

const pilot1 = new Pilot("uilian", "oliveira", "05-19-1998");
const pilot2 = new Pilot("natalia", "for", "10-08-2001");

pilot1.generateFlightLicense();
pilot2.generateFlightLicense();

console.log(pilot1);
console.log(pilot2);
