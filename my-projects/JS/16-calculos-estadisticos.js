
const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;
/* Sacar la media Ejemplos :
const testArr1 = [1, 2, 3, 4, 5]; // Lista impar
const testArr2 = [1, 2, 3, 4, 5, 6]; // Lista par

const isEven = testArr2.length % 2 === 0; // Comprueba si es par
console.log(isEven);

// Mediana para lista impar
const oddListMedian = testArr1[Math.floor(testArr1.length / 2)];
console.log(oddListMedian); // Esto devuelve 3, que es la mediana de testArr1

// Mediana para lista par
const firstMiddleNumber = testArr2[testArr2.length / 2]; // Primer número del medio
const secondMiddleNumber = testArr2[(testArr2.length / 2) - 1]; // Segundo número del medio

// Calcula la mediana para lista par
const evenListMedian = (firstMiddleNumber + secondMiddleNumber) / 2;
console.log(evenListMedian);
*/

const getMedian = (array) => {
  const sorted = array.toSorted((a, b) => a - b);
  const median =
    sorted.length % 2 === 0
      ? getMean([sorted[sorted.length / 2], sorted[sorted.length / 2 - 1]])
      : sorted[Math.floor(sorted.length / 2)];
  return median;
};

const getMode = (array) => {
  const counts = {};
  array.forEach((el) => {
    counts[el] = (counts[el] || 0) + 1;
  })
  if (new Set(Object.values(counts)).size === 1) {
    return null;
  }
  const highest = Object.keys(counts).sort(
    (a, b) => counts[b] - counts[a]
  )[0];
  const mode = Object.keys(counts).filter(
    (el) => counts[el] === counts[highest]
  );
  return mode.join(", ");
};

const getRange = (array) => {
  return Math.max(...array) - Math.min(...array);
};

const getVariance = (array) => {
  const mean = getMean(array);
  const variance = array.reduce((acc, el) => {
    const difference = el - mean;
    const squared = difference ** 2;
    return acc + squared;
  }, 0) / array.length;
  return variance;
  /* Con dos llamadas a .map() y una a .reduce(), estás creando arrays 
    adicionales e iterando más veces de las necesarias. Debes mover 
    toda la lógica a la llamada .reduce() para ahorrar tiempo y memoria.

    const differences = array.map((el) => el - mean);
    const squaredDifferences = differences.map((el) => el ** 2);
    const sumSquaredDifferences = squaredDifferences.reduce((acc, el) => acc + el, 0);
    */
};

const getStandardDeviation = (array) => {
  const variance = getVariance(array);
  const standardDeviation = Math.sqrt(variance);
  return standardDeviation;
}

const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));

  const mean = getMean(numbers);
  const median = getMedian(numbers);
  const mode = getMode(numbers);
  const range = getRange(numbers);
  const variance = getVariance(numbers);
  const standardDeviation = getStandardDeviation(numbers);
  document.querySelector("#standardDeviation").textContent = standardDeviation;


  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
  document.querySelector("#mode").textContent = mode;
  document.querySelector("#range").textContent = range;
  document.querySelector("#variance").textContent = variance;

} // Recuerda que .map() crea un nuevo array, en lugar de mutar el array original.

/*
El objeto Math tiene un método .sqrt() específicamente para encontrar la raíz cuadrada de un número.
---
---
Para calcular una raíz, como la raíz cuadrada de un número, puedes usar un exponente invertido. 
En JavaScript, puedes utilizar la función incorporada Math.pow() para calcular exponentes.

Aquí tienes la sintaxis básica de la función Math.pow():

Código de ejemplo:

Math.pow(base, exponent);
Aquí tienes un ejemplo de cómo calcular la raíz cuadrada de 4:

Código de ejemplo:

const base = 4;
const exponent = 0.5;
// devuelve 2
Math.pow(base, exponent);
---
---
Ahora necesitas encontrar el valor que ocurre con mayor frecuencia. Utilizarás el método Object.keys() para esto.
---
---
Existen algunos casos límite a tener en cuenta al calcular la moda de un conjunto de datos. 
Primero, si cada valor aparece la misma cantidad de veces, no hay moda.

Para calcular esto, usarás un Set. Un Set es una estructura de datos que solo permite valores únicos. 
Si pasas un array al constructor Set, eliminará cualquier valor duplicado.
---
---
Para calcular la frecuencia, puedes usar el siguiente enfoque:

Código de ejemplo:

const numbersArr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4];
const counts = {};
numbersArr.forEach((el) => {
  if (counts[el]) {
    counts[el] += 1;
  } else {
    counts[el] = 1;
  }
});
Verifica si el número actual ya está en el objeto counts. Si es así, 
lo incrementas en 1. Si no lo está, lo asignas a 1.

El objeto resultante tiene las claves como los números del array y los valores como la 
cantidad de veces que aparece cada número en la lista:

Código de ejemplo:

{ 1: 3, 2: 3, 3: 3, 4: 3, 5: 2 }
---
---
El método .sort() muta el array original, es decir, modifica el orden de los elementos directamente. 
Esto generalmente se considera una mala práctica, ya que puede generar efectos secundarios inesperados.

En su lugar, deberías usar el método .toSorted(), que crea un nuevo array. Cambia tu llamada a .sort() por 
.toSorted(). No modifiques la función de callback.
---
---
Para obtener la mediana de un array con un número impar de elementos, necesitas 
encontrar y devolver el número del medio.

Aquí tienes cómo encontrar el número del medio de un array con un número impar de elementos:

Código de ejemplo:

arr[Math.floor(arr.length / 2)];
Aquí tienes un ejemplo más largo que encuentra el número del medio de un array con 5 elementos:

Código de ejemplo:

javascript
Copiar código
const numbers = [1, 2, 3, 4, 5];
const middleNumber = numbers[Math.floor(numbers.length / 2)];
console.log(middleNumber); // 3
La razón por la que usas Math.floor es porque el resultado de dividir un número impar 
por 2 será un decimal. Math.floor redondeará hacia abajo al número entero más cercano.
---
---
Para verificar si un número es par o impar, puedes usar el operador de módulo %. 
El operador de módulo devuelve el resto de la división de dos números.

Aquí tienes un ejemplo que verifica si la longitud de un array es par o impar:

Código de ejemplo:

// Verificar si la longitud del array es par
arr.length % 2 === 0;

// Verificar si la longitud del array es impar
arr.length % 2 === 1;
Si el resto es 0, el número es par. Si el resto es 1, el número es impar.
---
---
Por defecto, el método .sort() convierte los elementos de un array en cadenas y luego los ordena alfabéticamente. 
El método .sort() muta el array original. Esto funciona bien para cadenas, pero no para números. Por ejemplo, "10" 
aparece antes que "2" cuando se ordena como cadena, pero "2" debería aparecer antes que "10" cuando se ordena como números.

Para solucionar esto, puedes pasar una función de callback al método .sort(). Esta función toma dos argumentos, 
que representan los dos elementos que se están comparando. La función debe devolver un valor menor que 0 si el 
primer elemento debe ir antes que el segundo, un valor mayor que 0 si el primer elemento debe ir después del segundo, 
y 0 si ambos elementos deben permanecer en sus posiciones actuales.

Para ordenar tus números de menor a mayor, pasa una función de callback que tome los parámetros a y b, 
y devuelve el resultado de restar b de a.
---
---
El primer paso para calcular la mediana es asegurarse de que la lista de números esté ordenada de menor a mayor. 
Una vez más, existe un método de array ideal para esto: el método .sort().
---
---
El método .reduce() toma un segundo argumento que se usa como el valor 
inicial del acumulador. Sin un segundo argumento, el método .reduce() 
usa el primer elemento del array como acumulador, lo que puede generar 
resultados inesperados.

Para estar seguro, es mejor establecer un valor inicial.
---
---
al igual que otros métodos, .reduce() toma una función de callback. Esta función de callback, 
sin embargo, toma al menos dos parámetros. El primero es el acumulador, y el segundo es el elemento 
actual del array. El valor de retorno de la función de callback se convierte en el valor del acumulador 
en la siguiente iteración.

Código de ejemplo:

array.reduce((acc, el) => {
    // Tu lógica aquí
});
---
---
El método .reduce() toma un array y aplica una función de callback para condensar el array en un solo valor.
---
---
Al igual que el método .map(), el método .filter() toma una función de callback. 
La función de callback toma el elemento actual como su primer argumento.

Código de ejemplo:

array.filter(el => {
    // Tu lógica aquí
});
La función de callback necesita devolver un valor booleano, que indica si el 
elemento debe incluirse en el nuevo array. En este caso, deseas devolver true 
si el elemento no es NaN (no es un número).

Sin embargo, no puedes verificar la igualdad aquí, porque NaN no es igual a sí mismo. 
En su lugar, puedes usar el método isNaN(), que devuelve true si el argumento es NaN.
---
---
La función de callback necesita devolver un valor. En este caso, 
deseas devolver el valor de cada elemento convertido a un número. 
Puedes hacer esto usando el constructor Number(), pasando el elemento como argumento.
---
---
El valor de un elemento de entrada (input) siempre es una cadena, 
incluso si el tipo de entrada es number. Necesitas convertir este 
array de cadenas en un array de números. Para hacer esto, puedes 
usar el método .map().

El método .map() toma una función de callback como su primer argumento. 
Esta función de callback toma algunos argumentos, pero el primero es el 
elemento actual que está siendo procesado. Aquí tienes un ejemplo:

Código de ejemplo:

array.map(el => {
    // Tu lógica aquí
});
---
---
El método .split() toma una cadena y la divide en un array de cadenas. 
Puedes pasarle una cadena de caracteres o una expresión regular (RegEx) 
para usar como separador. Por ejemplo, string.split(",") dividiría la 
cadena en cada coma y devolvería un array de cadenas.
*/