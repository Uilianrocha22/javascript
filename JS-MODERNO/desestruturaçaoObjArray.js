// Desestruturando um Objeto

const person = {
  name: "Uilian",
  profession: "vigilante",
  parents: ["Abilio", "Valdite"],
};

console.log(person);

const namePerson = person.name;
const { profession, parents } = person;

console.log(namePerson);
console.log(profession);
console.log(parents);

// Desestruturando um Array

const fatherAndMother = ["Abilio", "Valdite"];

const [pai, mãe] = fatherAndMother;

console.log(pai);
console.log(mãe);

// Desestruturando uma Function

function createUser({ name, profession, parents }) {
  // Gerador de número aleatório declarado no ID
  //                      |
  //                      V
  const ID = Math.floor(Math.random() * 999);
  return {
    ID,
    name,
    profession,
    parents,
  };
}

const fullName = createUser(person);
console.log(fullName);
