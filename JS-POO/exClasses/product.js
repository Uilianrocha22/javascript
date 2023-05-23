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
    this.price -= discount;
  }
}
const celular = new Product("mi9", "xiaomi mi9 , 64gb , 2gb ram", 1850);
console.log(celular);

celular.addToStock(450);
celular.calculateDiscontAvista(100);

console.log(celular);
