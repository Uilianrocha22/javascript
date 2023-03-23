function addPlayer() {
  const name = document.getElementById(`name`).value;
  const number = document.getElementById(`number`).value;
  const position = document.getElementById(`position`).value;

  const confirmation = confirm(`Escalar ${name} como ${position}`);

  if (confirmation) {
    const teamlist = document.getElementById(`teamlist`);
    const playerItem = document.createElement(`li`);
    playerItem.id = `player- ${number}`;
    playerItem.innerText = `Nome: ${name}\n Numero: ${number}\n Posição: ${position}`;
    teamlist.appendChild(playerItem);
    teamlist.appendChild(document.createElement(`br`));

    document.getElementById(`name`).value = ``;
    document.getElementById(`number`).value = ``;
    document.getElementById(`position`).value = ``;
  } else {
    document.getElementById(`name`).value = ``;
    document.getElementById(`number`).value = ``;
    document.getElementById(`position`).value = ``;
  }
}

function removePlayer() {
  const number = document.getElementById(`numberToRemove`).value;
  const playerToRemove = document.getElementById(`player- ${number}`);

  const confirmation = confirm(`remover jogador:\n${playerToRemove.innerText}`);

  if (confirmation) {
    //removendo citando o elemento pai
    // document.getElementById(`teamlist`).removeChild(playerToRemove);
    //----------------------------------------------------------------

    // removendo passado o elemento a ser removido diretamente

    playerToRemove.remove();
    document.getElementById(`numberToRemove`).value = ``;
  }
}
