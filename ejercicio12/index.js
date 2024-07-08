// Inversor de palabras

function invertir() {
  const textOrg = document.getElementById('textoOrg').value;
  const texto = textOrg.split(' ');
  const textoInv = [];

  for (let i = 0; i < texto.length; i++) {
    textoInv.push(texto[i].split('').reverse().join(''));
  }

  const textoInvertido = document.getElementById('textoInv');
  textoInvertido.textContent = textoInv.join(' ');

}



