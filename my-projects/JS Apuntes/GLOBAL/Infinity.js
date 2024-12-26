// APUNTE: Cómo usar Infinity en JavaScript para manejar valores infinitos

/*
`Infinity` es una propiedad global en JavaScript que representa un valor numérico que es mayor que cualquier otro número. Se puede obtener dividiendo un número positivo por 0 o al exceder los límites de los números en JavaScript.

Características de `Infinity`:
- `Infinity` es mayor que cualquier número finito.
- Se puede obtener con operaciones matemáticas como división por 0.
- También existe `-Infinity` para representar valores infinitos negativos.
- Cualquier operación aritmética con `Infinity` sigue las reglas matemáticas normales (ej.: `Infinity + 1` sigue siendo `Infinity`).

### Ejemplos prácticos del uso de Infinity en el día a día de un programador:
*/

// 1. División por cero
// Ejemplo práctico: dividir un número por 0 devuelve `Infinity`
const resultado = 10 / 0;
console.log(resultado); // Resultado: Infinity

// 2. Comparar números con Infinity
// Ejemplo práctico: comparar si un número es más pequeño que Infinity (todos los números lo son)
const numero = 1000000;
console.log(numero < Infinity); // Resultado: true

// 3. Manejo de bucles infinitos controlados
// Ejemplo práctico: usar `Infinity` para controlar una condición que detiene un bucle cuando alcanza un límite alto
let contador = 0;
while (contador < Infinity) {
  if (contador === 100) {
    console.log('Alcanzado el valor 100, deteniendo el bucle');
    break;
  }
  contador++;
}

// 4. Usar Infinity en cálculos matemáticos
// Ejemplo práctico: sumar o restar números a `Infinity` mantiene el valor infinito
const sumaConInfinito = Infinity + 100;
const restaConInfinito = Infinity - 100;
console.log(sumaConInfinito); // Resultado: Infinity
console.log(restaConInfinito); // Resultado: Infinity

// 5. Uso de `-Infinity` para representar valores infinitos negativos
// Ejemplo práctico: representar una situación con límites negativos infinitos (como coordenadas de un gráfico)
const valorMinimo = -Infinity;
console.log(valorMinimo < -1000000); // Resultado: true

// 6. Uso de Infinity para representar valores fuera de rango
// Ejemplo práctico: representar que un valor está fuera del rango permitido en un cálculo o sistema
function verificarValor(val) {
  if (val > 10000) {
    return Infinity; // Devuelve Infinity si el valor está fuera del rango permitido
  }
  return val;
}

console.log(verificarValor(5000));  // Resultado: 5000 (dentro del rango)
console.log(verificarValor(15000)); // Resultado: Infinity (fuera del rango)

/*
### Conclusión:
- `Infinity` se usa en situaciones donde el valor numérico excede cualquier límite conocido o cuando hay una división por 0.
- Es útil para representar valores fuera de rango, controlar bucles, o evitar errores en operaciones matemáticas complejas.
- También puedes trabajar con `-Infinity` para valores infinitamente negativos.
- Aunque `Infinity` es un número especial, sigue las reglas matemáticas normales y se puede usar en operaciones como cualquier otro número.
*/
