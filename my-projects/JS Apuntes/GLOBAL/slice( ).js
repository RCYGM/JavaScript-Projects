// APUNTE: Cómo usar slice() en JavaScript para tareas comunes de un programador

// 1. Extraer una parte de un array
// Ejemplo práctico: obtener los elementos del array que representan los días hábiles de la semana
const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const diasHabiles = dias.slice(1, 6); // Extraemos de lunes a viernes
console.log(diasHabiles); // Resultado: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']

// 2. Extraer parte de una cadena
// Ejemplo práctico: extraer el nombre de usuario de una dirección de correo electrónico
const email = 'usuario@example.com';
const nombreUsuario = email.slice(0, email.indexOf('@'));
console.log(nombreUsuario); // Resultado: 'usuario'

// 3. Copiar un array completo
// Ejemplo práctico: crear una copia de una lista de clientes para realizar pruebas sin afectar la original
const clientes = ['Cliente 1', 'Cliente 2', 'Cliente 3'];
const copiaClientes = clientes.slice(); // Copiamos el array completo
console.log(copiaClientes); // Resultado: ['Cliente 1', 'Cliente 2', 'Cliente 3']

// 4. Eliminar los primeros elementos
// Ejemplo práctico: eliminar la primera tarea de una lista de tareas completadas
const tareasCompletadas = ['Tarea 1', 'Tarea 2', 'Tarea 3'];
const tareasRestantes = tareasCompletadas.slice(1); // Eliminamos la primera tarea
console.log(tareasRestantes); // Resultado: ['Tarea 2', 'Tarea 3']

// 5. Obtener los últimos elementos de un array
// Ejemplo práctico: obtener los últimos dos productos añadidos a una tienda online
const productos = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];
const ultimosProductos = productos.slice(-2); // Tomamos los últimos dos productos
console.log(ultimosProductos); // Resultado: ['Producto 3', 'Producto 4']

// CONCLUSIÓN:
// - slice() es útil para extraer una parte específica de un array o cadena sin modificar el original.
// - Puedes usar slice() para copiar arrays, eliminar elementos iniciales o finales, y mucho más.
