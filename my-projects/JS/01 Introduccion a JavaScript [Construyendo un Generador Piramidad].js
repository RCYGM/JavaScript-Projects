const character = "!"; // es el contenido de la piramide
const count = 10; // es la cantidad de elementos y filas que tiene la piramide
const rows = []; // almacena el resultado del bucle for para ejecutar la piramide
let inverted = false; // dice si la piramide sera hacia ariba o hacia abajo

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
// esta es la funcion que almacena la formula para ejecutar el orden de la piramide
for ( let i = 1; i <= count; i++) {
    if(inverted) {
        rows.unshift(padRow(i, count));   
    } else{
        rows.push(padRow(i, count));
    }
    
}

// este bucle crea las filas 
let result = "";
for (const row of rows) {
    result = result + "\n" + row;
}/* Resumen El bucle for...of recorre cada elemento de la matriz rows.
En cada iteración, se añade una nueva línea (\n) y el contenido de row a la variable result.
Como resultado, result acumula las diferentes cadenas de rows, cada una en una nueva línea. */
console.log(result);
console.log();


/*
.length Devuelve el numero de elementos den el array 

.push() Esto te permite "empujar" un valor al final de un array.

.pop(). Este elimina el último elemento de un array y devuelve ese elemento.

.repeat() Este método acepta un número como argumento, especificando cuántas veces repetir 
la cadena objetivo. Por ejemplo, usando .repeat() para generar la cadena "¡Código! ¡Código! ¡Código!":

Ejemplo:
  const activity = "Code! ";
  activity.repeat(3);

.unshift() El método .unshift() de un array te permite agregar un valor al principio del array, a 
diferencia de .push() que agrega el valor al final del array. .unshift() devuelve la nueva longitud del 
array en el que se llamó.

Código de ejemplo:

const countDown = [2, 1, 0];
const newLength = countDown.unshift(3);
console.log(countDown); // [3, 2, 1, 0]
console.log(newLength);

.shift(). Este eliminará el primer elemento del array, a diferencia de .pop() que elimina el último elemento. Aquí tienes un ejemplo del método .shift():

Código de ejemplo:

javascript
Copiar código
const numbers = [1, 2, 3];
numbers.shift();

Cuando tienes que realizar una tarea repetidamente hasta que se cumpla una condición, usarás un bucle.

for (iterator; condition; iteration) {
    logic;
  }

un bucle for...of, itera sobre cada elemento de un objeto iterable y lo asigna temporalmente a una variable.

  "for" (const value "of" iterable) {

}

Una declaración if te permite ejecutar un bloque de código solo cuando se cumple una condición. Usan la siguiente sintaxis:

if (condition) {
  logic
}

if (condition1) {
  // código que se ejecuta si condition1 es true
} else if (condition2) {
  // código que se ejecuta si condition2 es true
} else if (condition3) {
  // código que se ejecuta si condition3 es true
}
Si la primera condición es false, JavaScript verificará la siguiente condición en la cadena. 
Si la segunda condición es false, JavaScript verificará la tercera condición, y así sucesivamente.

A veces querrás ejecutar un código diferente cuando todas las condiciones if...else if son false. Puedes hacer esto agregando un bloque else.

Un bloque else solo se evaluará si las condiciones en los bloques if y else if no se cumplen.

if (condition) {
  // este código se ejecutará si condition es true
} else if (condition2) {
  // este código se ejecutará si la primera condición es false
} else {
  // este código se ejecutará
  // si las primeras dos condiciones son false
}


Un bucle while se ejecutará una y otra vez hasta que la condición especificada deje de ser true. Tiene la siguiente sintaxis:

while (condition) {
  logic;
}



 */