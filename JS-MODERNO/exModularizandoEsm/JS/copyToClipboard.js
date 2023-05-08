export function copyToClipboard(ev) {
  const button = ev.currentTarget;
  const resultInput = document.getElementById(`result`);

  if (button.innertext === `Copy`) {
    button.innertext = `Copied!`;
    button.classList.add(`success`);
    navigator.clipboard.writeText(resultInput.value);
  } else {
    button.innertext = `Copy`;
    button.classList.remove(`success`);
  }
}
