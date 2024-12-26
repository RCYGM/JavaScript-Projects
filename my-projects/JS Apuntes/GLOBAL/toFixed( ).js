// APUNTE: Cómo usar .toFixed() en JavaScript para redondear números con decimales

/*
El método `.toFixed()` en JavaScript se utiliza para formatear un número, fijando un número específico de decimales. 
Retorna una cadena de texto con el número redondeado al número de decimales especificado.

Sintaxis básica:
numero.toFixed(numeroDeDecimales);

- `numeroDeDecimales`: Especifica cuántos dígitos deben aparecer después del punto decimal.

### Ejemplos prácticos del uso de .toFixed() en el día a día de un programador:
*/

// 1. Redondear un precio con dos decimales
// Ejemplo práctico: mostrar precios con dos decimales en una tienda online
const precio = 9.99;
console.log(precio.toFixed(2)); // Resultado: '9.99' (siempre muestra dos decimales, aunque sean ceros)

// 2. Mostrar precios después de aplicar descuentos
// Ejemplo práctico: calcular un precio con descuento y mostrarlo con dos decimales
const precioOriginal = 49.99;
const descuento = 10; // 10% de descuento
const precioConDescuento = precioOriginal - (precioOriginal * (descuento / 100));
console.log(precioConDescuento.toFixed(2)); // Resultado: '44.99'

// 3. Redondear a un número entero
// Ejemplo práctico: redondear un número con decimales a un número entero para mostrar unidades
const cantidadDecimal = 123.456;
console.log(cantidadDecimal.toFixed(0)); // Resultado: '123' (redondea a un número entero)

// 4. Calcular impuestos y redondear a dos decimales
// Ejemplo práctico: calcular el total de una factura incluyendo impuestos y redondear el resultado
const precioProducto = 200;
const tasaImpuesto = 0.21; // 21% de IVA
const totalConImpuestos = precioProducto * (1 + tasaImpuesto);
console.log(totalConImpuestos.toFixed(2)); // Resultado: '242.00' (redondeado a dos decimales)

// 5. Mostrar valores de una moneda extranjera
// Ejemplo práctico: convertir una moneda y mostrar el valor redondeado con dos decimales
const tasaCambio = 1.13; // USD a EUR
const dolares = 100;
const euros = dolares * tasaCambio;
console.log(euros.toFixed(2)); // Resultado: '113.00' (muestra siempre dos decimales para monedas)

// 6. Formatear porcentajes con un decimal
// Ejemplo práctico: calcular el porcentaje de progreso de una tarea y mostrarlo con un decimal
const tareasTotales = 45;
const tareasCompletadas = 32;
const porcentajeCompletado = (tareasCompletadas / tareasTotales) * 100;
console.log(porcentajeCompletado.toFixed(1)); // Resultado: '71.1' (porcentaje con un decimal)

// 7. Controlar el número de decimales en cálculos financieros
// Ejemplo práctico: redondear el cálculo de intereses en un sistema financiero
const principal = 1000;
const tasaInteres = 0.035; // 3.5% anual
const interesGenerado = principal * tasaInteres;
console.log(interesGenerado.toFixed(2)); // Resultado: '35.00' (redondeado a dos decimales para cálculos financieros)

/*
### Conclusión:
- El método `.toFixed()` es útil para controlar la cantidad de decimales que se muestran en valores numéricos, como precios, impuestos, porcentajes, o cálculos financieros.
- Devuelve el número redondeado como cadena de texto, asegurando siempre el número de decimales que se especifique.
- Ideal para formatear valores numéricos en situaciones donde se requieren precisiones específicas, como en tiendas online, aplicaciones financieras, o cálculos de porcentajes.
*/
