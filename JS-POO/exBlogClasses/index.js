const Author = require("./author");

const jhon = new Author("Jhon wick");

const post = jhon.addPost(
  "Jhon wick 3",
  "Vivendo para matar, não por recompensa e sim por vingança."
);
post.addComment("Uilian Rocha", "Show de bola!");
post.addComment("Natalia Almeida", "Ótimo!");

console.log(jhon);
console.log(post);
