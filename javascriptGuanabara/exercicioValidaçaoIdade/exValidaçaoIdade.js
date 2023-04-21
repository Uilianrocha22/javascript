function verificador() {
  let data = new Date();
  let ano = data.getFullYear();
  let fAno = document.getElementById(`txtano`);
  let result = document.getElementById(`result`);

  if (fAno.value.length == 0 || Number(fAno.value) > ano) {
    alert(`[ERRO] verifique os dados e tente novamente!`);
  } else {
    let generoMas = document.getElementById(`masculino`);
    let generoFem = document.getElementById(`feminino`);
    let idade = ano - Number(fAno.value);
    let genero = "";
    let img = document.createElement(`img`);
    img.setAttribute(`id`, `foto`);

    if (generoMas.checked) {
      genero = `Masculino`;

      if (idade >= 0 && idade < 10) {
        // criança
        img.setAttribute(`src`, `bebe-homen.jpg`);
      } else if (idade >= 10 && idade < 21) {
        //jovem
        img.setAttribute(`src`, `homen-jovem.jpg`);
      } else if (idade >= 21 && idade < 50) {
        //adulto
        img.setAttribute(`src`, `homen-adulto.jpg`);
      } else {
        //idoso
        img.setAttribute(`src`, `homen-idoso.jpg`);
      }
    } else if (generoFem.checked) {
      genero = `Feminino`;
      if (idade >= 0 && idade < 10) {
        // criança
        img.setAttribute(`src`, `bebe-mulher.jpg`);
      } else if (idade >= 10 && idade < 21) {
        //jovem
        img.setAttribute(`src`, `mulher-jovem.jpg`);
      } else if (idade >= 21 && idade < 50) {
        //adulto
        img.setAttribute(`src`, `mulher-adulta.jpg`);
      } else {
        //idoso
        img.setAttribute(`src`, `mulher-idosa.jpg`);
      }
    }
    result.style.textAlign = `center`;
    result.innerHTML = `<div> Genero ${genero} Idade ${idade} </div>`;
    result.append(img);
  }
}
