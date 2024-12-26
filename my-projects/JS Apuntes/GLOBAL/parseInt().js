// APUNTE: Cómo usar parseInt() en JavaScript

// 1. Convertir una cadena a un número entero
// Ejemplo práctico: convertir la edad de un formulario en cadena a número entero
const edad = parseInt("25");
console.log(edad); // Resultado: 25

// 2. Ignorar caracteres no numéricos
// Ejemplo práctico: extraer solo el número de un valor de tamaño con unidad (por ejemplo: "120px")
const ancho = parseInt("120px");
console.log(ancho); // Resultado: 120

// 3. No convertir partes decimales
// Ejemplo práctico: si recibes un número decimal como texto y solo necesitas la parte entera
const decimal = parseInt("10.99");
console.log(decimal); // Resultado: 10

// 4. Convertir cadenas con diferentes bases numéricas
// Ejemplo práctico: convertir números de diferentes sistemas numéricos (binario, hexadecimal)

// Base 10 (Decimal)
const decimalNumber = parseInt("101", 10);
console.log(decimalNumber); // Resultado: 101

// Base 16 (Hexadecimal)
const hexadecimal = parseInt("A", 16);
console.log(hexadecimal); // Resultado: 10

// Base 2 (Binario)
const binario = parseInt("101", 2);
console.log(binario); // Resultado: 5

// 5. Devolver NaN cuando no es un número válido
// Ejemplo práctico: si recibes un valor no numérico de un campo de texto
const noEsNumero = parseInt("Hola");
console.log(noEsNumero); // Resultado: NaN

// CONCLUSIÓN:
// - parseInt() convierte una cadena a un número entero.
// - Ignora cualquier parte no numérica después de los dígitos.
// - Funciona con diferentes bases numéricas (decimal, binario, hexadecimal).
// - Devuelve NaN si la conversión no es posible.
