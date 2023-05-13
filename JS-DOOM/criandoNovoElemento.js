function addInput() {
  const ul = document.getElementById(`inputs`);

  const newLi = document.createElement(`li`);
  newLi.innerText = `Palmeiras:  `;

  const newinput = document.createElement(`input`);
  newinput.type = `text`;
  newinput.name = `input`;

  ul.appendChild(newLi);
  newLi.appendChild(newinput);
}
