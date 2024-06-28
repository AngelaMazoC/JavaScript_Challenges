// Generador de Nombres de Usuario

var nombre = 'Angela'
var apellido = 'Mazo'

function generarNombre(nombre, apellido) {
  if (nombre.length < 3 || apellido.length <3) {
    console.log('El nombre y el apellido deben tener al menos tres caracteres.');
    return;
  }

  var nomPart = nombre.substring(0, 3);
  var apePart = apellido.substring(0, 3);
  var numAle = Math.round(Math.random()*100);

  var nomUsuario = nomPart + apePart + numAle

  console.log(nomUsuario);
  console.log(nombre + ' ' + apellido);
}

generarNombre(nombre, apellido)


