// APUNTE: Cómo usar forEach() en JavaScript para recorrer arrays con uno, dos y tres parámetros

/*
.forEach() es un método que ejecuta una función para cada uno de los elementos de un array. 
A diferencia de otros métodos, como .map(), no devuelve un nuevo array; simplemente ejecuta 
una operación sobre cada elemento del array.

Sintaxis:
array.forEach(funcionCallback);

funcionCallback:
- Recibe 3 parámetros (opcional):
  1. `elemento`: El elemento actual del array.
  2. `índice`: El índice del elemento actual (opcional).
  3. `array`: El array completo (opcional).
*/

// 1. Usar un solo parámetro: el elemento actual
// Ejemplo práctico: enviar notificaciones a los usuarios
const usuarios = ['Carlos', 'Ana', 'Luis'];
usuarios.forEach(usuario => {
  console.log(`Enviando notificación a ${usuario}`);
});
// Resultado:
// Enviando notificación a Carlos
// Enviando notificación a Ana
// Enviando notificación a Luis

// 2. Usar dos parámetros: el elemento y el índice
// Ejemplo práctico: recorrer una lista de tareas y marcarlas como completadas, numerando las tareas
const tareas = ['Hacer café', 'Escribir código', 'Leer correos'];
tareas.forEach((tarea, index) => {
  console.log(`Tarea ${index + 1}: ${tarea} - Completada`);
});
// Resultado:
// Tarea 1: Hacer café - Completada
// Tarea 2: Escribir código - Completada
// Tarea 3: Leer correos - Completada

// 3. Usar tres parámetros: el elemento, el índice y el array completo
// Ejemplo práctico: actualizar el stock de productos y luego verificar el array modificado
const productos = [
  { nombre: 'Laptop', stock: 5 },
  { nombre: 'Teclado', stock: 3 },
  { nombre: 'Ratón', stock: 7 }
];

productos.forEach((producto, index, array) => {
  producto.stock -= 1; // Restamos una unidad a cada producto
  console.log(`Producto ${index + 1}: ${producto.nombre}, Stock actual: ${producto.stock}`);
  console.log('Array actual:', array); // Mostrar el array completo después de cada iteración
});
/*
Resultado:
Producto 1: Laptop, Stock actual: 4
Array actual: [{ nombre: 'Laptop', stock: 4 }, { nombre: 'Teclado', stock: 3 }, { nombre: 'Ratón', stock: 7 }]
Producto 2: Teclado, Stock actual: 2
Array actual: [{ nombre: 'Laptop', stock: 4 }, { nombre: 'Teclado', stock: 2 }, { nombre: 'Ratón', stock: 7 }]
Producto 3: Ratón, Stock actual: 6
Array actual: [{ nombre: 'Laptop', stock: 4 }, { nombre: 'Teclado', stock: 2 }, { nombre: 'Ratón', stock: 6 }]
*/

// 4. Calcular el total de ventas del día (usando solo un parámetro)
// Ejemplo práctico: sumar las ventas de un día utilizando forEach
const ventas = [100, 200, 300, 150];
let totalVentas = 0;
ventas.forEach(venta => {
  totalVentas += venta;
});
console.log(`Total de ventas: $${totalVentas}`); // Resultado: 'Total de ventas: $750'

/*
### Conclusión:
- `forEach()` es ideal para realizar acciones sobre cada elemento de un array, como actualizaciones o cálculos.
- Puedes usar uno, dos o tres parámetros en el callback dependiendo de lo que necesites hacer con los elementos del array, su índice o el array completo.
- `forEach()` no devuelve un nuevo array, solo ejecuta una función para cada elemento.
*/
