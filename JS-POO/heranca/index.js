class Property {
  constructor(area, price) {
    this.area = area;
    this.price = price;
  }

  getPricePerSquareMeter() {
    return this.price / this.area;
  }
}

class House extends Property {}

const land = new Property(200, 50000);
const someHouse = new House(120, 200000);

console.log(land);
console.log(land.getPricePerSquareMeter());
console.log(someHouse);
console.log(someHouse.getPricePerSquareMeter());

console.log(someHouse instanceof House && someHouse instanceof Property);

class Apartment extends Property {
  constructor(area, price, number) {
    // this.area = area  Gera um Error
    // this.price = price  Gera um Error

    super(area, price);
    this.number = number;
  }

  getFloor() {
    return this.number.slice(0, -1);
  }
}

const Apt = new Apartment(50, 250000, "155");

console.log(Apt);
console.log(Apt.getFloor());
