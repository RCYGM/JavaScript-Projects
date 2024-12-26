// APUNTE: Uso de Math y sus métodos en JavaScript

/*
`Math` es un objeto incorporado en JavaScript que contiene propiedades y 
métodos para realizar operaciones matemáticas comunes. No se necesita instanciar 
`Math`, ya que todos sus métodos son estáticos.

### Métodos comunes del objeto Math y su uso práctico:

1. **Math.random()**: Genera un número aleatorio entre 0 (inclusive) y 1 (exclusivo).
2. **Math.floor()**: Redondea un número hacia abajo al entero más cercano.
3. **Math.ceil()**: Redondea un número hacia arriba al entero más cercano.
4. **Math.round()**: Redondea un número al entero más cercano.
5. **Math.max()**: Devuelve el número más alto de un conjunto de valores.
6. **Math.min()**: Devuelve el número más bajo de un conjunto de valores.
7. **Math.sqrt()**: Devuelve la raíz cuadrada de un número.
8. **Math.pow()**: Calcula la potencia de un número.
9. **Math.abs()**: Devuelve el valor absoluto de un número.
10. **Math.PI**: Devuelve el valor de PI (aproximadamente 3.14159).

### Ejemplos prácticos del uso de Math en el día a día de un programador:
*/

// 1. Generar un número aleatorio entre dos valores
// Ejemplo práctico: generar un número aleatorio entre 1 y 100 (muy útil en juegos o pruebas)
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log(`Número aleatorio entre 1 y 100: ${numeroAleatorio}`);

// 2. Redondear hacia abajo con Math.floor()
// Ejemplo práctico: redondear precios o valores en cálculos financieros
const precioOriginal = 19.99;
const precioRedondeado = Math.floor(precioOriginal);
console.log(`Precio redondeado hacia abajo: ${precioRedondeado}`); // Resultado: 19

// 3. Redondear hacia arriba con Math.ceil()
// Ejemplo práctico: redondear tiempos de espera al siguiente minuto
const tiempoDeEspera = 5.3;
const tiempoRedondeadoArriba = Math.ceil(tiempoDeEspera);
console.log(`Tiempo redondeado hacia arriba: ${tiempoRedondeadoArriba} minutos`); // Resultado: 6 minutos

// 4. Redondear al entero más cercano con Math.round()
// Ejemplo práctico: redondear puntuaciones de un sistema de evaluación
const puntuacion = 7.5;
const puntuacionRedondeada = Math.round(puntuacion);
console.log(`Puntuación redondeada: ${puntuacionRedondeada}`); // Resultado: 8

// 5. Encontrar el valor máximo en una lista
// Ejemplo práctico: encontrar el valor más alto de ventas en un mes
const ventas = [1500, 3200, 2750, 4500, 3800];
const mayorVenta = Math.max(...ventas);
console.log(`Mayor venta del mes: $${mayorVenta}`); // Resultado: $4500

// 6. Encontrar el valor mínimo en una lista
// Ejemplo práctico: encontrar el valor más bajo de temperatura en la semana
const temperaturas = [22.5, 19.3, 25.1, 21.0, 18.6];
const menorTemperatura = Math.min(...temperaturas);
console.log(`Temperatura más baja de la semana: ${menorTemperatura}°C`); // Resultado: 18.6°C

// 7. Calcular la raíz cuadrada con Math.sqrt()
// Ejemplo práctico: calcular la distancia euclidiana entre dos puntos
const distancia = Math.sqrt(25); // La distancia de un lado de un cuadrado con área 25
console.log(`Raíz cuadrada de 25: ${distancia}`); // Resultado: 5

// 8. Elevar un número a una potencia con Math.pow()
// Ejemplo práctico: calcular el área de un círculo (A = πr²)
const radio = 7;
const areaCirculo = Math.PI * Math.pow(radio, 2);
console.log(`Área de un círculo con radio 7: ${areaCirculo.toFixed(2)}`); // Resultado: 153.94

// 9. Obtener el valor absoluto con Math.abs()
// Ejemplo práctico: calcular la diferencia absoluta entre dos puntuaciones
const diferenciaPuntuacion = Math.abs(85 - 92);
console.log(`Diferencia de puntuación: ${diferenciaPuntuacion}`); // Resultado: 7

// 10. Uso de Math.PI
// Ejemplo práctico: calcular la circunferencia de un círculo (C = 2πr)
const circunferencia = 2 * Math.PI * radio;
console.log(`Circunferencia de un círculo con radio 7: ${circunferencia.toFixed(2)}`); // Resultado: 43.98

/*
### Conclusión:
- `Math` proporciona una variedad de métodos para realizar cálculos matemáticos comunes en JavaScript.
- Métodos como `Math.random()`, `Math.floor()`, y `Math.round()` son útiles en situaciones cotidianas como generar números aleatorios, redondear valores, o calcular medidas.
- `Math.pow()` y `Math.sqrt()` son esenciales para realizar operaciones de potencia y raíces cuadradas, muy comunes en cálculos geométricos.
- `Math.PI` facilita cálculos con círculos y otras figuras geométricas que involucran el valor de π.
*/
