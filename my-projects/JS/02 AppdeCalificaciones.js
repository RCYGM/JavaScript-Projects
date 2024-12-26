/*  Explicacion del codigo 

Esta función llama a: 
getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])
getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]) 

`scores` representa:
[92, 88, 12, 77, 57, 100, 67, 38, 97, 89] 
[45, 87, 98, 100, 86, 94, 67, 88, 94, 95]

`let sum = 0` almacenará la suma total del bucle.

`for` es el bucle.

`let i = 0` es la variable que va a iterar dentro del bucle, y le decimos que va a iniciar 
en la posición número 0.

`i < scores.length` es la condición que dice que este bucle se va a ejecutar siempre y cuando 
el valor de `i` sea menor que el tamaño del arreglo `scores` (esto asegura que recorra todas las calificaciones).
Usamos `scores.length` para saber cuántas calificaciones hay en total.

`i++` es para que el iterador `i` se incremente en 1 con cada iteración, moviéndose a la siguiente posición.

`sum += scores[i];` es la lógica del bucle donde sumamos a la variable `sum` el valor de la calificación 
en la posición actual (`scores[i]`), que cambia en cada iteración del bucle.
(Podemos usar `sum += scores[i];` o también `sum = sum + scores[i];`, ambos hacen lo mismo).

`return sum / scores.length;` lo que hacemos aquí es decir lo que queremos devolver desde la función 
(en este caso, el promedio). Esto se logra dividiendo el total de las sumas entre la cantidad total de notas, 
es decir, `return sum / scores.length;`.
*/

function getAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

/* Preguntas que me hice 

Resumen:
1. +=: Se usa para sumar cada valor del arreglo a la variable sum en cada iteración.

2. scores: Es el parámetro que representa el arreglo de números que se pasa cuando llamas a la función.

3. return sum / scores.length: La función devuelve el promedio calculado, que luego se imprime en la 
consola con console.log.

4. let sum = 0;  Recuerda que sum += scores[i]; es lo mismo que sum = sum + socores[i]; por lo tanto
en cada iteracion se actualiza la variable con el resultado




1. ¿Por qué usamos +=?
El operador += es una forma abreviada de escribir una suma acumulativa. 
En lugar de escribir algo como sum = sum + scores[i];, podemos usar 
sum += scores[i]; para lograr el mismo resultado.

En cada iteración del bucle for, esta línea:

sum += scores[i];

significa:

sum es la variable donde estamos acumulando la suma de todos los elementos 
del arreglo scores.
scores[i] es el valor del elemento en la posición i del arreglo.
Por lo tanto, lo que estamos haciendo es sumar el valor actual de scores[i] 
al valor que ya tiene sum y guardar el nuevo resultado de esa suma en sum.




2. ¿Cómo se correlaciona console.log(getAverage(...)) con scores?
Cuando llamas a la función getAverage en esta línea:

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
Estás pasando un arreglo de números como argumento a la función getAverage. 
El arreglo [92, 88, 12, 77, 57, 100, 67, 38, 97, 89] se pasa como el parámetro scores.

En el contexto de la función, scores representa el arreglo de notas que se está 
pasando. Entonces, en este caso, scores es equivalente a [92, 88, 12, 77, 57, 100, 
67, 38, 97, 89] cuando ejecutas el primer console.log.

En otras palabras:

Cuando llamas a getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]), scores dentro 
de la función es el arreglo [92, 88, 12, 77, 57, 100, 67, 38, 97, 89].
Cuando llamas a getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]), scores es el 
arreglo [45, 87, 98, 100, 86, 94, 67, 88, 94, 95].




3. ¿Dónde se almacena el resultado de return sum / scores.length;?
Cuando haces esto:

return sum / scores.length;
Lo que ocurre es que la función devuelve un valor, en este caso, el promedio 
de los valores que has sumado. Sin embargo, el resultado no se almacena dentro 
de la función misma, sino que se envía de vuelta a donde la función fue llamada.

Por ejemplo:

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
La función getAverage calcula el promedio y luego devuelve ese valor.
console.log(...) entonces imprime ese valor que ha sido devuelto.
Así que el valor devuelto por return se pasa a console.log y luego la consola lo imprime.




4. ¿Qué hay en el código que hace que la suma total se almacene en sum?

En tu código, lo que hace que la suma total se almacene en la variable sum es la línea 
del bucle for que usa el operador +=.

Vamos a desglosarlo para que entiendas cómo se acumula la suma dentro de sum:

Parte del código relevante:

let sum = 0;  // Inicializamos sum en 0

for (let i = 0; i < scores.length; i++) {
    sum += scores[i];  // Aquí se acumula la suma
}
Explicación de cómo funciona:
Inicialización de sum:


let sum = 0;
Al comienzo de la función, se inicializa una variable llamada sum y se le asigna el 
valor de 0. Esto es necesario para que sum comience en un valor neutral (0) antes de 
que se empiecen a sumar los valores del arreglo.

Bucle for:


for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
}
Este bucle recorre cada elemento del arreglo scores (que es el conjunto de notas que 
has pasado a la función).

Operador +=:


sum += scores[i];
Este operador acumula la suma de cada elemento del arreglo dentro de sum. Así es como 
funciona:

Primera iteración (i = 0):

sum = sum + scores[0]
Si sum era 0 y scores[0] es 92, entonces:

sum = 0 + 92 = 92;
Segunda iteración (i = 1):

sum = sum + scores[1]
Si sum ahora es 92 y scores[1] es 88, entonces:

sum = 92 + 88 = 180;
Tercera iteración (i = 2):

sum = sum + scores[2]
Si sum ahora es 180 y scores[2] es 12, entonces:

sum = 180 + 12 = 192;
Este proceso continúa para cada elemento del arreglo, acumulando el valor en sum.

Acumulación hasta el final del bucle: Al final del bucle, sum contendrá la suma total 
de todos los elementos de scores, ya que en cada iteración se ha ido añadiendo el valor 
de cada elemento.

Resumen del proceso:
let sum = 0;: Inicializas sum en 0 para empezar.
Bucle for: Itera sobre cada elemento del arreglo scores.
sum += scores[i];: Suma el valor de cada elemento del arreglo a la variable sum en cada iteración.
Al final del bucle, la variable sum contiene la suma total de todos los valores del arreglo.

Esto es lo que hace que la suma total se almacene en sum.
*/

// Entiendo El codigo perfectamente y no me llegaron preguntas importantes  
function getGrade(score) {
    if (score === 100) {
        return "A++"
    } else if (score >= 90) {
        return "A"

    } else if (score >= 80) {
        return "B"

    } else if (score >= 70) {
        return "C"

    } else if (score >= 60) {
        return "D"

    } else {
        return "F"
    }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));


/* Explicacion del codigo
`function hasPassingGrade(score)` está llamando a:
console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

`const grade = getGrade(score);` crea una variable llamada `grade` que llama a la función
anterior `getGrade`. Como recordamos, esta función convierte un puntaje numérico en una letra
(la calificación). En este caso, `score` es el argumento que está en `hasPassingGrade`,
y cuando se pasa a la función `getGrade`, su número es convertido en una letra.
Por eso, en los condicionales usamos:

`if (grade === "A++" || grade === "A" || grade === "B" || grade === "C" || grade === "D"){
    return true
  } else {
    return false
  }`

Esto verifica si la calificación es aprobatoria, ya que cualquiera de esas letras indica 
que el estudiante aprobó. Si la calificación es "F", se devuelve `false`.
*/
function hasPassingGrade(score) {
    const grade = getGrade(score);
    if (grade === "A++" || grade === "A" || grade === "B" || grade === "C" || grade === "D") {
        return true
    } else {
        return false
    }
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));



function studentMsg(totalScores, studentScore) {
    const average = getAverage(totalScores);
    const grade = getGrade(studentScore);
    if (grade === "A++" || grade === "A" || grade === "B" || grade === "C" || grade === "D") {
        return `Class average: ${average}. Your grade: ${grade}. You passed the course.`
    } else {
        return `Class average: ${average}. Your grade: ${grade}. You failed the course.`
    }

}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 50));