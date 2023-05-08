export default function calculate() {
  const resultInput = document.getElementById(`result`);
  const input = document.getElementById(`input`);
  if (input.value === "") {
    resultInput.value === "";
    input.focus();
  } else {
    resultInput.value = "ERROR";
    resultInput.classList.add(`error`);
    const result = eval(input.value);
    resultInput.value = result;
    resultInput.classList.remove(`error`);
    input.value = "";
    input.focus();
  }
}
