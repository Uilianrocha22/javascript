import calculate from "./calculate.js";
import { themeSwitcher } from "./themeSwitcher.js";
import { copyToClipboard } from "./copyToClipboard.js";
import { handleButtonPress, clear, keydown } from "./keyHandlers.js";

document.querySelectorAll(`.charKey`).forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener(`click`, handleButtonPress);
});
document.getElementById(`clear`).addEventListener(`click`, clear);
document.getElementById(`input`).addEventListener(`keydown`, keydown);
document.getElementById(`equal`).addEventListener(`click`, calculate);
document
  .getElementById(`copyToClipboard`)
  .addEventListener(`click`, copyToClipboard);
document
  .getElementById(`themeSwitcher`)
  .addEventListener(`click`, themeSwitcher);
