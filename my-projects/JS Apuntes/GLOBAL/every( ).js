// APUNTE: Cómo usar every() en JavaScript para tareas comunes

// 1. Verificar si todos los números son positivos
// Ejemplo práctico: asegurarse de que todos los valores de un array son positivos
const calificaciones = [10, 9, 8, 7];
const sonPositivas = calificaciones.every(calificacion => calificacion > 0);
console.log(sonPositivas); // Resultado: true

// 2. Verificar si todos los usuarios son mayores de edad
// Ejemplo práctico: comprobar si en un grupo de personas todos tienen 18 años o más
const personas = [
  { nombre: 'Carlos', edad: 20 },
  { nombre: 'Lucía', edad: 25 },
  { nombre: 'Pedro', edad: 18 }
];
const todosSonAdultos = personas.every(persona => persona.edad >= 18);
console.log(todosSonAdultos); // Resultado: true

// 3. Verificar si todos los productos están disponibles (stock mayor que 0)
// Ejemplo práctico: revisar si todos los productos de una tienda tienen stock disponible
const inventario = [
  { producto: 'Teléfono', stock: 3 },
  { producto: 'Tablet', stock: 0 },
  { producto: 'Auriculares', stock: 5 }
];
const todoDisponible = inventario.every(item => item.stock > 0);
console.log(todoDisponible); // Resultado: false, la Tablet tiene stock 0

// 4. Verificar si todos los elementos son cadenas
// Ejemplo práctico: asegurarse de que todos los valores ingresados en un formulario son cadenas
const campos = ['Nombre', 'Apellido', 'Dirección'];
const todosCadenas = campos.every(campo => typeof campo === 'string');
console.log(todosCadenas); // Resultado: true

// 5. Comprobar si todas las tareas están completadas
// Ejemplo práctico: verificar si todas las tareas en una lista están completadas
const listaTareas = [
  { tarea: 'Lavar la ropa', completada: true },
  { tarea: 'Limpiar la casa', completada: true },
  { tarea: 'Cocinar', completada: false }
];
const completadas = listaTareas.every(tarea => tarea.completada);
console.log(completadas); // Resultado: false, no todas las tareas están completadas

// CONCLUSIÓN:
// - every() es ideal para asegurarse de que todos los elementos de un array cumplen con una condición.
// - Es útil en validaciones donde necesitas que todo el conjunto cumpla con una propiedad específica.
