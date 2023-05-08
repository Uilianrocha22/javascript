import calculate from "./calculate.js";

const input = document.getElementById(`input`);

const allowdKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

function handleButtonPress(ev) {
  const value = ev.currentTarget.dataset.value;
  input.value += value;
}

function clear() {
  input.value = "";
  input.focus();
}

function keydown(ev) {
  ev.preventDefault();

  if (allowdKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  if (ev.key === `Backspace`) {
    input.value = input.value.slice(0, -1);
  }

  if (ev.key === `Enter`) {
    calculate();
    input.value = "";
    input.focus();
  }
}

export { handleButtonPress, clear, keydown };
