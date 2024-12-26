const infixToFunction = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => x / y,
};

const infixEval = (str, regex) => str.replace(regex, (_match, arg1, operator, arg2) => infixToFunction[operator](parseFloat(arg1), parseFloat(arg2)));

const highPrecedence = (str) => {
    const regex = /([\d.]+)([*\/])([\d.]+)/;
    const str2 = infixEval(str, regex);
    return str2 === str ? str : highPrecedence(str2)
    // return regex.test(str);
    /*
    /*
      1. `([\d.]+)`:
       - `\d` representa cualquier dígito (del 0 al 9).
       - El `.` representa el punto decimal.
       - El `+` significa "uno o más de estos caracteres".
       - El conjunto `([\d.]+)` captura uno o más caracteres que pueden ser dígitos o puntos decimales.
       - Esto se usa para capturar números que pueden tener decimales.
    */
    // 2. `([*\/])`:
    //    - `[*/]` es un conjunto de caracteres que coincide con los operadores de multiplicación (`*`) o división (`/`).
    //    - El \ delante de `/` escapa el carácter `/` para que no sea interpretado como el final de la expresión regular.
    //    - ([*/]) captura el operador multiplicación o división.

    //   3. ([\d.]+) (otra vez):
    //    - Similar al primer grupo, captura un número que puede incluir dígitos y un punto decimal.
};
// console.log(highPrecedence("5*3"))

const isEven = (num) => num % 2 === 0;

const sum = nums => nums.reduce((acc, el) => acc + el, 0);

const average = (nums) => nums.reduce((acc, el) => acc + el, 0) / nums.length;

const median = nums => {
    const sorted = nums.slice().sort((a, b) => a - b);
    const length = sorted.length;
    const middle = length / 2 - 1;
    return isEven(length) ? average([sorted[middle], sorted[middle + 1]]) : sorted[Math.ceil(middle)]

}

const spreadsheetFunctions = {
        // Suma los números en el array 'nums'.
        sum,
      
        // Calcula el promedio (media) de los números en el array 'nums'.
        average,
      
        // Calcula la mediana de los números en el array 'nums'.
        median,
      
        // Filtra el array 'nums' y devuelve solo los números pares, utilizando la función isEven.
        even: nums => nums.filter(isEven),
      
        // Verifica si al menos un número en el array 'nums' es par. Devuelve true si lo encuentra, de lo contrario false.
        someeven: nums => nums.some(isEven),
      
        // Verifica si todos los números en el array 'nums' son pares. Devuelve true si todos lo son, de lo contrario false.
        everyeven: nums => nums.every(isEven),
      
        // Devuelve los primeros dos elementos del array 'nums'.
        firsttwo: nums => nums.slice(0, 2),
      
        // Devuelve los últimos dos elementos del array 'nums'.
        lasttwo: nums => nums.slice(-2),
      
        // Verifica si el array 'nums' contiene el número 2. Devuelve true si lo encuentra, de lo contrario false.
        has2: nums => nums.includes(2),
      
        // Incrementa cada número en el array 'nums' en 1, devolviendo un nuevo array con los valores incrementados.
        increment: nums => nums.map(num => num + 1),
      
        // Genera un número entero aleatorio entre el primer número del array 'x' (inclusive) y el segundo número 'y' (exclusivo).
        random: ([x, y]) => Math.floor(Math.random() * y + x),
      
        // Genera un rango de números utilizando los valores en el array 'nums'. La función range es reutilizada aquí.
        range: nums => range(...nums),
      
        // Elimina los valores duplicados en el array 'nums' y devuelve un nuevo array sin duplicados.
        nodupes: nums => [...new Set(nums).values()],
      
        // Devuelve el array tal como está. Esta propiedad vacía es una función de identidad que no modifica el array.
        "": nums => nums
};

const applyFunction = (str) => {
    const noHigh = highPrecedence(str);
    const infix = /([\d.]+)([+-])([\d.]+)/
    const str2 = infixEval(noHigh, infix);
    const functionCall = /([a-z0-9]*)\(([0-9., ]*)\)(?!.*\()/i //Esta expresión buscará llamadas de funciones como sum(1, 4).
    const toNumberList = args => args.split(",").map(parseFloat);
    const apply = (fn, args) => spreadsheetFunctions[fn.toLowerCase()](toNumberList(args)); // El parámetro fn será el nombre de una función
    return str2.replace(functionCall, (match, fn, args) => spreadsheetFunctions.hasOwnProperty(fn.toLowerCase()) ? apply(fn, args) : match);

}

const range = (start, end) => Array(end - start + 1).fill(start).map((element, index) => element + index);

const charRange = (start, end) => range(start.charCodeAt(0), end.charCodeAt(0)).map((code) => String.fromCharCode(code));

const evalFormula = (x, cells) => {
    const idToText = (id) => cells.find((cell) => cell.id === id).value;
    const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;
    const rangeFromString = (num1, num2) => range(parseInt(num1), parseInt(num2));
    const elemValue = num => character => idToText(character + num);
    const addCharacters = character1 => character2 => num => charRange(character1, character2).map(elemValue(num));
    const rangeExpanded = x.replace(rangeRegex, (_match, char1, num1, char2, num2) => rangeFromString(num1, num2).map(addCharacters(char1)(char2)));
    const cellRegex = /[A-J][1-9][0-9]?/gi;
    const cellExpanded = rangeExpanded.replace(cellRegex, (match) => idToText(match.toUpperCase()))
    const functionExpanded = applyFunction(cellExpanded);
    return functionExpanded === x ? functionExpanded : evalFormula(functionExpanded, cells);
}

window.onload = () => {
    const container = document.getElementById('container');
    const createLabel = (name) => {
        const label = document.createElement('div');
        label.className = 'label';
        label.textContent = name;
        container.appendChild(label);
    }
    const letters = charRange("A", "j");
    letters.forEach(createLabel);
    range(1, 99).forEach((number) => {
        createLabel(number);
        letters.forEach((letter) => {
            const input = document.createElement('input');
            input.type = "text";
            input.id = letter + number;
            input.ariaLabel = letter + number;
            input.onchange() = update()
            container.appendChild(input);
        })
    })
}

const update = (event) => {
    const element = event.target;
    const value = element.value.replace(/\s/g, "");
    if (!value.includes(element.id) && value[0] === "=") {
        element.value = evalFormula(value.slice(1), Array.from(document.getElementById('container').children));
    }
}

/*
Los arrays tienen un método .every(). Al igual que el método .some(), .every() 
acepta una función de callback que debe tomar un elemento del array como argumento. 
El método .every() devolverá true si la función de callback devuelve true para todos los elementos del array.
---
---
El método some() en JavaScript verifica si al menos un elemento de un array 
cumple con una condición especificada por una función que le pasas como argumento. 
Si algún elemento cumple la condición, devuelve true. Si ningún elemento la cumple, devuelve false.
---
---
Paso 96
Lamentablemente, esa propiedad children está devolviendo una colección de elementos, que es similar a un 
array pero no es un array. Envuelve tu segundo argumento en Array.from() para convertirlo en un array.
---
---
Para verificar si una propiedad existe en un objeto determinado, puedes usar el método hasOwnProperty().

El método hasOwnProperty() devuelve true o false dependiendo de si se encuentra la propiedad en el objeto o no.

Aquí hay un ejemplo de cómo usar el método hasOwnProperty():

const developerObj = {
  name: 'John',
  age: 34,
}

developerObj.hasOwnProperty('name'); // true
developerObj.hasOwnProperty('salary'); // false
---
---
Paso 59 Tu llamada a addCharacters(char1) también devuelve una función, que devuelve otra función. 
Necesitas hacer otra llamada a la función para acceder a esa referencia de función más interna para el 
callback del método .map(). JavaScript te permite invocar funciones devueltas inmediatamente:

myFunc(1)("hi");
---
---
Paso 51 Puedes pasar una referencia de función como parámetro de callback. 
Una referencia de función es el nombre de la función sin los paréntesis. Por ejemplo:

javascript
Copiar código
const myFunc = (val) => `value: ${val}`;
const array = [1, 2, 3];
const newArray = array.map(myFunc);
El método .map() aquí llamará a la función myFunc, pasando los mismos argumentos que recibe un callback en .map(). 
El primer argumento es el valor del array en la iteración actual, por lo que newArray sería [value: 1, value: 2, value: 3].
---
---
Paso 45 El concepto de devolver una función dentro de otra función se llama "currying". 
Este enfoque te permite crear una variable que contiene una función para ser llamada más 
adelante, pero con una referencia a los parámetros de la llamada de la función externa.

Por ejemplo:

const innerOne = elemValue(1);
const final = innerOne("A");
innerOne sería tu función interna, con num configurado en 1, y final tendría el valor de la celda con el id "A1". Esto es posible porque las funciones tienen acceso a todas las variables declaradas en su creación. Esto se llama "closure".
---
---
Paso 30 Dado que el evento de cambio se está activando en un elemento input, 
el elemento tendrá una propiedad value que representa el valor actual del input.
---
---
Paso 29 Dado que tu evento update se ejecuta como un listener del evento de cambio, 
el parámetro event será un evento de cambio.

La propiedad target del evento de cambio representa el elemento que cambió. 
Asigna la propiedad target a una nueva variable llamada element.
---
---
Paso 18 En proyectos anteriores aprendiste sobre el método setAttribute. 
Otra forma de actualizar un atributo en JavaScript es usar la siguiente sintaxis:

el.attribute = value;
Los nombres de propiedades para los atributos HTML con guion, como aria-label, 
siguen camel case, convirtiéndose en ariaLabel.

el.ariaLabel = "Valor de Aria Label";
---
---
Convierte tus valores start y end en tu llamada a range() a números 
utilizando el método .charCodeAt() en ellos, pasando el número 0 como argumento a ese método.
---
---
Paso 8 El constructor Array() tiene un método .fill() que se puede usar para llenar 
un array con un valor. Puedes usar esto para llenar tu array con el valor start.
---
---
El objeto global window representa la ventana (o pestaña) del navegador. 
Tiene una propiedad onload que te permite definir el comportamiento cuando la
 ventana ha cargado toda la página, incluidos los estilos y scripts.
*/