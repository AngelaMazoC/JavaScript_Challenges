// Cifrado César

function cifrar() {
  const key = 3; //Desplazamiento fijo
  const text = document.getElementById('textoCifrar').value;
  let codes = []; //Array para almacenar los códigos cifrados

  for (let i = 0; i < text.length; i++) { //Recorrer cada carácter del texto
    let charCode = text.charCodeAt(i); //Obtener el código ASCII del carácter actual
    if (charCode >= 65 && charCode <= 90) { // Verificar si el carácter es una letra mayúscula A-Z
      charCode = ((charCode - 65 + key) % 26) + 65; // Aplicar desplazamiento y ajustar dentro del rango de letras mayúsculas
    } else if (charCode >= 97 && charCode <= 122) { // Verificar si el carácter es una letra minúscula a-z
      charCode = ((charCode - 97 + key) % 26) + 97; // Aplicar desplazamiento y ajustar dentro del rango de letras minúsculas
    }
    codes.push(charCode); // Añadir el código de carácter cifrado al array
  }

  let textCifrado = String.fromCharCode(...codes); // Convertir los códigos de caracteres cifrados a una cadena de texto
  document.getElementById('resultado').textContent = `Mensaje cifrado: ${textCifrado}`; // Mostrar el texto cifrado en el elemento de resultado
  return textCifrado;
}

function descifrar() {
  const key = 3;
  const text = document.getElementById('textoDesCifrar').value;
  let codes = [];

  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) { // A-Z
      charCode = ((charCode - 65 - key + 26) % 26) + 65;
    } else if (charCode >= 97 && charCode <= 122) { // a-z
      charCode = ((charCode - 97 - key + 26) % 26) + 97;
    }
    codes.push(charCode);
  }

  let textDescifrado = String.fromCharCode(...codes);
  document.getElementById('resultado').textContent = `Mensaje descifrado: ${textDescifrado}`;
  return textDescifrado;
}
