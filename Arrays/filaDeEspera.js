let fila = [];
let opçoes = "";

while (opçoes !== "3") {
  let pacientes = "";

  for (let i = 0; i < fila.length; i++) {
    pacientes += `${i + 1}°- ${fila[i]}\n`;

    //i + 1 + "°- " + fila[i] + "\n";
  }

  opçoes = prompt(
    `Pacientes:
${pacientes}
Escolha uma opção:
1. novo paciente
2. consultar paciente 
3. sair`
  );

  switch (opçoes) {
    case "1":
      let novoPaciente = prompt(`Qual é o nome do paciente?`);
      fila.push(novoPaciente);
      break;
    case "2":
      let pacienteConsultado = fila.shift();
      if (pacienteConsultado) {
        alert(pacienteConsultado + " " + "foi removido da fila.");
      } else {
        alert(`Não há pacientes na fila!`);
      }

      break;
    case "3":
      alert(`Encerrando...`);
      break;
    default:
      alert(`opção invalida!`);
  }
  //   if (opçoes === "1") {
  //    let novoPaciente = prompt(`Qual é o nome do paciente?`);
  //    fila.push(novoPaciente);
  //  } else if (opçoes === "2") {
  //    const pacienteConsultado = fila.shift();
  //    alert(`${pacienteConsultado} foi atendido.`);
  //  } else if (opçoes === "3") {
  //    alert(`Encerrando...`);
  //  } else {
  //    alert(`opção invalida!`);
}
