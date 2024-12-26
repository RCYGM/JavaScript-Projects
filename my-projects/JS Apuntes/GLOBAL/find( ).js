// APUNTE: Cómo usar find() en JavaScript para buscar elementos en arrays

/*
El método `.find()` en JavaScript se utiliza para encontrar el **primer elemento** de un array que 
cumpla con una condición especificada. A diferencia de otros métodos como `.filter()`, que devuelve 
todos los elementos que cumplen la condición, `.find()` solo devuelve el primero. Si no encuentra 
ningún elemento que cumpla la condición, devuelve `undefined`.

### Sintaxis:
array.find(funcionCallback);

El callback de `.find()` puede aceptar hasta tres parámetros:
1. **`elemento`**: El elemento actual que está siendo evaluado.
2. **`índice`**: El índice del elemento en el array.
3. **`array`**: El array completo en el que se está buscando.

### Ejemplos prácticos:
*/

// 1. Usar un solo parámetro (elemento)

// Ejemplo 1: Encontrar el primer número mayor que 50 en una lista de precios
const precios = [25, 30, 75, 60, 40];
const primerPrecioMayor = precios.find(precio => precio > 50);
console.log(primerPrecioMayor);  // Resultado: 75

// Ejemplo 2: Buscar el primer nombre que comience con "A" en una lista de usuarios
const usuarios = ['Carlos', 'Ana', 'Luis', 'Andrea'];
const primerNombreConA = usuarios.find(nombre => nombre.startsWith('A'));
console.log(primerNombreConA);  // Resultado: 'Ana'

// Ejemplo 3: Encontrar el primer número impar en un array de números
const numeros = [2, 4, 6, 7, 10, 12];
const primerImpar = numeros.find(num => num % 2 !== 0);
console.log(primerImpar);  // Resultado: 7


// 2. Usar dos parámetros (elemento, índice)

// Ejemplo 1: Encontrar el primer producto con stock menor a 5 y obtener su índice
const inventario = [
  { nombre: 'Teclado', stock: 10 },
  { nombre: 'Ratón', stock: 3 },
  { nombre: 'Monitor', stock: 7 }
];

const primerProductoConBajoStock = inventario.find((producto, indice) => {
  console.log(`Verificando producto en el índice: ${indice}`);
  return producto.stock < 5;
});
console.log(primerProductoConBajoStock);  // Resultado: { nombre: 'Ratón', stock: 3 }

// Ejemplo 2: Buscar el primer valor mayor que 100 y mostrar su índice
const valores = [50, 60, 120, 130, 80];
const valorMayorConIndice = valores.find((valor, indice) => {
  console.log(`Índice del valor evaluado: ${indice}`);
  return valor > 100;
});
console.log(`Valor encontrado: ${valorMayorConIndice}`);  // Resultado: 120

// Ejemplo 3: Buscar el primer empleado que gane más de 4000 y obtener su índice
const empleados = [
  { nombre: 'Juan', salario: 3000 },
  { nombre: 'María', salario: 4500 },
  { nombre: 'Pedro', salario: 3800 }
];

const empleadoConBuenSalario = empleados.find((empleado, indice) => {
  console.log(`Evaluando en el índice: ${indice}`);
  return empleado.salario > 4000;
});
console.log(empleadoConBuenSalario);  // Resultado: { nombre: 'María', salario: 4500 }


// 3. Usar tres parámetros (elemento, índice, array)

// Ejemplo 1: Encontrar el primer número negativo y mostrar el array completo
const temperaturas = [15, -5, 20, 10, -8];
const primeraTemperaturaNegativa = temperaturas.find((temp, indice, array) => {
  console.log(`Array completo: ${array}`);
  return temp < 0;
});
console.log(`Temperatura negativa: ${primeraTemperaturaNegativa}`);  // Resultado: -5

// Ejemplo 2: Buscar el primer producto que cueste más de 1000 y mostrar el array
const catalogo = [
  { nombre: 'Teléfono', precio: 800 },
  { nombre: 'Laptop', precio: 1200 },
  { nombre: 'Tablet', precio: 600 }
];

const productoCaro = catalogo.find((producto, indice, array) => {
  console.log(`Array de productos: ${JSON.stringify(array)}`);
  return producto.precio > 1000;
});
console.log(productoCaro);  // Resultado: { nombre: 'Laptop', precio: 1200 }

// Ejemplo 3: Encontrar el primer proyecto completado y mostrar el array completo
const proyectos = [
  { nombre: 'App móvil', completado: false },
  { nombre: 'Sitio web', completado: true },
  { nombre: 'Sistema interno', completado: false }
];

const primerProyectoCompletado = proyectos.find((proyecto, indice, array) => {
  console.log(`Array de proyectos: ${JSON.stringify(array)}`);
  return proyecto.completado === true;
});
console.log(primerProyectoCompletado);  // Resultado: { nombre: 'Sitio web', completado: true }

/*
### Conclusión:
- `.find()` es útil para buscar el **primer elemento** que cumple una condición en un array.

- Puedes usarlo con uno, dos o tres parámetros, dependiendo de si necesitas acceder al valor, 
el índice, o el array completo.

- Es ideal para trabajar con listas de productos, empleados, usuarios o cualquier conjunto de datos 
donde necesites buscar un único valor basado en una condición.
*/
