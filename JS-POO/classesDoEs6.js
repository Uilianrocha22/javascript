class Book {
  constructor(title, pages) {
    this.title = title;
    this.pages = pages;
    this.published = false;
  }

  publish() {
    this.published = true;
  }
}

const eragon = new Book("Eragon", 400);
const drakarys = new Book("Drakarys", 500);

eragon.publish();

console.log(eragon);
console.log(drakarys);

console.log(eragon instanceof Book);
