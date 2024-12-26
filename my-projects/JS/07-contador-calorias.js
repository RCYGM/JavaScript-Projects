const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');

let isError = false;

function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, '');
}

function isInvalidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
}
console.log(isInvalidInput("1e3"));
/*El método match devuelve un arreglo con las coincidencias encontradas en la cadena.

Aquí tienes un desglose completo de esa información:

"1e3" es el valor coincidente con el regex /\d+e\d+/i.
index: 0 es el índice del valor coincidente en la cadena.
input: '1e3' es la cadena original que coincidió.
groups: undefined son los grupos coincidentes, que no se utilizan en este caso. Aprenderás más sobre grupos en un proyecto posterior.
*/
console.log(isInvalidInput("10"));
/*Cuando abres la consola, deberías ver el resultado null. El método match devuelve 
null cuando no se encuentra ninguna coincidencia. En este caso, la función isInvalidInput 
debería devolver null cuando la entrada es un número válido sin notación científica.

null en JavaScript es un valor primitivo especial que representa la ausencia intencional 
de un valor. En un contexto booleano, null se considera un valor "falsy" que se evalúa 
como false en una declaración condicional. */

function addEntry() {
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
    const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input
      type="number"
      min="0"
      id="${entryDropdown.value}-${entryNumber}-calories"
      placeholder="Calories"
    />`;
    targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
}

function calculateCalories(e) {// Esta función será otro listener de eventos, por lo que el primer argumento que se pase será el evento del navegador; e es un nombre común para este parámetro.
    e.preventDefault();
    isError = false;

    const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type=number]');
    const lunchNumberInputs = document.querySelectorAll('#lunch input[type=number]');
    const dinnerNumberInputs = document.querySelectorAll('#dinner input[type=number]');
    const snacksNumberInputs = document.querySelectorAll('#snacks input[type=number]');
    const exerciseNumberInputs = document.querySelectorAll('#exercise input[type=number]');

    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
    const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

    if (isError) {
        return;
    }

    const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
    const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
    const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
    output.innerHTML = `
    <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
    <hr>
    <p>${budgetCalories} Calories Budgeted</p>
    <p>${consumedCalories} Calories Consumed</p>
    <p>${exerciseCalories} Calories Burned</p>
    `;

    output.classList.remove('hide');
}

function getCaloriesFromInputs(list) {
    let calories = 0;
    for (const item of list) {// Los valores del NodeList que pasarás a la lista consistirán en elementos input. Por lo tanto, querrás mirar el atributo value de cada elemento.
        const currVal = cleanInputString(item.value);
        const invalidInputMatch = isInvalidInput(currVal);
        /*En JavaScript, los valores pueden ser "truthy" o "falsy". Un valor es "truthy" si 
        se evalúa como verdadero cuando se convierte en un booleano. Un valor es "falsy" si 
        se evalúa como falso cuando se convierte en un booleano. null es un ejemplo de un 
        valor "falsy". */

        if (invalidInputMatch) {//una declaración if que verifique si invalidInputMatch es "truthy".
            alert(`Invalid Input: ${invalidInputMatch[0]}`);
            isError = true;
            return null
        }
        calories += Number(currVal);
    }
    return calories;
}

function clearForm() {
    const inputContainers = Array.from(document.querySelectorAll('.input-container'));

    for (const container of inputContainers) {
        container.innerHTML = '';
    }

    budgetNumberInput.value = '';
    output.innerText = '';
    output.classList.add('hide');
}

addEntryButton.addEventListener("click", addEntry);
calorieCounter.addEventListener("submit", calculateCalories);
clearButton.addEventListener('click', clearForm);



/*Preguntas
Para que sirve una variable regex osea const regex = /hello/?
*/

/* Apuntes:
\s coincidirá con cualquier carácter de espacio en blanco.
\d es una clase de caracteres abreviada para coincidir con cualquier dígito

Banderas
g que significa "global", le indicará al patrón que continúe buscando después de haber encontrado una coincidencia.
i que significa "insensible a mayúsculas y minúsculas". (Esta bandera hace que tu patrón no distinga entre mayúsculas y minúsculas.)

is y has: se usan para expresar booleano (true o false) is para lo que no es posesivo 
y has para lo que es posesivo EJ:

let isLoggedIn = true;  // Indica si el usuario ha iniciado sesión.
let hasAdminAccess = false;  // Indica si el usuario tiene acceso de administrador.

NOTA: Los valores de un campo de entrada HTML se reciben como cadenas en JavaScript.
En HTML, las entradas numéricas permiten la notación exponencial (como 1e10). Necesitas filtrar esas entradas.

El método querySelectorAll() devuelve un NodeList de todos los elementos que coinciden con el selector. 
Un NodeList es un objeto similar a un arreglo, por lo que puedes acceder a los elementos usando notación de corchetes.

El método querySelectorAll() devuelve un NodeList de todos los elementos que coinciden con el selector. 
Un NodeList es un objeto similar a un arreglo, por lo que puedes acceder a los elementos usando notación de corchetes.

La propiedad innerHTML establece o devuelve el contenido HTML dentro de un elemento.

Un NodeList es una lista de elementos como un arreglo.

getElementById, devuelve un Element, no un NodeList.

Recuerda que document.querySelectorAll devuelve un NodeList, que es similar a un arreglo pero no es un arreglo. Sin embargo, el objeto Array tiene un método .from() que acepta un objeto similar a un arreglo y devuelve un arreglo. Esto es útil cuando deseas acceder a métodos más robustos de los arreglos, sobre los cuales aprenderás en un proyecto futuro.

El siguiente ejemplo toma un NodeList de elementos li y lo convierte en un arreglo de elementos li:

Código de ejemplo

<ul>
  <li>List 1</li>
  <li>List 2</li>
  <li>List 3</li>
</ul>

const listItemsArray = Array.from(document.querySelectorAll('li'));

console.log(listItemsArray); // Output: (3) [li, li, li]

La diferencia entre innerText e innerHTML es que innerText no renderizará elementos HTML, sino que mostrará las etiquetas y el contenido como texto sin formato.S

*/