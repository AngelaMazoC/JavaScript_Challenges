// Decodificador de mensajes secretos

function decodificar() {
  const msjCodificado = document.getElementById('textoCodificado').value;
  const palabras = msjCodificado.split(' ');
  
  const claves = {
    "gato": "agente",
    "rojo": "secreto",
    "hambre": "una misión"
  };

  const msjDecodificado = [];

  for (let i=0; i < palabras.length; i++){
    let palabra = palabras[i];
    if(claves[palabra]){
      msjDecodificado.push(claves[palabra]);
    }else{
      msjDecodificado.push(palabra);
    }
  }

  const textoDesCodificado = document.getElementById('textoDesCodificado');
  textoDesCodificado.textContent = msjDecodificado.join(' ');
}



