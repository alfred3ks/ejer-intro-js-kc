/*
🎯 Ejercicio 1:
Crea un archivo ejercicio1.js que tenga un objeto con los siguientes campos: Nombre, apellidos, un array con los temas del bootcamp que ya conoces, si estás en busqueda activa con un boolean y un array de objetos el cual tenga un link a alguna red social con el nombre y link de la red social. (Con uno vale, Github por ejemplo, pero dentro de un array).

*/

const estudiante = {
  nombre: 'Alfredo',
  apellidos: 'Sánchez Hernández',
  modulosDelBootcamp: [
    'Pre-bootcamp',
    'Git y github',
    'Web101',
    'Fundamentos web',
    'Introducción a Javascript',
  ],
  busquedaDeEmpleo: true,
  redes: [
    {
      nombre: 'github',
      url: 'https://github.com/alfred3ks',
    },
    {
      nombre: 'linkedlin',
      url: 'https://www.linkedin.com/in/alfredo-sanchez75/',
    },
  ],
};
