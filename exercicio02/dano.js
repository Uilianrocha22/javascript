const atacante = prompt("insira o nome de um personagem para ataque :");
const poderDeAtaque = Number(
  prompt("insira o poder de ataque do personagem :")
);

const defensor = prompt("insira o nome de outro personagem para defesa :");
let pontosDeVida = Number(prompt("quantidade de vida do personagem:"));
const poderDeDefesa = Number(prompt("insira o seu poder de defesa:"));
const possuiEscudo = prompt("o personagem possui escudo? (sim/não)");

let danoCausado = 0;

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "não") {
  danoCausado = poderDeAtaque - poderDeDefesa;
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "sim") {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2;
}

pontosDeVida -= danoCausado;

alert(`resultado do daano : ${atacante} causou ${danoCausado} no ${defensor}`);
alert(
  `atacante: ${atacante}` +
    `\npoder de ataque: ${poderDeAtaque}` +
    `\ndefensor: ${defensor}` +
    `\nvida: ${pontosDeVida}` +
    `\npoder de defesa: ${poderDeDefesa}` +
    `\nescudo: ${possuiEscudo}`
);
