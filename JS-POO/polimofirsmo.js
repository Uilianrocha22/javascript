class Vehicle {
  move() {
    console.log(`O veiculo está se movendo.`);
  }
}

class Car extends Vehicle {
  move() {
    console.log(`O carro está se movendo.`);
  }
}

class Ship extends Vehicle {
  move() {
    console.log(`O navio está se navegando.`);
  }
}

class Aircraft extends Vehicle {
  move(speed) {
    console.log(`A aeronave está se voando a ${speed}km/h.`);
  }
}

const fusca = new Car();
const submarino = new Ship();
const jato = new Aircraft();

fusca.move();
submarino.move();
jato.move(80);

function start(vehicle) {
  console.log(`Iniciando um veiculo...`);
  vehicle.move();
}

start(fusca);
start(submarino);
start(jato);
