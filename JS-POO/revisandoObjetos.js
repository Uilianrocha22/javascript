// const book = {
//   title: "Eragon",
//   pages: 468,
//   published: true,
//   inStock: 20,
//   tags: ["fantasy", "adventure", "medieval"],
//   author: {
//     name: "Cristopher paolini",
//   },
//   addOnStock(quantity) {
//     this.inStock += quantity;
//   },
// };

//-------------------------------------------
//Função construtora Método PascalCase = primeira letra maiúscula

function Book(title, pages, tags, author) {
  this.title = title;
  this.pages = pages;
  this.tags = tags;
  this.author = author;
  this.published = false;
  this.inStock = 0;

  this.addOnStock = function (quantity) {
    this.inStock += Number(quantity);
  };

  this.publish = function () {
    this.published = true;
  };

  this.save = function () {
    // salva no banco de dados
  };
}

const tags = ["fantasy", "adventure", "medieval"];
const author = {
  name: "Cristopher paolini",
};

const eragon = new Book("Eragon", 468, tags, author);

const drakarys = new Book("Drakarys", 900, tags, author);

eragon.publish();
eragon.addOnStock(50);
console.log(eragon);
console.log(drakarys);

// console.log({ book });
// console.log(book.inStock);
// book.addOnStock(50);
// console.log(book.inStock);
