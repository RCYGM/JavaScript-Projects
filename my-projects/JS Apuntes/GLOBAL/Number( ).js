// APUNTE: Cómo usar Number() en JavaScript para convertir valores a números

/*
El constructor `Number()` en JavaScript se utiliza para convertir valores de otros tipos de datos (como cadenas o booleanos) a números. 

Sintaxis básica:
Number(valor);

Tipos de valores que `Number()` puede convertir:
1. Cadenas numéricas (ej.: "123")
2. Valores booleanos (`true` y `false`)
3. Cadenas vacías (que se convierten en 0)
4. Otros tipos de valores, como `null` o `undefined`

### Ejemplos prácticos de Number() en el día a día de un programador de JavaScript:
*/

// 1. Convertir una cadena que contiene un número
// Ejemplo práctico: convertir un valor de un input (que suele ser un string) a un número
const inputValor = "150";
const numero = Number(inputValor);
console.log(numero); // Resultado: 150 (tipo número)

// 2. Convertir booleanos a números
// Ejemplo práctico: convertir `true` y `false` a 1 y 0, respectivamente
console.log(Number(true)); // Resultado: 1
console.log(Number(false)); // Resultado: 0

// 3. Convertir una cadena vacía a un número
// Ejemplo práctico: cuando recibes un valor vacío de un formulario y lo conviertes a 0
const valorVacio = "";
console.log(Number(valorVacio)); // Resultado: 0

// 4. Convertir `null` a número
// Ejemplo práctico: convertir `null` a número en cálculos
console.log(Number(null)); // Resultado: 0

// 5. Intentar convertir valores no numéricos a número
// Ejemplo práctico: ver qué sucede cuando intentamos convertir una cadena no numérica a un número
const cadenaInvalida = "ABC";
console.log(Number(cadenaInvalida)); // Resultado: NaN (Not a Number)

// 6. Uso en operaciones aritméticas con valores convertidos
// Ejemplo práctico: sumar valores que provienen de un formulario web
const valor1 = "100";
const valor2 = "50";
const suma = Number(valor1) + Number(valor2);
console.log(suma); // Resultado: 150

// 7. Evitar concatenación de strings al usar valores de tipo string
// Ejemplo práctico: asegurar que la suma sea correcta cuando se usan strings
const precio1 = "200";
const precio2 = "300";
const total = Number(precio1) + Number(precio2); // Sin Number(), la suma sería '200300' (concatenación de strings)
console.log(total); // Resultado: 500

/*
### Consideraciones importantes:
- Si el valor no puede convertirse en un número válido, `Number()` devuelve `NaN` (Not a Number).
- Es importante comprobar si el resultado es `NaN` al trabajar con conversiones, especialmente si los valores provienen de entradas del usuario.
- Al convertir booleanos: `true` se convierte en 1, y `false` en 0.
- `null` se convierte en 0, pero `undefined` devuelve `NaN`.

### Conclusión:
- `Number()` es muy útil cuando necesitas asegurarte de que los valores que vienen en forma de cadenas (por ejemplo, desde inputs de formularios) sean tratados como números en operaciones aritméticas.
- Úsalo para evitar errores de concatenación al sumar valores numéricos almacenados como cadenas.
*/
