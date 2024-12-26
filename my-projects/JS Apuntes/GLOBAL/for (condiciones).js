

/*
Un bucle for en JavaScript puede tener varias condiciones, y no está limitado 
solo a iterar en función de la longitud de un arreglo. El bucle for tiene la 
siguiente estructura general:
*/


for (inicialización; condición; actualización) {
    // Código a ejecutar
}

/*
Cada parte del bucle for puede tener diferentes tipos de expresiones y no 
está limitada a la longitud de un arreglo. Aquí te doy algunos ejemplos de 
cómo puedes controlar el ciclo for:
*/

/*
1. Iterar por la longitud de un arreglo (caso típico):
Este es el uso más común cuando se quiere recorrer un arreglo:
*/
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


/*
2. Iterar un número fijo de veces:
Puedes definir que el bucle se ejecute un número específico de veces:
*/
for (let i = 0; i < 10; i++) {
    console.log(i); // Imprimirá números del 0 al 9
}


/*
3. Condición basada en otro criterio:
Puedes utilizar cualquier tipo de condición que evalúe a true o false, como 
comparaciones con variables o condiciones personalizadas:
*/
let x = 1;
for (let i = 0; i < 100 && x < 50; i++) {
    x += i;
    console.log(x); // Se ejecutará mientras x sea menor que 50
}


/*
4. Bucle inverso (decremento):
En lugar de incrementar el valor del contador, puedes hacer que disminuya:
*/
for (let i = 10; i > 0; i--) {
    console.log(i); // Imprimirá del 10 al 1
}


/*
5. Saltarse iteraciones:
Puedes utilizar continue para saltar iteraciones específicas:
*/
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Saltará los números pares
    }
    console.log(i); // Solo imprimirá los números impares
}


/*
6. Romper el bucle antes de que termine:
Puedes usar break para salir del bucle cuando se cumpla una condición específica:
*/
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Rompe el bucle cuando i sea 5
    }
    console.log(i); // Imprimirá del 0 al 4
}


/*
7. Bucle infinito (con control):
Si no defines una condición de finalización, podrías crear un 
bucle infinito (aunque generalmente debes tener un mecanismo para salir de él):
*/
for (;;) {
    console.log("Esto es un bucle infinito");
    break; // Necesitas romperlo en algún punto para evitar que sea infinito
}

/*
8. Iterar sobre objetos utilizando for...in:
Aunque no es el mismo for tradicional, puedes iterar sobre las propiedades de un objeto:
*/
const obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log(key, obj[key]); // Imprimirá las llaves y los valores
}


/*
9. Iterar sobre arreglos o iterables usando for...of:
for...of es una alternativa para recorrer directamente los 
elementos de un iterable (arreglos, cadenas, etc.):
*/
const arr2 = [1, 2, 3, 4];
for (let value of arr) {
    console.log(value); // Imprimirá los valores directamente
}

// Conclusión:
/*
El ciclo for en JavaScript es muy flexible y permite usar una amplia variedad de 
condiciones, no solo la longitud de un arreglo. Puedes controlar su comportamiento 
usando cualquier tipo de expresión o combinación de condiciones, así como detenerlo 
o modificarlo con break, continue, y otras técnicas.
*/