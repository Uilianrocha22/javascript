class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }

  addToStock(quantity) {
    this.inStock += Number(quantity);
  }

  calculateDiscontAvista(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const celular = new Product("mi9", "xiaomi mi9 , 64gb , 2gb ram", 90);
console.log(celular);

celular.addToStock(99);

const priceDescount = celular.calculateDiscontAvista(50);

console.log(celular);
console.log(priceDescount);
console.log(celular.calculateDiscontAvista(10));
