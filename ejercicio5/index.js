// Agenda Telefónica
const nombre = document.querySelector('.name');
const numTel = document.querySelector('.phone');
const btnBuscar = document.querySelector('.btn-search');
const searchName = document.querySelector('.search-name');

const db = window.localStorage;

function agregarContacto() {
  let contacto = {
    nombre: nombre.value,
    telefono: numTel.value,
  };
  guardarContacto(db, contacto)
}

function buscarContacto() {
  let nombreBusqueda = searchName.value;
  let contacto = cargarContacto(db, nombreBusqueda);
  if (contacto) {
    let contc = document.querySelector('.name-contacts');
    let contcNumber = document.querySelector('.phone-contacts');

    contc.textContent = `Nombre: ${contacto.nombre}`;
    contcNumber.textContent = ` Teléfono: ${contacto.telefono}`;
  } else {
    alert("Contacto no encontrado");
  }
}

btnBuscar.addEventListener('click', buscarContacto);







