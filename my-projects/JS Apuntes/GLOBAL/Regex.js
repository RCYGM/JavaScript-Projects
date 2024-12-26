// ========== Expresiones Regulares en JavaScript (Apuntes) ==========
// Un RegEx o expresión regular es una secuencia de caracteres que define un patrón de búsqueda.
// En JavaScript, las expresiones regulares se pueden usar con los métodos `test()`, `match()`, `replace()`, `exec()`, y más.

// 1. Creación de expresiones regulares
// Se pueden crear RegEx de dos formas en JavaScript:

// a) Usando barras "/.../"
const regex1 = /abc/; // Literal de RegEx

// b) Usando el constructor RegExp
const regex2 = new RegExp("abc"); // Usando el constructor

// Ambas formas son equivalentes. Sin embargo, el constructor es útil cuando necesitas crear expresiones regulares dinámicas.

// 2. Métodos básicos
// a) `.test()`: Devuelve true o false si hay una coincidencia.
console.log(/hello/.test("hello world")); // true

// b) `.match()`: Devuelve un array con las coincidencias o `null` si no encuentra ninguna.
console.log("hello world".match(/hello/)); // ["hello"]

// c) `.replace()`: Reemplaza coincidencias en una cadena.
console.log("hello world".replace(/world/, "JavaScript")); // "hello JavaScript"

// d) `.exec()`: Devuelve un array con detalles sobre la coincidencia, o `null` si no encuentra ninguna.
const execExample = /(\d+)/.exec("Hay 100 perros");
console.log(execExample); // ["100", "100"]

// ========== Elementos clave de los RegEx ==========

// 3. Caracteres especiales
// Algunos caracteres tienen significados especiales y necesitan ser escapados con una barra invertida (`\`).

// a) . (punto): Coincide con cualquier carácter excepto nuevas líneas.
console.log(/c.t/.test("cat")); // true

// b) \d: Coincide con cualquier dígito (0-9).
console.log(/\d/.test("123abc")); // true

// c) \w: Coincide con cualquier carácter de palabra (letras, dígitos, o guion bajo).
console.log(/\w/.test("hello_world")); // true

// d) \s: Coincide con espacios, tabulaciones o saltos de línea.
console.log(/\s/.test("hello world")); // true

// e) \: Para escapar un carácter especial como `.` o `*`.
console.log(/\./.test("example.com")); // true

// 4. Cuantificadores
// Los cuantificadores permiten definir cuántas veces debe aparecer un carácter o grupo.

// a) *: Coincide con 0 o más repeticiones.
console.log(/a*/.test("aaa")); // true (coincide "aaa")
console.log(/a*/.test("bc")); // true (coincide con 0 "a")

// b) +: Coincide con 1 o más repeticiones.
console.log(/a+/.test("aaa")); // true (coincide "aaa")
console.log(/a+/.test("bc")); // false (no hay "a")

// c) ?: Coincide con 0 o 1 repetición (opcional).
console.log(/a?b/.test("b")); // true (la "a" es opcional)

// d) {}: Define un número exacto de repeticiones.
console.log(/\d{4}/.test("2023")); // true (coincide con 4 dígitos)
console.log(/\d{2,4}/.test("123")); // true (coincide con 2 a 4 dígitos)

// 5. Agrupamiento y Alternativa
// a) (): Agrupa una parte de la expresión regular.
const phonePattern = /^(\d{3})-(\d{3})-(\d{4})$/;
console.log(phonePattern.test("123-456-7890")); // true

// b) |: Alternativa. Coincide con una cosa o la otra.
console.log(/cat|dog/.test("I have a dog")); // true
console.log(/cat|dog/.test("I have a cat")); // true

// 6. Anclas
// a) ^: Coincide con el inicio de una cadena.
console.log(/^hello/.test("hello world")); // true
console.log(/^hello/.test("say hello")); // false

// b) $: Coincide con el final de una cadena.
console.log(/world$/.test("hello world")); // true
console.log(/world$/.test("world is big")); // false

// 7. Conjuntos y Rangos
// a) []: Define un conjunto de caracteres. Coincide con cualquier carácter dentro de los corchetes.
console.log(/[aeiou]/.test("apple")); // true (contiene una vocal)

// b) [^]: Un conjunto de negación. Coincide con cualquier carácter que **no** esté dentro de los corchetes.
console.log(/[^aeiou]/.test("hello")); // true (contiene consonantes)

// c) Rango de caracteres:
console.log(/[a-z]/.test("hello")); // true (contiene letras minúsculas)

// d) Conjuntos combinados:
console.log(/[a-zA-Z0-9_]/.test("User_123")); // true (letras, dígitos y guion bajo)

// 8. Banderas (Flags)
// Las banderas permiten modificar el comportamiento de la expresión regular.
// a) g: Búsqueda global (continúa buscando después de la primera coincidencia).
console.log("hello hello".match(/hello/g)); // ["hello", "hello"]

// b) i: Búsqueda insensible a mayúsculas/minúsculas.
console.log(/hello/i.test("Hello world")); // true

// c) m: Búsqueda en múltiples líneas (cambia el comportamiento de ^ y $).
console.log(/^world$/m.test("hello\nworld")); // true (world está al final de una línea)

// 9. Lookaheads y Lookbehinds (A partir de ES2018)
// Permiten verificar si hay una coincidencia **sin incluirla** en el resultado final.
// a) Lookahead positivo (?=...): Coincide si el patrón sigue una determinada condición.
console.log(/hello(?=\sworld)/.test("hello world")); // true

// b) Lookahead negativo (?!...): Coincide si el patrón **no** es seguido por una condición.
console.log(/hello(?!\sworld)/.test("hello friend")); // true (no es seguido por "world")

// c) Lookbehind positivo (?<=...): Coincide si el patrón es precedido por una determinada condición.
console.log(/(?<=\d)px/.test("10px")); // true (hay un dígito antes de "px")

// d) Lookbehind negativo (?<!...): Coincide si el patrón **no** es precedido por una condición.
console.log(/(?<!\d)px/.test("px")); // true (no hay un dígito antes de "px")

// 10. Expresiones comunes útiles
// a) Validación de email:
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(emailRegex.test("user@example.com")); // true

// b) Validación de URL:
const urlRegex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?\/?.*$/;
console.log(urlRegex.test("https://www.example.com")); // true

// c) Validación de fecha en formato "DD/MM/YYYY":
const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
console.log(dateRegex.test("25/12/2023")); // true

// d) Validación de número de teléfono (EE.UU.):
const usPhoneRegex = /^1?\s?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
console.log(usPhoneRegex.test("123-456-7890")); // true

// ========== Fin de los Apuntes de Regex ==========

/*
¡Estos apuntes están diseñados para que puedas consultarlos rápidamente cuando necesites trabajar con expresiones regulares en tus proyectos de JavaScript!
Cada ejemplo refleja situaciones comunes que puedes encontrar como programador. Simplemente copia y modifica según lo necesites.
*/
