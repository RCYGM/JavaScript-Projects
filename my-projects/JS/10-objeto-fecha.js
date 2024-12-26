const currentDateParagraph = document.getElementById('current-date');
const dateOptionsSelectElement = document.getElementById('date-options');
const date = new Date();
const day = date.getDate();
const month = date.getMonth() +1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

const formattedDate = `${day}-${month}-${year}`;

currentDateParagraph.textContent = formattedDate;
dateOptionsSelectElement.addEventListener("change", () => {
    switch (dateOptionsSelectElement.value) {
        case "yyyy-mm-dd":
          currentDateParagraph.textContent = formattedDate.split("-").reverse().join("-");
          break;
          case 'mm-dd-yyyy-h-mm':
            currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
            break;
            default: 
            currentDateParagraph.textContent = formattedDate;
      }
});


/*
---
En una declaración switch, el caso default se ejecuta cuando ninguna de las condiciones 
de los casos anteriores coincide con el valor evaluado. Sirve como un "catch-all" 
para cualquier otro caso posible. Por ejemplo:

Código de ejemplo:

const dayOfWeek = 7;

switch (dayOfWeek) {
  case 1:
    console.log("¡Es lunes!");
    break;
  case 2:
    console.log("¡Es martes!");
    break;
  // ...otros casos para días laborales
  default:
    console.log("¡Es fin de semana!");
}
---
---
Si tu declaración switch va a tener múltiples casos, es una buena práctica incluir una sentencia break.

La sentencia break le indicará al intérprete de JavaScript que deje de ejecutar sentencias. Sin agregar 
una sentencia break al final de cada bloque case, el programa ejecutará el código para todos los casos coincidentes:

Código de ejemplo:

switch (someVariable) {
  case 'case123':
    // Escribe tu lógica aquí
    break; // Termina la declaración switch
}
---

---
método join. Este método toma un arreglo de elementos y los une en una cadena. 
Similar al método split, el método join también toma un separador opcional. Si no proporcionas 
un separador, el separador predeterminado es una coma.

Aquí tienes un ejemplo de cómo usar el método join:

Código de ejemplo:

// devuelve "1-2-3-4-5"
[1, 2, 3, 4, 5].join("-");
---

---
reverse. Este método invierte el orden de los elementos en el arreglo en su lugar. 
El primer elemento se convierte en el último, y el último se convierte en el primero.

Aquí tienes un ejemplo de cómo usar el método reverse:

Código de ejemplo:

// devuelve [5, 4, 3, 2, 1]
[1, 2, 3, 4, 5].reverse();
---

---
El método split toma un parámetro conocido como separador. El separador se usa para indicarle a la 
computadora dónde debe ocurrir cada división.

Aquí tienes un ejemplo de usar una cadena vacía como separador:

Código de ejemplo:

// devuelve ["h", "e", "l", "l", "o"]
"hello".split("");

Otros ejemplos de separadores pueden incluir un espacio " ", o un guion "-". Si no proporcionas 
un separador, el método devolverá un arreglo con la cadena original como el único elemento.
---
---
El método split() se usa para dividir una cadena en subcadenas según un separador especificado. 
Luego devuelve estas subcadenas como elementos de un arreglo.

Aquí tienes un ejemplo de cómo tomar las palabras "Hello World" y devolver un arreglo de un solo elemento:

Código de ejemplo:

const greeting = "Hello World";
greeting.split(); // ["Hello World"]
---
---
Una declaración switch se usa para comparar una expresión con múltiples valores posibles y ejecutar diferentes 
bloques de código según la coincidencia. Es comúnmente utilizada para lógica condicional.

Para hacer esto, puedes agregar una cláusula case en la declaración switch que verifique una coincidencia con la expresión expr, seguida del código que debe ejecutarse si hay una coincidencia. Aquí hay un ejemplo donde la cláusula case verifica que expr sea igual a la cadena "case123":

Código de ejemplo:

switch (expr) {
  case 'case123':
    // Escribe tu lógica aquí
}
---
---
En JavaScript, el evento change se usa para detectar cuando el valor de un elemento HTML ha cambiado:
Código de ejemplo:

element.addEventListener("change", () => {
    
});
---

---
El método .getMinutes() devuelve un número entre 0 y 59, que representa los minutos de la fecha proporcionada.
---

---
El método .getHours() devuelve un número entre 0 y 23. 
Esto representa la hora de la fecha proporcionada, donde 0 es medianoche y 23 son las 11 p.m.
---

---
El método .getFullYear() devuelve un número que representa el año para la fecha proporcionada.
---

---
El método .getMonth() devuelve un número entre 0 y 11. Esto representa el mes de la fecha proporcionada, 
donde 0 es enero y 11 es diciembre. Como el número que este método devuelve es basado en cero, necesitas
 agregar 1 para obtener el número esperado del mes.
---
---
.getDate(), que devuelve un número entre 1 y 31 que representa el día del mes para esa fecha. Por ejemplo:

Código de ejemplo:

const date = new Date();
const dayOfTheMonth = date.getDate();
console.log(dayOfTheMonth); // 20
---

---
puedes usar el constructor Date() con el operador new para crear un nuevo 
objeto Date que devuelve una cadena con la fecha y hora actual:

Código de ejemplo:

const currentDate = new Date();
console.log(currentDate);

// Salida:
// Lun Ago 23 2021 15:31:00 GMT-0400 (Eastern Daylight Time)
---


*/