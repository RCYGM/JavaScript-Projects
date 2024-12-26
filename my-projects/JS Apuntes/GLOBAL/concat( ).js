// APUNTE: Cómo usar concat() en JavaScript para concatenar arrays o cadenas de texto

/*
El método `concat()` en JavaScript se utiliza para combinar dos o más arrays o cadenas de texto. 
En el caso de arrays, `concat()` devuelve un nuevo array con los elementos combinados. En el caso de 
cadenas de texto, devuelve una nueva cadena que resulta de la unión de las cadenas originales.

Sintaxis:
array.concat(array2, array3, ...);
cadena.concat(cadena2, cadena3, ...);

- `array2`, `array3`, ...: Los arrays o valores que deseas concatenar.
- `cadena2`, `cadena3`, ...: Las cadenas de texto que deseas concatenar.

Este método no modifica los arrays o cadenas originales; en su lugar, devuelve una nueva instancia con los valores combinados.

### Ejemplos prácticos del uso de concat() en el día a día de un programador:
*/

// 1. Concatenar dos arrays
// Ejemplo práctico: combinar dos listas de productos en una sola lista
const productosA = ['Laptop', 'Teclado'];
const productosB = ['Monitor', 'Ratón'];
const todosLosProductos = productosA.concat(productosB);
console.log(todosLosProductos);
// Resultado: ['Laptop', 'Teclado', 'Monitor', 'Ratón']

// 2. Concatenar múltiples arrays
// Ejemplo práctico: combinar varias listas de números de diferentes fuentes
const lista1 = [1, 2, 3];
const lista2 = [4, 5];
const lista3 = [6, 7, 8];
const listaCombinada = lista1.concat(lista2, lista3);
console.log(listaCombinada);
// Resultado: [1, 2, 3, 4, 5, 6, 7, 8]

// 3. Concatenar arrays y valores individuales
// Ejemplo práctico: agregar un valor adicional al combinar arrays
const frutas = ['manzana', 'banana'];
const masFrutas = frutas.concat('naranja', ['pera', 'uva']);
console.log(masFrutas);
// Resultado: ['manzana', 'banana', 'naranja', 'pera', 'uva']

// 4. Concatenar cadenas de texto
// Ejemplo práctico: crear una frase uniendo varias partes
const saludo = 'Hola, ';
const nombre = 'Carlos';
const mensaje = saludo.concat(nombre, '!', ' ¿Cómo estás?');
console.log(mensaje);
// Resultado: 'Hola, Carlos! ¿Cómo estás?'

// 5. Crear una URL combinando varias partes
// Ejemplo práctico: construir una URL a partir de varios segmentos
const baseURL = 'https://api.ejemplo.com/';
const endpoint = 'usuarios/';
const idUsuario = '12345';
const urlCompleta = baseURL.concat(endpoint, idUsuario);
console.log(urlCompleta);
// Resultado: 'https://api.ejemplo.com/usuarios/12345'

// 6. Unir varias cadenas en un proceso de sanitización de texto
// Ejemplo práctico: combinar múltiples fragmentos de un texto sanitizado para una salida segura
const entrada = ' <script> ';
const textoLimpio = ''.concat(entrada.trim(), ' sanitizado.');
console.log(textoLimpio);
// Resultado: '<script> sanitizado'

/*
### Conclusión:
- `concat()` es ideal para combinar arrays o cadenas de texto sin modificar los originales.

- Es útil para trabajar con listas de datos que necesitan combinarse, o para generar nuevas 
cadenas de texto a partir de varias partes.

- Puedes concatenar múltiples arrays, cadenas o valores a la vez, haciéndolo versátil para distintas 
aplicaciones como la construcción de URLs, combinaciones de datos o manipulaciones de texto.
*/
