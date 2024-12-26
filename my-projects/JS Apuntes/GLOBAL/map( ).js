// APUNTE: Cómo usar map() en JavaScript para transformar arrays

/*
.map() es un método que crea un **nuevo array** con los resultados de aplicar una 
función a cada uno de los elementos del array original. No modifica el array original, 
sino que devuelve uno nuevo con los elementos transformados.

Sintaxis:
array.map(funcionCallback);

funcionCallback:
- Recibe 3 parámetros (opcional):
  1. `elemento`: El elemento actual del array.
  2. `índice`: El índice del elemento actual (opcional).
  3. `array`: El array completo (opcional).
*/

// 1. Multiplicar precios por 2
// Ejemplo práctico: aplicar impuestos a los precios de productos
const precios = [10, 20, 30];
const preciosConImpuesto = precios.map(precio => precio * 1.21);
console.log(preciosConImpuesto); // Resultado: [12.1, 24.2, 36.3]

// 2. Extraer nombres de usuarios
// Ejemplo práctico: convertir un array de objetos de usuarios en un array de solo nombres
const usuarios = [
  { nombre: 'Juan', edad: 25 },
  { nombre: 'Ana', edad: 30 },
  { nombre: 'Pedro', edad: 28 }
];
const nombres = usuarios.map(usuario => usuario.nombre);
console.log(nombres); // Resultado: ['Juan', 'Ana', 'Pedro']

// 3. Convertir temperaturas de Celsius a Fahrenheit
// Ejemplo práctico: transformar un array de temperaturas de Celsius a Fahrenheit
const temperaturasCelsius = [0, 20, 30];
const temperaturasFahrenheit = temperaturasCelsius.map(temp => (temp * 9/5) + 32);
console.log(temperaturasFahrenheit); // Resultado: [32, 68, 86]

// 4. Crear nuevos IDs para productos
// Ejemplo práctico: agregar un identificador único a una lista de productos
const productos = ['Laptop', 'Teclado', 'Ratón'];
const productosConID = productos.map((producto, index) => ({ id: index + 1, nombre: producto }));
console.log(productosConID);
// Resultado:
// [
//   { id: 1, nombre: 'Laptop' },
//   { id: 2, nombre: 'Teclado' },
//   { id: 3, nombre: 'Ratón' }
// ]

// CONCLUSIÓN:
// - .map() es útil para aplicar transformaciones a los elementos de un array y devolver un nuevo array.
// - Perfecto para situaciones como cálculos, extracción de propiedades, o generar nuevas estructuras.
