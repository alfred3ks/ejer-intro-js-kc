/*
Resolución del bug:
En el ciclo for se estaba iterando para i <= numeros.length y por eso no arrojaba resultado ya el bucle se sale de la iteración.
He comprobado que podemos tener dos soluciones a priori una seria:

<= numeros.length - 1;
< numeros.length;

He optado por la segunda solución.

*/
const calcularPromedio = (numeros) => {
  let sumaTotal = 0;
  for (let i = 0; i < numeros.length; i++) {
    sumaTotal += numeros[i];
  }
  const promedio = sumaTotal / numeros.length;
  return promedio;
};
const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);
console.log(promedioNumeros);
