const veiculo1 = prompt("insira o nome de um veiculo :");

const velocidade1 = Number(prompt("qual a velocidade do veiculo:"));

const veiculo2 = prompt("insira o nome de outro veiculo:");

const velocidade2 = Number(prompt("qual a sua velocidade :"));

if (velocidade1 > velocidade2) {
  alert(`o ${veiculo1} é mais rapido que o ${veiculo2}`);
} else if (velocidade1 < velocidade2) {
  alert(`o ${veiculo2} é mais rapido que o ${veiculo1}`);
} else {
  alert(`os dois veiculos tem a mesma velocidade`);
}
