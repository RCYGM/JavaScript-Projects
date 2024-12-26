// Definiremos los datos que necesitamos para obtener la información del input y limpiarla
const checkButton = document.getElementById('check-btn');
const texInput = document.querySelector('#text-input');



// Esta función limpiará el string del input
const cleanInputString = (textToInput) => {
    return textToInput.toLowerCase().replace(/[^a-z0-9]/g, '');  // Elimina solo caracteres no alfanuméricos
};


const validacionPolidromo = () => {
    const originalInput = texInput.value.trim();  // Mantén el texto original y elimina espacios al principio y final
    const limpiarInput = cleanInputString(originalInput);  // Limpia para validar
    const reverseInput = limpiarInput.split('').reverse().join('');
    
    const result = document.getElementById('result');
    // Usa el texto original para mostrar el resultado
    result.innerText = reverseInput === limpiarInput ? `${originalInput} is a palindrome` : `${originalInput} is not a palindrome`;
};

const alertaInput = () => {
    if (texInput.value.trim() === "") { // .trim() elimina espacios vacíos
        alert("Please input a value");
    } else {
        validacionPolidromo();
    }
}
checkButton.addEventListener('click', alertaInput);

texInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        alertaInput();
        return
    }
})

/*
Resumen de los metacaracteres y banderas:
Metacarácter	Significado
\s	Espacios en blanco
\S	No espacios en blanco
\d	Dígito (0-9)
\D	No dígito
\w	Carácter de palabra (letras, números y guion bajo)
\W	Elimina cualquier carácter que no sea una letra o número. (Mayúscula)
\b	Límite de palabra
\B	No límite de palabra

Bandera	Descripción
g	Búsqueda global (todas las coincidencias)
i	Búsqueda sin distinguir entre mayúsculas y minúsculas
m	Búsqueda en modo multilínea
s	Permite que . coincida con saltos de línea
u	Búsqueda en modo Unicode
y	Búsqueda pegajosa

¿Qué haces después de encontrar lo que buscas?

// 1. .value
// Se usa para obtener o establecer el valor del campo de input.
const inputValue = document.querySelector('#text-input').value;

// 2. .match(regex)
// Se utiliza para buscar coincidencias en una cadena según una expresión regular. 
// Devuelve un array con las coincidencias o null si no hay coincidencias.
const matches = inputValue.match(/[a-z]/g);  // Devuelve todas las letras en el input

// 3. .replace(regex, replacement)
// Busca coincidencias con la expresión regular y las reemplaza con el texto proporcionado.
// Útil para eliminar o modificar partes de la cadena.
const cleanedInput = inputValue.replace(/\s+/g, '');  // Elimina todos los espacios

// 4. .test(regex)
// Verifica si una cadena coincide con una expresión regular, devuelve true o false.
const isValid = /[a-z]/.test(inputValue);  // Verifica si el input contiene letras minúsculas

// 5. .split(separator)
// Divide una cadena en un array según un separador, que puede ser un carácter o una expresión regular.
const wordsArray = inputValue.split(' ');  // Divide el input en palabras, usando el espacio como separador

// 6. .trim()
// Elimina los espacios en blanco al inicio y al final de una cadena.
const trimmedInput = inputValue.trim();  // Elimina espacios antes y después del texto

// 7. .toLowerCase()
// Convierte todos los caracteres de la cadena a minúsculas.
const lowerCaseInput = inputValue.toLowerCase();  // Convierte el input a minúsculas

// 8. .toUpperCase()
// Convierte todos los caracteres de la cadena a mayúsculas.
const upperCaseInput = inputValue.toUpperCase();  // Convierte el input a mayúsculas

*/
