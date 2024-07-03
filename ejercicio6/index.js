// Simulador de Lanzamiento de Dados
function lanzar(){
  const dado1 = Math.floor(Math.random()*6) + 1 ;
  const dado2 = Math.floor(Math.random()*6) + 1 ;

  let suma = dado1 + dado2

  let msj = `Dado 1: ${dado1} <br> 
  Dado 2: ${dado2} 
  <br> Suma: ${suma}`;

  document.getElementById('resultado').innerHTML = msj;
}




