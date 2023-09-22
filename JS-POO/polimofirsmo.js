// class Vehicle {
//   move() {
//     console.log(`O veiculo está se movendo.`);
//   }
// }

// class Car extends Vehicle {
//   move() {
//     console.log(`O carro está se movendo.`);
//   }
// }

// class Ship extends Vehicle {
//   move() {
//     console.log(`O navio está se navegando.`);
//   }
// }

// class Aircraft extends Vehicle {
//   move(speed) {
//     console.log(`A aeronave está se voando a ${speed}km/h.`);
//   }
// }

// const fusca = new Car();
// const submarino = new Ship();
// const jato = new Aircraft();

// fusca.move();
// submarino.move();
// jato.move(80);

// function start(vehicle) {
//   console.log(`Iniciando um veiculo...`);
//   vehicle.move();
// }

// start(fusca);
// start(submarino);
// start(jato);

class Esporte {
  move() {
    console.log(`Meu esporte preferido...`);
  }
}

class Futeboll extends Esporte {
  move() {
    console.log(`Meu esporte preferido é Futebol`);
  }
}

class Basquete extends Esporte {
  move() {
    console.log(`Meu esporte preferido é Basquete`);
  }
}

class Boxe extends Esporte {
  move() {
    console.log(`Meu esporte preferido é Boxe`);
  }
}

const futebol = new Futeboll();
const basquete = new Basquete();
const boxe = new Boxe();

function esportes(sport, name) {
  console.log(`Qual seu esporte preferido ${name} ?`);
  sport.move();
}

esportes(futebol, "Uilian");
esportes(basquete, "Natalia");
esportes(boxe, "Carlos");
