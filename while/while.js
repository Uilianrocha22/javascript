let velocidade = 80;

while (velocidade > 0) {
  alert(`o carro esta a ${velocidade}km/h`);
  velocidade -= 20;
  alert(`diminuindo 20 km/h`);

  if (velocidade === 0) {
    break;
  }
}

alert(`O carro parou`);
