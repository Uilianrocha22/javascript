let area = document.getElementById(`area`);

area.addEventListener(`click`, function () {
  area.innerText = `Clicou!`;
  area.style.backgroundColor = "white";
  area.style.color = "green";
  area.style.border = "2px solid green";
});

area.addEventListener(`mouseenter`, function () {
  area.innerText = `Entrou!`;
  area.style.backgroundColor = `darkred`;
});

area.addEventListener(`mouseout`, function () {
  area.innerText = `Saiu!`;
  area.style.backgroundColor = `darkblue`;
});
