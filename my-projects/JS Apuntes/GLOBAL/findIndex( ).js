// APUNTE: Cómo usar findIndex() en JavaScript para encontrar la posición de un elemento en un array

/*
El método `findIndex()` en JavaScript se utiliza para encontrar el **índice** del primer elemento en un array 
que cumpla con una condición especificada en la función de callback. A diferencia de `.find()`, que devuelve 
el elemento en sí, `.findIndex()` devuelve su posición (índice). Si no encuentra ningún elemento que cumpla 
con la condición, devuelve `-1`.

### Sintaxis:
array.findIndex(funcionCallback);

El callback de `.findIndex()` puede aceptar hasta tres parámetros:
1. **`elemento`**: El elemento actual que está siendo evaluado.
2. **`índice`**: El índice del elemento en el array.
3. **`array`**: El array completo en el que se está buscando.

Este método es útil cuando necesitas trabajar con la posición de un elemento en lugar del elemento mismo.

### Ejemplos prácticos:
*/

// 1. Encontrar el índice de un elemento basado en una condición simple

// Ejemplo 1: Encontrar el índice del primer número mayor que 50 en un array de precios
const precios = [25, 30, 75, 60, 40];
const indiceMayorQueCincuenta = precios.findIndex(precio => precio > 50);
console.log(indiceMayorQueCincuenta);  // Resultado: 2 (la posición de 75)

// Ejemplo 2: Buscar el índice del primer nombre que comience con "A" en una lista de usuarios
const usuarios = ['Carlos', 'Ana', 'Luis', 'Andrea'];
const indiceNombreConA = usuarios.findIndex(nombre => nombre.startsWith('A'));
console.log(indiceNombreConA);  // Resultado: 1 (la posición de 'Ana')

// Ejemplo 3: Encontrar el índice del primer número impar en un array de números
const numeros = [2, 4, 6, 7, 10, 12];
const indiceImpar = numeros.findIndex(num => num % 2 !== 0);
console.log(indiceImpar);  // Resultado: 3 (la posición de 7)


// 2. Usar dos parámetros (elemento, índice) para buscar el índice de un elemento específico

// Ejemplo 1: Encontrar el índice del primer producto con stock menor a 5
const inventario = [
  { nombre: 'Teclado', stock: 10 },
  { nombre: 'Ratón', stock: 3 },
  { nombre: 'Monitor', stock: 7 }
];

const indiceProductoConBajoStock = inventario.findIndex((producto, indice) => {
  console.log(`Verificando producto en el índice: ${indice}`);
  return producto.stock < 5;
});
console.log(indiceProductoConBajoStock);  // Resultado: 1 (la posición de 'Ratón')

// Ejemplo 2: Buscar el índice del primer valor mayor que 100 e imprimir su índice
const valores = [50, 60, 120, 130, 80];
const indiceValorMayorQueCien = valores.findIndex((valor, indice) => {
  console.log(`Índice del valor evaluado: ${indice}`);
  return valor > 100;
});
console.log(indiceValorMayorQueCien);  // Resultado: 2


// 3. Usar tres parámetros (elemento, índice, array) para obtener el índice y trabajar con el array completo

// Ejemplo 1: Encontrar el índice del primer número negativo y mostrar el array completo
const temperaturas = [15, -5, 20, 10, -8];
const indiceTemperaturaNegativa = temperaturas.findIndex((temp, indice, array) => {
  console.log(`Array completo: ${array}`);
  return temp < 0;
});
console.log(`Índice de la primera temperatura negativa: ${indiceTemperaturaNegativa}`);  // Resultado: 1

// Ejemplo 2: Buscar el índice del primer proyecto completado y mostrar el array
const proyectos = [
  { nombre: 'App móvil', completado: false },
  { nombre: 'Sitio web', completado: true },
  { nombre: 'Sistema interno', completado: false }
];

const indiceProyectoCompletado = proyectos.findIndex((proyecto, indice, array) => {
  console.log(`Array de proyectos: ${JSON.stringify(array)}`);
  return proyecto.completado === true;
});
console.log(`Índice del primer proyecto completado: ${indiceProyectoCompletado}`);  // Resultado: 1


/*
### Conclusión:
- `.findIndex()` es útil para obtener la posición de un elemento que cumpla con una condición en un array.

- A diferencia de `.find()`, este método te da acceso al índice, lo que es útil si necesitas realizar operaciones 
basadas en la posición del elemento.

- Puedes usar hasta tres parámetros (elemento, índice, array) en la función callback, lo que te da flexibilidad para 
trabajar con los elementos, su posición y el array completo.

- Si el elemento no es encontrado, `.findIndex()` devuelve `-1`, lo que permite manejar el caso en el que no exista un 
elemento que cumpla con la condición.
*/
