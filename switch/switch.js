const pokemon = prompt(
  "Escolha um pokemon, jovem treinador:\n \n1): Bulbasaur\n2): Squirtle\n3): Charmander\n4): Pikachu \n"
);
const treinador = Number(pokemon);

switch (treinador) {
  case 1:
    alert("Parabéns, seu companheiro de jornada é o Bulbasaur");
    break;
  case 2:
    alert("Parabéns, seu companheiro de jornada é o Squirtle");
    break;
  case 3:
    alert("Parabéns, seu companheiro de jornada é o Charmander");
    break;
  case 4:
    alert("Parabéns, seu companheiro de jornada é o pikachu ");
    break;
  default:
    alert("Finalizando ...");
}

alert("Boa sorte na sua jornada!");
