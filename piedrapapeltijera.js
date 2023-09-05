function jugar(eleccionUsuario) {
  const opciones = ["piedra", "papel", "tijeras"];
  const eleccionMaquina = opciones[Math.floor(Math.random() * 3)];

  const resultado = document.getElementById("resultado");

  if (eleccionUsuario === eleccionMaquina) {
    resultado.textContent = `¡Empate! Ambos eligieron ${eleccionUsuario}.`;
  } else if (
    (eleccionUsuario === "piedra" && eleccionMaquina === "tijeras") ||
    (eleccionUsuario === "papel" && eleccionMaquina === "piedra") ||
    (eleccionUsuario === "tijeras" && eleccionMaquina === "papel")
  ) {
    resultado.textContent = `¡Ganaste! ${eleccionUsuario} vence a ${eleccionMaquina}.`;
  } else {
    resultado.textContent = `¡Perdiste! ${eleccionMaquina} vence a ${eleccionUsuario}.`;
  }
}
