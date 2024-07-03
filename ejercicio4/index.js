//Juego de Adivinanzas
let numAleatorio = Math.round(Math.random() * 10) + 1;
let intentos = 0;

function playGame() {
  let numUser = parseInt(document.getElementById("opcUser").value);
  let resultado = document.getElementById("resultado");
  intentos++;

  if (numUser === numAleatorio) {
    resultado.textContent = `¡FELICITACIONES ACERTASTE!, el número es: ${numAleatorio}`;
  }

  if (numUser > numAleatorio) {
    resultado.textContent = `Error, el número es muy alto. Intento ${intentos} de 3.`;
  }

  if (numUser < numAleatorio) {
    resultado.textContent = `Error, el número es muy bajo. Intento ${intentos} de 3.`;
  }

  if (intentos >= 3 && numUser !== numAleatorio) {
    resultado.textContent += ` Has perdido. El número era: ${numAleatorio}.`;
  }

  if (intentos > 3) {
    resultado.textContent += ` Has excedido el número de intentos.`;
  }
}

function reset() {
  numAleatorio = Math.floor(Math.random() * 10) + 1;
  intentos = 0;
  document.getElementById("opcUser").value = '';
  document.getElementById("resultado").textContent = '';
}


