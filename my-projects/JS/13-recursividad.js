/* const callStack = [
'a(): returns "freeCodeCamp " + b()',
"b(): returns 'is ' + c()",
"c(): returns 'awesome!'",  
    
    
]
const a = () => {
    return "freeCodeCamp " + b()
}
const b = () => {
    return "is " + c()
}
const c = () => {
    return "awesome!"
}

----------------------------------------------------------------
const countDownAndUp = (number) => {
    console.log(number);
    if(number === 0){
        console.log("Reached base case")
        return
    }else {
        countDownAndUp(number - 1);
        console.log(number);
    }
};
countDownAndUp(3)

*/
const numberInput = document.getElementById('number-input');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');
const animationContainer = document.getElementById('animation-container');
const animationData = [
    {
        inputVal: 5,
        marginTop: 300,
        addElDelay: 1000,
        msg: "decimalToBinary(5) returns '10' + 1 (5 % 2). Then it pops off the stack.",
        showMsgDelay: 15000,
        removeElDelay: 20000,
    },
    {
        inputVal: 2,
        marginTop: -200,
        addElDelay: 1500,
        msg: "decimalToBinary(2) returns '1' + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.",
        showMsgDelay: 10000,
        removeElDelay: 15000,
    },
    {
        inputVal: 1,
        marginTop: -200,
        addElDelay: 2000,
        msg: "decimalToBinary(1) returns '1' (base case) and gives that value to the stack below. Then it pops off the stack.",
        showMsgDelay: 5000,
        removeElDelay: 10000,
    },
];

const showAnimation = () => {
result.innerText = "Call Stack Animation";
animationData.forEach((obj) => {
    setTimeout(() => {
        animationContainer.innerHTML += `
        <p id="${obj.inputVal}" style="margin-top: ${obj.marginTop}px;" class="animation-frame">decimalToBinary(${obj.inputVal})</p>
        `;
        
    }, obj.addElDelay)
    setTimeout(() => {
     document.getElementById(obj.inputVal).textContent = obj.msg;
    }, obj.showMsgDelay);
    setTimeout(() => {
        document.getElementById(obj.inputVal).remove();
    }, obj.removeElDelay)
});
setTimeout(() => {
    result.textContent = decimalToBinary(5);
}, 20000)
}
const decimalToBinary = (input) => {
    if(input === 0 || input === 1){
        return String(input);
    } else {
        return decimalToBinary(Math.floor(input / 2)) + (input % 2)
    }
/*let binary = "";
    if(input === 0){
        binary = "0";
        return
    }
    while(input > 0){
        binary = (input % 2) + binary;
        input = Math.floor(input / 2);
    }

    result.innerText = binary;
*/
}



const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value);
    if ( !numberInput.value || isNaN(inputInt) || inputInt < 0 ) {
        alert("Please provide a decimal number greater than or equal to 0")
    }
    if (inputInt === 5){
       showAnimation();
       return 
    }
    result.textContent = decimalToBinary(inputInt);
    numberInput.value = "";
}

convertBtn.addEventListener('click', checkUserInput);

numberInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        checkUserInput();
        return;
    }
});


/* const decimalToBinary = (input) => {
const inputs = [];
const quotients = [];
const remainders = [];

if(input === 0){
    result.innerText = "0";
    return
}

while(input > 0){
    const quotient = Math.floor(input / 2);
    const remainder = input % 2;
    inputs.push(input);
    quotients.push(quotient);
    remainders.push(remainder);
    input = quotient;
}
console.log("Inputs: ", inputs);
console.log("Quotients: ", quotients);
console.log("Remainders: ", remainders);

result.innerText = remainders.reverse().join("");


}
*/

/*
---
Para una forma confiable de convertir un valor a una cadena, 
incluso valores falsos como null y undefined, puedes usar la función String(). Por ejemplo:

Código de ejemplo:

const num = 5;

console.log(String(num)); // "5"
console.log(String(null)); // "null"
---

---
Cuando escribas el caso recursivo, debes recordar dos cosas:

¿Cuál es el caso base?
¿Cuál es la menor cantidad de trabajo que debes hacer para acercarte al caso base?

Dado que el caso base es cuando number es igual a 0, debes llamar a countdown() nuevamente, 
reduciendo también el valor de number en 1.

Dentro del bloque else, llama a countdown() y pásale number - 1 como argumento.
---
---
Una función recursiva es una función que se llama a sí misma una y otra vez. 
Pero debes tener cuidado, porque podrías crear fácilmente un bucle infinito. 
Aquí es donde entra el caso base. El caso base es cuando la función deja de 
llamarse a sí misma, y es una buena idea escribirlo primero.

Dado que tu función countdown() contará hacia atrás desde un número dado hasta cero, 
el caso base es cuando el parámetro number es igual a 0. Luego, debe devolver para 
salir de su bucle recursivo.
---

---
Recuerda que la pila de llamadas es una estructura LIFO, por lo que la última función 
se agrega a la parte superior o al final de la pila, similar a agregar un elemento en un arreglo.
---
---
Voy a explicártelo paso a paso para que puedas entender cómo convertir un número 
decimal a binario y cómo utilizar los octetos (bloques de 8 bits).

Qué es un octeto (byte):
Un octeto o byte es un conjunto de 8 bits. Los bits son los dígitos que forman los 
números binarios y pueden ser 0 o 1.
Un byte puede representar números en el rango de 0 a 255. Cada bit en este byte tiene 
un valor específico basado en las potencias de 2.

Valores de las posiciones en un byte:
Cuando escribimos un número binario en 8 bits, cada posición tiene un valor correspondiente 
que es una potencia de 2:

128	64	32	16	8	4	2	1

Ejemplo: Convertir el número decimal 52 a binario
si el numero en la tabla es mayor al que queremos convertir entonces es = 0
si el numero en la tabla es menor al que queremos convertir entonces es = 1
luego procedemos [tu numero] - [numero en tabla] = [tu nuevo valor para operar]

Identificar los valores que suman hasta 52:

El mayor valor en la tabla (128) es mayor que 52, por lo tanto, el primer bit es 0.

Luego, revisamos el siguiente valor (64), que también es mayor que 52, así que el segundo bit es 0.

El siguiente valor es 32. Como 32 es menor que 52, el tercer bit será 1.

Ahora restamos 32 de 52: 52 − 32 = 20

Revisamos el siguiente valor, 16, que es menor que 20, así que el cuarto bit será 1.
Restamos 16 de 20:  20 − 16 = 4

El siguiente valor es 8, que es mayor que 4, así que el quinto bit será 0.

El siguiente valor es 4, que es igual a lo que nos queda, por lo tanto el sexto bit es 1.

El séptimo valor (2) es mayor que 0, así que es 0.

El último valor (1) es mayor que 0, por lo tanto, es 0.

Entonces, el número 52 en binario es 110100.

Con leading zeros (ceros a la izquierda): Para representar el número en 8 bits (un octeto completo), añadimos ceros a la izquierda hasta completar 8 dígitos:

52 en binario con ceros a la izquierda es 00110100.
---
---
Además, como mencionamos en el paso 1 que solo estamos considerando números positivos, 
deberíamos agregar una tercera condición en la sentencia if para verificar si el número es 
menor que 0 (es decir, números negativos).

Código de ejemplo:

6 < 0; // false
-1 < 0; // true
-8 < 0; // true
0 < 0; // false
---
---
isNaN(). Esta función toma una cadena o un número como argumento, y devuelve true si evalúa como NaN. Por ejemplo:

Código de ejemplo:

isNaN("test"); // true
isNaN(2); // false
isNaN("3.5"); // false
---
---
Una buena manera de verificar y normalizar números en JavaScript es usar la función parseInt() 
incorporada, que convierte una cadena en un número entero. parseInt() toma al menos un argumento, 
una cadena para convertir en un entero, y devuelve un número entero o NaN (Not a Number). 
Código de ejemplo:

parseInt(2.2); // 2
parseInt("2e+3"); // 2
parseInt("e"); // NaN
---
---
En un proyecto anterior aprendiste sobre valores verdaderos y falsos (truthy y falsy), 
que son valores que se evalúan como verdaderos o falsos. En JavaScript, algunos valores 
falsos comunes que verás son null, undefined, el número 0 y cadenas vacías.
---
---
 Recuerda que e es un nombre común para el parámetro del objeto de evento.
---

El evento keydown se dispara cada vez que un usuario presiona una tecla en su teclado, 
y es una buena manera de agregar más interactividad a los elementos de entrada.
*/