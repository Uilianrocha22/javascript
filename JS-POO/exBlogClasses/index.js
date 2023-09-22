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

//----------------------------------------------------------------

const jhon2 = new Author(`ashy ketyum`);

const post2 = jhon2.addPost(
  "mew two",
  "primeiro pokémon lendário criado em laboratório!"
);

post2.addComment("Uilian", "Top de mais!");

console.log(jhon2);
console.log(post2);
