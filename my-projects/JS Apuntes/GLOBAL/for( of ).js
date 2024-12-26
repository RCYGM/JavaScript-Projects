// APUNTE: Cómo usar for...of en JavaScript para iterar sobre elementos iterables

/*
`for...of` es una estructura de control que permite recorrer elementos de estructuras de datos iterables 
como arrays, strings, mapas, sets, etc. A diferencia de `forEach()`, `for...of` se puede utilizar no solo en 
arrays, sino en otros objetos que son iterables.

Sintaxis básica:
for (let variable of iterable) {
  // Código a ejecutar con cada iteración
}

### Ejemplos prácticos del uso de for...of en el día a día de un programador:
*/

// 1. Iterar sobre un array de productos
// Ejemplo práctico: recorrer una lista de productos y mostrar su nombre y precio
const productos = [
    { nombre: 'Laptop', precio: 1000 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Monitor', precio: 300 }
  ];
  
  for (const producto of productos) {
    console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}`);
  }
  /*
  Resultado:
  Producto: Laptop, Precio: $1000
  Producto: Teclado, Precio: $50
  Producto: Monitor, Precio: $300
  */
  
  // 2. Iterar sobre una cadena de texto (string)
  // Ejemplo práctico: recorrer una cadena de texto y contar cuántas vocales contiene
  const texto = "JavaScript es genial";
  let contadorVocales = 0;
  const vocales = "aeiouAEIOU";
  
  for (const letra of texto) {
    if (vocales.includes(letra)) {
      contadorVocales++;
    }
  }
  
  console.log(`El texto tiene ${contadorVocales} vocales`); // Resultado: 'El texto tiene 7 vocales'
  
  // 3. Iterar sobre un Map
  // Ejemplo práctico: recorrer un objeto `Map` que contiene los precios de productos
  const precios = new Map([
    ['Laptop', 1000],
    ['Teclado', 50],
    ['Monitor', 300]
  ]);
  
  for (const [producto, precio] of precios) {
    console.log(`${producto}: $${precio}`);
  }
  /*
  Resultado:
  Laptop: $1000
  Teclado: $50
  Monitor: $300
  */
  
  // 4. Iterar sobre un Set
  // Ejemplo práctico: recorrer un `Set` que contiene nombres únicos de usuarios
  const usuarios = new Set(['Carlos', 'Ana', 'Luis', 'Carlos']); // Carlos se ignora por ser duplicado
  
  for (const usuario of usuarios) {
    console.log(`Usuario registrado: ${usuario}`);
  }
  /*
  Resultado:
  Usuario registrado: Carlos
  Usuario registrado: Ana
  Usuario registrado: Luis
  */
  
  // 5. Iterar sobre un objeto con Object.keys(), Object.values() o Object.entries()
  // Ejemplo práctico: usar `for...of` junto con `Object.entries()` para recorrer un objeto y obtener clave-valor
  const usuario = {
    nombre: 'Carlos',
    edad: 30,
    email: 'carlos@example.com'
  };
  
  for (const [clave, valor] of Object.entries(usuario)) {
    console.log(`${clave}: ${valor}`);
  }
  /*
  Resultado:
  nombre: Carlos
  edad: 30
  email: carlos@example.com
  */
  
  // 6. Iterar sobre un array con `break` o `continue`
  // Ejemplo práctico: detener la iteración cuando se encuentra un valor específico o saltar un elemento
  const numeros = [1, 2, 3, 4, 5, 6];
  
  for (const numero of numeros) {
    if (numero === 4) {
      continue; // Saltamos el número 4
    }
    if (numero === 6) {
      break; // Detenemos la iteración al llegar a 6
    }
    console.log(numero);
  }
  /*
  Resultado:
  1
  2
  3
  5
  */
  
  // 7. Iterar sobre un NodeList
  // Ejemplo práctico: seleccionar varios elementos del DOM y cambiar su estilo
  const elementos = document.querySelectorAll('.clase-elemento');
  
  for (const elemento of elementos) {
    elemento.style.color = 'red'; // Cambiar el color de cada elemento a rojo
  }
  
  /*
  ### Conclusión:
  - `for...of` es ideal para recorrer arrays, strings, sets, maps y cualquier objeto iterable.
  - Es útil cuando no necesitas el índice del array, solo los valores.
  - A diferencia de `for...in`, que recorre propiedades enumerables, `for...of` solo recorre los valores de elementos iterables.
  - `for...of` también se puede utilizar en estructuras de datos como Map y Set, lo que lo hace muy versátil.
  */
  