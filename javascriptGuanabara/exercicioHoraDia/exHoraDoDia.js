function carregar() {
  let msg = document.getElementById(`msg`);
  let img = document.getElementById(`imagem`);
  let data = new Date();
  let hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;

  if (hora >= 0 && hora <= 12) {
    //Bom DIA
    img.src = `fotomanha.jpg`;
    document.body.style.backgroundColor = "#D9B26A";
  } else if (hora >= 12 && hora <= 18) {
    //Boa tarde
    img.src = `fototarde.jpg`;
    document.body.style.backgroundColor = "#567D8C";
  } else {
    // Boa noite
    img.src = `fotonoite.jpg`;
    document.body.style.backgroundColor = "#011126";
  }
}
