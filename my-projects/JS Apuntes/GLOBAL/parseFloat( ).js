// APUNTE: Cómo usar parseFloat() en JavaScript para convertir cadenas a números con decimales

/*
El método `parseFloat()` se utiliza para convertir una cadena (string) en un número decimal (de punto flotante). A diferencia de `parseInt()`, que solo devuelve la parte entera de un número, `parseFloat()` conserva los decimales. Si no se puede convertir, devuelve `NaN` (Not a Number).

Sintaxis:
parseFloat(cadena);

Este método es útil cuando necesitas convertir valores que representan números decimales (por ejemplo, precios, medidas o porcentajes).

### Ejemplos prácticos del uso de parseFloat() en el día a día de un programador:
*/

// 1. Convertir una cadena que contiene un número decimal
// Ejemplo práctico: convertir el valor de un campo de texto a un número para cálculos matemáticos
const valorInput = "123.45";
const numero = parseFloat(valorInput);
console.log(numero); // Resultado: 123.45 (como número)

// 2. Convertir una cadena con unidades a número decimal
// Ejemplo práctico: extraer el valor numérico de una cadena que tiene unidades como 'px', 'em', etc.
const valorConUnidad = "200.5px";
const numeroSinUnidad = parseFloat(valorConUnidad);
console.log(numeroSinUnidad); // Resultado: 200.5

// 3. Uso en cálculos de precios y cantidades
// Ejemplo práctico: convertir un valor ingresado por el usuario en un campo de formulario a un número para calcular el total
const precioUnitario = "49.99";
const cantidad = 3;
const total = parseFloat(precioUnitario) * cantidad;
console.log(total); // Resultado: 149.97

// 4. Convertir porcentajes expresados como cadenas a números
// Ejemplo práctico: convertir una cadena con porcentaje a número para realizar cálculos
const porcentaje = "15.5%";
const porcentajeNumero = parseFloat(porcentaje) / 100;
console.log(porcentajeNumero); // Resultado: 0.155 (como número decimal)

// 5. Convertir valores que incluyen texto adicional
// Ejemplo práctico: extraer el número de una cadena que contiene texto antes o después del valor numérico
const textoConNumero = "La temperatura es de 32.8 grados.";
const temperatura = parseFloat(textoConNumero);
console.log(temperatura); // Resultado: 32.8

// 6. Uso en cálculos con medidas de diseño web
// Ejemplo práctico: convertir medidas que incluyen unidades (como 'px', 'em') a números para realizar operaciones matemáticas
const anchoElemento = "400.75px";
const anchoNumero = parseFloat(anchoElemento);
const nuevoAncho = anchoNumero * 1.2; // Aumentar el ancho en un 20%
console.log(nuevoAncho); // Resultado: 480.9

// 7. Convertir valores financieros
// Ejemplo práctico: convertir valores monetarios expresados como cadenas para cálculos financieros
const valorFactura = "1234.56";
const descuento = "10%";
const totalConDescuento = parseFloat(valorFactura) * (1 - parseFloat(descuento) / 100);
console.log(totalConDescuento); // Resultado: 1111.104 (descuento aplicado al valor)

/*
### Conclusión:
- `parseFloat()` es útil para convertir cadenas que representan números decimales a valores numéricos reales para cálculos matemáticos o financieros.
- Es ideal cuando trabajas con valores ingresados por el usuario, como precios, medidas o porcentajes.
- Si la cadena no contiene un número válido, `parseFloat()` devolverá `NaN`.
- A diferencia de `parseInt()`, `parseFloat()` retiene los valores decimales, lo que lo hace esencial para trabajar con precisión en cálculos.
*/
