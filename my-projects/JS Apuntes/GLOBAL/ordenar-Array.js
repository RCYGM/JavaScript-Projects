// APUNTE: Cómo usar .sort() en JavaScript

// 1. Ordenar cadenas alfabéticamente (por defecto)
// Ejemplo práctico: ordenar una lista de proyectos por nombre
const proyectos = ['Landing page', 'API REST', 'E-commerce'];
proyectos.sort(); // Ordena alfabéticamente
console.log(proyectos); // Resultado: ['API REST', 'E-commerce', 'Landing page']

// 2. Ordenar números correctamente con una función comparadora
// Ejemplo práctico: ordenar los tiempos de carga de varias páginas web (en milisegundos)
const tiemposCarga = [1500, 450, 3000, 1200];
tiemposCarga.sort((a, b) => a - b); // Orden ascendente
console.log(tiemposCarga); // Resultado: [450, 1200, 1500, 3000]

// 3. Ordenar objetos por una propiedad específica
// Ejemplo práctico: ordenar una lista de empleados por su salario
const empleados = [
  { nombre: 'Carlos', salario: 50000 },
  { nombre: 'Ana', salario: 65000 },
  { nombre: 'Luis', salario: 45000 }
];

// Ordenar por salario de menor a mayor
empleados.sort((a, b) => a.salario - b.salario);
console.log(empleados);
// Resultado: 
// [
//   { nombre: 'Luis', salario: 45000 },
//   { nombre: 'Carlos', salario: 50000 },
//   { nombre: 'Ana', salario: 65000 }
// ]

// 4. Ordenar fechas
// Ejemplo práctico: ordenar las fechas de entrega de proyectos
const fechasEntrega = [
  new Date(2024, 11, 5),
  new Date(2024, 5, 20),
  new Date(2024, 1, 15)
];

// Ordenar de más antigua a más reciente
fechasEntrega.sort((a, b) => a - b);
console.log(fechasEntrega);
// Resultado:
// [
//   2024-02-14T22:00:00.000Z,
//   2024-06-19T22:00:00.000Z,
//   2024-12-04T23:00:00.000Z
// ]

// 5. Ordenar cadenas numéricas correctamente
// Ejemplo práctico: ordenar versiones de software
const versiones = ['10.2', '2.1', '1.5', '4.0'];
versiones.sort((a, b) => parseFloat(a) - parseFloat(b)); // Convertimos a número con parseFloat
console.log(versiones); // Resultado: ['1.5', '2.1', '4.0', '10.2']

// 6. Ordenar números en orden descendente
// Ejemplo práctico: ordenar puntuaciones de un juego de mayor a menor
const puntuaciones = [85, 95, 78, 92, 88];
puntuaciones.sort((a, b) => b - a); // Orden descendente
console.log(puntuaciones); // Resultado: [95, 92, 88, 85, 78]

// 7. Ordenar palabras por longitud
// Ejemplo práctico: ordenar una lista de palabras por la cantidad de letras
const palabras = ['manzana', 'coche', 'árbol', 'bicicleta'];
palabras.sort((a, b) => a.length - b.length); // Ordena por longitud
console.log(palabras); // Resultado: ['coche', 'árbol', 'manzana', 'bicicleta']

// CONCLUSIÓN:
// - .sort() es muy útil para ordenar arrays de cadenas, números, objetos y fechas.
// - Utiliza una función comparadora para tener más control sobre cómo se ordenan los elementos.
// - Puedes personalizar el orden para que sea ascendente o descendente, dependiendo del criterio.
