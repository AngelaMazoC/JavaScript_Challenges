// Calculadora de BMI (Índice de Masa Corporal)


document.getElementById('formulario').addEventListener('submit', e => {
  //e.preventDefault() evita que la pagina se recargue 
  e.preventDefault();
  calcularBmi()
})

function calcularBmi() {
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('estatura').value);

  //se valida que los valores de peso y altura sean números
  if (isNaN(peso) || isNaN(altura)) {
    alert("Por favor, introduce valores válidos para peso y estatura.");
    return;
  }

  const bmi = Math.round(peso / (altura * altura))

  if (bmi < 18.5) {
    alert("Tu IMC es de: " + bmi + " tienes Bajo peso")
  } else if (bmi >= 18.5 && bmi < 24.9) {
    alert("Tu IMC es de: " + bmi + " tienes Peso normal")
  } else if (bmi > 25 && bmi < 29.9) {
    alert("Tu IMC es de: " + bmi + " tienes Sobrepeso")
  } else {
    alert("Tu IMC es de: " + bmi + " tienes Obesidad")
  }
}





