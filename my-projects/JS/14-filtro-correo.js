const messageInput = document.getElementById('message-input');
const result = document.getElementById('result');
const checkMessageButton = document.getElementById('check-message-btn');

const helpRegex = /please help|assist me/i;
const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;
const freeRegex = /(?:\s|^)fr[e3][e3] m[o0]n[e3]y(?:\s|$)/i;
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;



const isSpam = (msg) => denyList.some((regex) => regex.test(msg));
//helpRegex.test(msg)
//msg.match(helpRegex)

const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

checkMessageButton.addEventListener('click', () => {
    if(messageInput.value === ""){
        alert("Please enter a message.");
        return;
    }
    result.textContent = isSpam(messageInput.value) ?  "Oh no! This looks like a spam message." :  "This message does not seem to contain any spam.";
    messageInput.value = ""; 
});

/*
Al igual que el ancla ^, puedes usar el ancla $ para coincidir con el final de la cadena.
---
---
Para coincidir con el principio del texto, puedes usar el ancla ^. 
Esto afirma que tu patrón coincide desde el inicio de la cadena completa.
---
---
Para crear un grupo no capturable en una expresión regular, puedes agregar ?: después del paréntesis de 
apertura de un grupo. Por ejemplo, (?:a|b) coincidirá con "a" o "b", pero no capturará el resultado.
---
---
El cuantificador + significa "coincidir con el carácter anterior al menos una vez".
---
---
Reemplaza el primer espacio literal con la expresión \s*. La clase de caracteres \s 
coincide con espacios en blanco, como espacios, tabulaciones y saltos de línea. 
El cuantificador * significa "coincidir con el carácter anterior 0 o más veces".
---
---
El cuantificador ? coincide con cero o una ocurrencia del carácter o grupo anterior. 
Por ejemplo, la expresión regular /colou?r/ coincide con "color" y "colour", ya que la "u" es opcional.
---
---
Un grupo de captura es una forma de definir una parte de la expresión que se debe capturar y guardar 
para su referencia posterior. Puedes definir un grupo de captura colocando una parte de tu expresión 
entre paréntesis. Por ejemplo, /h(i|ey) camper/ coincidirá con "hi camper" o "hey camper", y capturará 
"i" o "ey" en un grupo.
---
---
El valor en dólares puede tener más de un dígito. Para hacer coincidir esto, se puede usar el cuantificador +, 
que coincide con una o más ocurrencias consecutivas. Por ejemplo, la expresión regular /a+/ coincide con una o 
más "a" consecutivas.
---
---
Necesitas hacer coincidir un número antes del texto "dollars". Si bien 
podrías escribir "0|1|2" y así sucesivamente, las expresiones regulares 
tienen una función que hace esto más fácil.

Una clase de caracteres se define con corchetes y coincide con cualquier 
carácter dentro de los corchetes. Por ejemplo, [aeiou] coincide con cualquier 
carácter en la lista "aeiou". También puedes definir un rango de caracteres 
para coincidir usando un guion. Por ejemplo, [a-z] coincide con cualquier carácter de "a" a "z".
---
---
Los arrays tienen un método .some(). Al igual que el método .filter(), .some() 
acepta una función de callback que debe tomar un elemento del array como argumento. 
El método .some() devolverá true si la función de callback devuelve true para al menos un elemento del array.

Aquí tienes un ejemplo de una llamada al método .some() para comprobar si 
algún elemento en el array es una letra mayúscula:

const arr = ["A", "b", "C"];
arr.some(letter => letter === letter.toUpperCase());
---
---
En lugar de usar el método .match(), puedes usar el método .test() de una 
expresión regular para verificar si una cadena coincide con el patrón. 
A diferencia de .match(), .test() devuelve un valor booleano que indica 
si la cadena coincide con el patrón o no.
*/