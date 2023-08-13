/*
🎯 Ejercicio 3 Transformaciones:
Nuestro cliente tiene un array de datos y nos a pedido que saquemos la siguiente
información.
El listado de los desarrolladores que tengan como habilidad “JavaScript” y el listado de los proyectos en el que sus desarrolladores trabajan.

Y el resultado final es:
const desarrolladoresJavascript = [
{
  "id": 1,
  "nombre": "Juan",
  "habilidades": ["JavaScript", "HTML", "CSS"],
  "proyectos": [
      { "id": 1, "nombre": "Proyecto 1"},
      { "id": 2, "nombre": "Proyecto 2" }
    ]
  }
]

const nombresProyectos = ['Proyecto 1', 'Proyecto 2', 'Proyecto 3','Proyecto 4', 'Proyecto 5', 'Proyecto 6']

*/

const datos = [
  {
    id: 1,
    nombre: 'Juan',
    habilidades: ['JavaScript', 'HTML', 'CSS'],
    proyectos: [
      { id: 1, nombre: 'Proyecto 1' },
      { id: 2, nombre: 'Proyecto 2' },
    ],
  },
  {
    id: 2,
    nombre: 'María',
    habilidades: ['Python', 'SQL', 'Django'],
    proyectos: [
      { id: 3, nombre: 'Proyecto 3' },
      { id: 4, nombre: 'Proyecto 4' },
    ],
  },
  {
    id: 3,
    nombre: 'Pedro',
    habilidades: ['Java', 'Spring', 'Hibernate'],
    proyectos: [
      { id: 5, nombre: 'Proyecto 5' },
      { id: 6, nombre: 'Proyecto 6' },
    ],
  },
];

// 🎯 Devuelvo desarrollador con habilidades de JavaScript:
// Creo una función para buscar en el arreglo por tecnología:
const obtenerDevPorTecnologia = (tecnologia) => {
  return datos.filter((data) => {
    return data.habilidades.includes(tecnologia);
  });
};

// Meto el resultado de la busqueda en una variable:
const devPorTecnlogia = obtenerDevPorTecnologia('JavaScript');

// Devuelvo el valor en JSON:
const desarrolladoresJavascript = JSON.stringify(devPorTecnlogia);
console.log(desarrolladoresJavascript);

// 🎯 Devuelvo el listado de proyectos en que los desarrolladores trabajan:

// Opcion A: Mucho mas larga:
const obtenerProyectos = (data) => {
  const arr = [];
  for (let i = 0; i < data.length; i++) {
    let arrayProyectos = data[i].proyectos;
    for (let j = 0; j < arrayProyectos.length; j++) {
      arr.push(arrayProyectos[j]);
    }
  }
  return arr;
};

const arrProyectos = obtenerProyectos(datos);
const nombreProyectos2 = arrProyectos.map((proyecto) => {
  return proyecto.nombre;
});

console.log(nombreProyectos2);

// Opcion B: Mucho mas corta: Usando los metodos flatMap() y map()
const mostrarTodosLosProyectos = (data) => {
  return data.flatMap((dev) => {
    return dev.proyectos.map((proyecto) => {
      return proyecto.nombre;
    });
  });
};

const nombreProyectos = mostrarTodosLosProyectos(datos);
console.log(nombreProyectos);
