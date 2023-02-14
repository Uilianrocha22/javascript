const pokemon = prompt("Escolha um pokemon :\n1)\n2)\n3)\n4)");
const resultadoNumerico = Number(pokemon);

switch (resultadoNumerico) {
  case 1:
    alert("Parabéns, seu pokemon é o Bulbasaur");
    break;
  case 2:
    alert("Parabéns, seu pokemon é o Squirtle");
    break;
  case 3:
    alert("Parabéns, seu pokemon é o Charmander");
    break;
  case 4:
    alert("Parabéns, seu pokémon é o pikachu ");
    break;
  default:
    alert("Finalizando ...");
}
