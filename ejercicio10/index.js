// Validador de Tarjetas de Crédito

function validarTarjetaCredito() {
  const cardNumber = document.getElementById('cardNumber').value;
  const resultElement = document.getElementById('resultado');
  const numTarjeta = cardNumber.split('').map(Number);
  
  // algoritmo de Luhn
  let total = 0;

  for (let i = numTarjeta.length - 2; i >= 0; i -= 2) {
    let valorTemp = numTarjeta[i];
    valorTemp = valorTemp * 2;

    if (valorTemp > 9) {
      valorTemp = valorTemp % 10 + 1;
    }

    numTarjeta[i] = valorTemp;
  }

  for (let i = 0; i < numTarjeta.length; i++) {
    total += numTarjeta[i];
  }

  if (total % 10 === 0) {
    resultElement.textContent = 'El número de tarjeta de crédito es válido.';
    resultElement.style.color = 'green';
  } else {
    resultElement.textContent = 'El número de tarjeta de crédito no es válido.';
    resultElement.style.color = 'red';
  }
}


/*
function validarTarjeta() {
  const cardNumber = document.getElementById('cardNumber').value;
  const resultElement = document.getElementById('result');

  if (validarTarjetaCredito(cardNumber)) {
    resultElement.textContent = 'El número de tarjeta de crédito es válido.';
    resultElement.style.color = 'green';
  } else {
    resultElement.textContent = 'El número de tarjeta de crédito no es válido.';
    resultElement.style.color = 'red';
  }
}*/