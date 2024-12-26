/*
add: Agrega una o más clases.
remove: Elimina una o más clases.
toggle: Alterna una clase (la agrega si no está, la quita si está).
contains: Verifica si un elemento tiene una clase.
replace: Reemplaza una clase por otra.
value: Devuelve o establece la cadena completa de clases.
*/

const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

const taskData = JSON.parse(localStorage.getItem("data")) || [];
let currentTask = {};

const addOrUpdateTask = () => {
  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
  const taskObj = {
    id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value,
  };

  if (dataArrIndex === -1) {
    taskData.unshift(taskObj);
  } else {
    taskData[dataArrIndex] = taskObj;
  }

  localStorage.setItem("data", JSON.stringify(taskData));
  updateTaskContainer()
  reset()
};

const updateTaskContainer = () => {
  tasksContainer.innerHTML = "";

  taskData.forEach(
    ({ id, title, date, description }) => {
        tasksContainer.innerHTML += `
        <div class="task" id="${id}">
          <p><strong>Title:</strong> ${title}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Description:</strong> ${description}</p>
          <button onclick="editTask(this)" type="button" class="btn">Edit</button>
          <button onclick="deleteTask(this)" type="button" class="btn">Delete</button> 
        </div>
      `
    }
  );
};


const deleteTask = (buttonEl) => {
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );

  buttonEl.parentElement.remove();
  taskData.splice(dataArrIndex, 1);
  localStorage.setItem("data", JSON.stringify(taskData));
}

const editTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );

  currentTask = taskData[dataArrIndex];

  titleInput.value = currentTask.title;
  dateInput.value = currentTask.date;
  descriptionInput.value = currentTask.description;

  addOrUpdateTaskBtn.innerText = "Update Task";

  taskForm.classList.toggle("hidden");  
}

const reset = () => {
addOrUpdateTaskBtn.innerText = "Add Task"
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
  taskForm.classList.toggle("hidden");
  currentTask = {};
}

if (taskData.length) {
  updateTaskContainer();
}

openTaskFormBtn.addEventListener("click", () =>
  taskForm.classList.toggle("hidden")
);

closeTaskFormBtn.addEventListener("click", () => {
  const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;
  const formInputValuesUpdated = titleInput.value !== currentTask.title || dateInput.value !== currentTask.date || descriptionInput.value !== currentTask.description;

  if (formInputsContainValues && formInputValuesUpdated) {
    confirmCloseDialog.showModal();
  } else {
    reset();
  }
});

cancelBtn.addEventListener("click", () => confirmCloseDialog.close());

discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  reset()
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addOrUpdateTask();
});
/*
const myTaskArr = [
    { task: "Walk the Dog", date: "22-04-2022" },
    { task: "Read some books", date: "02-11-2023" },
    { task: "Watch football", date: "10-08-2021" },
];

localStorage.setItem("data", JSON.stringify(myTaskArr));
const getTaskArr = localStorage.getItem("data")
console.log(getTaskArr);
const getTaskArrObj = JSON.parse(localStorage.getItem("data"));
console.log(getTaskArrObj);
localStorage.removeItem('data');
localStorage.clear()
*/




/*
---
También querrás que una tarea eliminada sea eliminada del almacenamiento local. 
Para esto, no necesitas los métodos removeItem() o clear(). Dado que ya usas splice() 
para eliminar la tarea del arreglo taskData, todo lo que necesitas hacer ahora es guardar 
el arreglo taskData nuevamente en el almacenamiento local.
---
---
Usar localStorage.clear() no solo eliminará un solo elemento del almacenamiento local, 
sino que eliminará todos los elementos.
---
---
Puedes usar localStorage.removeItem() para eliminar un elemento específico y localStorage.clear() 
para borrar todos los elementos en el almacenamiento local.
---
---
El elemento que recuperas es una cadena, ya que lo guardaste con JSON.stringify(). 
Para verlo en su forma original antes de guardarlo, debes usar JSON.parse().
---
---
localStorage ofrece métodos para guardar, recuperar y eliminar elementos. Los elementos que 
guardas pueden ser de cualquier tipo de dato en JavaScript.

Por ejemplo, el método setItem() se utiliza para guardar un elemento, y el método getItem() 
recupera el elemento. Para eliminar un elemento específico, puedes utilizar el método removeItem(), 
o si deseas eliminar todos los elementos en el almacenamiento, puedes usar clear().

Así es como puedes guardar un elemento:

Código de ejemplo:

localStorage.setItem("key", value); // el valor puede ser una cadena, número, u 
---
---
splice() es un método de arreglo que modifica arreglos eliminando, reemplazando o agregando 
elementos en un índice especificado, y también devuelve los elementos eliminados. Puede aceptar 
hasta tres argumentos: el primero es el índice obligatorio en el que comenzar, el segundo es el 
número de elementos a eliminar, y el tercero es un elemento de reemplazo opcional. Aquí tienes un ejemplo:

Código de ejemplo:

const fruits = ["mango", "date", "cherry", "banana", "apple"];

// Elimina "date" y "cherry" del arreglo comenzando en el índice 1
const removedFruits = fruits.splice(1, 2);

console.log(fruits); // [ 'mango', 'banana', 'apple' ]
console.log(removedFruits); // [ 'date', 'cherry' ]
---
---
.value: Obtiene el valor del campo de entrada (input).
.trim(): Elimina los espacios en blanco al principio y al final del valor, 
para asegurarse de que no cuente los espacios como valores válidos.
Condición || (OR): Verifica si alguno de los campos tiene un valor. Si al menos uno de los 
campos no está vacío, formInputsContainValues será true; de lo contrario, será false.
---
---
unshift() es un método de arreglo que se utiliza para agregar uno o más elementos al principio de un arreglo.
---
---
Date.now() devuelve el número de milisegundos transcurridos desde el 1 de enero de 1970 00:00:00 UTC.

Código de ejemplo:

console.log(Date.now()); // 1628586800000
---
---
taskForm.classList.toggle('hidden'): Esto alterna la clase hidden en el formulario taskForm. 
Si el formulario tiene la clase hidden, la elimina; si no la tiene, la agrega.
---
---
Si el usuario hace clic en el botón Cancel, querrás cancelar el proceso y cerrar el modal para que el usuario pueda seguir editando. El elemento HTML dialog tiene un método close() que se puede usar para cerrar un cuadro de diálogo modal en una página web.

Código de ejemplo:

dialogElement.close();
---
---
Un modal es un elemento que impide toda interacción con los elementos fuera de él hasta 
que el modal ha sido descartado.

El elemento HTML dialog tiene un método showModal() que se puede utilizar para mostrar un 
cuadro de diálogo modal en una página web.

Código de ejemplo:

dialogElement.showModal();
---
---
El método toggle agregará la clase si no está presente en el elemento, 
y la eliminará si está presente en el elemento.
---
---
variable currentTask y asígnale un objeto vacío. Esta variable se utilizará 
para rastrear el estado cuando se editen y descarten tareas.
---
---
constante taskData con un arreglo vacío. 
Este arreglo almacenará todas las tareas junto con sus datos 
asociados, incluyendo el título, la fecha de vencimiento y la 
descripción. Este almacenamiento te permitirá llevar un registro 
de las tareas, mostrarlas en la página y guardarlas en localStorage.
*/