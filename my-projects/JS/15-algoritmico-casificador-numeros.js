const sortButton = document.getElementById('sort');

const sortInputArray = (event) => {
    event.preventDefault();
    const inputValues = [...document.getElementsByClassName('values-dropdown')].map((dropdown) => Number(dropdown.value));
    const sortedValues =  inputValues.sort((a, b) => {
        return a - b;
    }); //insertionSort(inputValues) //selectionSort(inputValues) //bubbleSort(inputValues);
    updateUI(sortedValues);
};


const updateUI = (array = []) => {
    array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num
    })
    
}

const bubbleSort = (array) => {
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){
            console.log(array, array[j], array[j + 1]);
            if (array[j] > array[j + 1]) {
                const temp  = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array
};


const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
       let  minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            console.log(array, array[j], array[minIndex])
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
        }
        const temp = array[i];
                array[i] = array[minIndex];
                array[minIndex] = temp;
                
    }
    return array
};


const insertionSort = (array) => {
    for(let i = 1; i < array.length; i++) {
        const currValue = array[i];
        let j = i - 1
        while (j >= 0 && array[j] > currValue) {
            array[j + 1] = array[j];
            j--;
        }
        array[ j + 1] = currValue;
    };
    return array;
};

sortButton.addEventListener('click', sortInputArray);

/*
Es posible que el botón Sort parezca funcionar correctamente cuando se hace clic, 
pero esto solo ocurre porque todos los valores del array son dígitos individuales, y 
la ordenación puede no funcionar como se espera con valores más complejos.

Cambia el valor y el texto del elemento option seleccionado de 1 a 10, y vuelve a hacer clic en el botón Sort.
---
---
De vuelta en tu función sortInputArray, necesitas obtener los valores de tus 
elementos select. Como todos ellos tienen la clase values-dropdown, puedes 
consultarlos todos de una vez.

Usa document.getElementsByClassName() para obtener todos los elementos con esta 
clase pasando el argumento "values-dropdown". Asígnalo a una variable inputValues 
con const.

Recuerda que el método .getElementsByClassName() devuelve una HTMLCollection, 
que es un objeto similar a un array de todos los elementos que tienen un nombre 
de clase coincidente. Puedes usar el operador de propagación (spread operator) 
para convertirlo en un array.
---
---

Vas a usar esta función como un listener de eventos para el botón sortButton. 
Dado que los botones asociados con un elemento de formulario envían el formulario 
por defecto, necesitas prevenir ese comportamiento. Llama a event.preventDefault() 
en tu función para lograrlo.
*/