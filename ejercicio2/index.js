// Conversor de temperaturas
const resultado = document.querySelector('#resultado');
const tempInput = document.querySelector('#temp');
const btnConvertir = document.querySelector('#convertir');
const tempSelect = document.querySelector('#temp-tipo');

window.addEventListener('load', () => {
  tempInput.value = "";
  resultado.innerHTML = "";
})

btnConvertir.addEventListener('click', (e) => {
  e.preventDefault();
  convertirTemperatura()
})

function convertirTemperatura() {
  const inputValue = parseFloat(tempInput.value);

  if (isNaN(inputValue)) {
    resultado.innerHTML = "Por favor, ingrese un número válido";
    return;
  }

  if (tempSelect.value === 'Fahrenheit') {
    const fahrenheitCelcius = (inputValue - 32) * 5 / 9;
    resultado.innerHTML = `${fahrenheitCelcius.toFixed(2)} °C`;
  } else if (tempSelect.value === 'Celsius') {
    const celsiusFahrenheit = (inputValue * 9 / 5) + 32;
    resultado.innerHTML = `${celsiusFahrenheit.toFixed(2)} °F`;
  }
}