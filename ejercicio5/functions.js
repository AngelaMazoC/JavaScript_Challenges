const guardarContacto = (db, contacto) => {
  db.setItem(contacto.nombre, JSON.stringify(contacto));
  window.location.reload();
};

const cargarContacto = (db, nombre) => {
  let contacto = db.getItem(nombre);
  return contacto ? JSON.parse(contacto) : null;
};

