// Calculadora de Propinas

function calcularPropina(){
  let factura = parseFloat(document.getElementById('factura').value);
  let porcPropina = parseFloat(document.getElementById('propina').value);
  let resultado = document.getElementById('resultado'); 

  const propina = new Intl.NumberFormat().format((factura * porcPropina) / 100);

  console.log(propina);
  resultado.textContent = `Propina: $${propina}`

}