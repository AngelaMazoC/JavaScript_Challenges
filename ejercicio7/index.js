// Validador de Dirección de Correo Electrónico

function validarEmail() {
  const email = document.querySelector('.email').value;
  const resultado = document.querySelector('.answer')
  const val = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if(val.test(email)){
    resultado.textContent = `El correo es válido: ${email}` 
  }else{
    alert('El correo es inválido ' + `${email}`)
  }
}





