function styleDark() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  document.body.style.textAlign = "center";
  document.body.style.fontSize = "30px";
  h1.innerText = "DARK";
}

function styleLight() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  document.body.style.textAlign = "center";
  document.body.style.fontSize = "30px";
  h1.innerText = "LIGHT";
}

document.getElementById(`themeDark`).addEventListener(`click`, function () {
  styleDark();
});

document.getElementById(`themeLight`).addEventListener(`click`, function () {
  styleLight();
});
