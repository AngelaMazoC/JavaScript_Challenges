// Generador de Nombres de Usuario

function generarNombre(nombre, apellido) {
  var nombre = document.getElementById("name").value;
  var apellido = document.getElementById("last-name").value;

  if (nombre.length < 3 || apellido.length < 3) {
    console.log('El nombre y el apellido deben tener al menos tres caracteres.');
    document.getElementById('resultado').innerText = 'El nombre y el apellido deben tener al menos tres caracteres.';
    return;
  }

  var nomPart = nombre.substring(0, 3);
  var apePart = apellido.substring(0, 3);
  var numAle = Math.round(Math.random() * 100);

  var nomUsuario = nomPart + apePart + numAle

  document.getElementById('user').innerText = 'Nombre de usuario: ' + nombre + ' ' + apellido;
  document.getElementById('resultado').innerText = 'Nombre de usuario generado: ' + nomUsuario;
}




