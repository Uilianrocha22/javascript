const boardRegions = document.querySelectorAll(`#gameBoard div`);
let vBoard = [];
let turnPlayer = "";

function updateTitle() {
  const playerInput = document.getElementById(turnPlayer);
  document.getElementById("turnPlayer").innerText = playerInput.value;
}

function initializeGame() {
  vBoard = [
    [``, ``, ``],
    [``, ``, ``],
    [``, ``, ``],
  ];
  turnPlayer = `player1`;
  document.querySelector(
    `h2`
  ).innerHTML = `Vez de: <span id="turnPlayer"></span>`;
  updateTitle();
  boardRegions.forEach(function (element) {
    element.classList.remove(`win`);
    element.innerText = "";
    element.classList.add(`cursor-pointer`);
    element.addEventListener(`click`, handleBoardClick);
  });
}

function getWinRegions() {
  const winRegions = [];
  if (
    vBoard[0][0] !== "" &&
    vBoard[0][0] === vBoard[0][1] &&
    vBoard[0][0] === vBoard[0][2]
  )
    winRegions.push("0.0", "0.1", "0.2");

  if (
    vBoard[1][0] !== "" &&
    vBoard[1][0] === vBoard[1][1] &&
    vBoard[1][0] === vBoard[1][2]
  )
    winRegions.push("1.0", "1.1", "1.2");

  if (
    vBoard[2][0] !== "" &&
    vBoard[2][0] === vBoard[2][1] &&
    vBoard[2][0] === vBoard[2][2]
  )
    winRegions.push("2.0", "2.1", "2.2");

  if (
    vBoard[0][0] !== "" &&
    vBoard[0][0] === vBoard[1][0] &&
    vBoard[0][0] === vBoard[2][0]
  )
    winRegions.push("0.0", "1.0", "2.0");

  if (
    vBoard[0][1] !== "" &&
    vBoard[0][1] === vBoard[1][1] &&
    vBoard[0][1] === vBoard[2][1]
  )
    winRegions.push("0.1", "1.1", "2.1");

  if (
    vBoard[0][2] !== "" &&
    vBoard[0][2] === vBoard[1][2] &&
    vBoard[0][2] === vBoard[2][2]
  )
    winRegions.push("0.2", "1.2", "2.2");

  if (
    vBoard[0][0] !== "" &&
    vBoard[0][0] === vBoard[1][1] &&
    vBoard[0][0] === vBoard[2][2]
  )
    winRegions.push("0.0", "1.1", "2.2");

  if (
    vBoard[0][2] !== "" &&
    vBoard[0][2] === vBoard[1][1] &&
    vBoard[0][2] === vBoard[2][0]
  )
    winRegions.push("0.2", "1.1", "2.0");

  return winRegions;
}

function disableRegion(element) {
  element.classList.remove(`cursor-pointer`);
  element.removeEventListener(`click`, handleBoardClick);
}

function handleWin(regions) {
  regions.forEach(function (region) {
    document
      .querySelector(`[data-region="` + region + `"]`)
      .classList.add(`win`);
  });
  const playerName = document.getElementById(turnPlayer).value;
  document.querySelector(`h2`).innerText = `${playerName} Venceu!`;
}

function handleBoardClick(event) {
  const div = event.currentTarget;
  const region = div.dataset.region; //N.N
  const rowColumnPair = region.split(`.`); //["N", "N"]
  const row = rowColumnPair[0];
  const column = rowColumnPair[1];

  if (turnPlayer === `player1`) {
    div.innerText = `x`;
    vBoard[row][column] = `x`;
  } else {
    div.innerText = `o`;
    vBoard[row][column] = `o`;
  }
  console.clear();
  console.table(vBoard);
  disableRegion(div);

  const winRegions = getWinRegions();
  if (winRegions.length > 0) {
    handleWin(winRegions);
  } else if (vBoard.flat().includes("")) {
    turnPlayer = turnPlayer === "player1" ? "player2" : "player1";
    updateTitle();
  } else {
    document.querySelector(`h2`).innerHTML = "Empate!";
  }
}

document.getElementById(`start`).addEventListener(`click`, initializeGame);
