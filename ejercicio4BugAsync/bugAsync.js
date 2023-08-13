/*
Resolución del bug:
Para resolver el problema de asincronismo lo he realizando con promesas. Tambien lo he realizado con Async Await.
*/

// Opción 1: Usando promesas:
const obtenerUsuario = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, nombre: 'John Doe' });
      } else {
        reject(`El usuario con el id ${id} no existe.`);
      }
    }, 2000);
  });
};

const usuario = obtenerUsuario(1)
  .then((usuario) => {
    console.log(usuario);
  })
  .catch((err) => {
    console.log(err);
  });

console.log(usuario);

// Opción B: Usando Async Await:
const obtenerData = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, nombre: 'John Doe' });
      } else {
        reject(`El usuario con el id ${id} no existe.`);
      }
    }, 2000);
  });
};

(async () => {
  try {
    const usuario = await obtenerData(1);
    console.log(usuario);
  } catch (err) {
    console.log(err);
  }
})();
