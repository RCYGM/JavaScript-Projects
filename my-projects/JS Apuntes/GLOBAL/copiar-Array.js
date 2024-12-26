// APUNTE: Diferencias entre copiar arreglos con [...] y slice()

// 1. Copiar un array completo con el operador de propagación [...]
// Ejemplo práctico: clonar una lista de tareas pendientes para trabajar con una copia
const tareas = ['Hacer café', 'Escribir código', 'Revisar correos'];
const copiaTareas = [...tareas]; // Clonamos el array
console.log(copiaTareas); // Resultado: ['Hacer café', 'Escribir código', 'Revisar correos']

// 2. Copiar un array completo con slice()
// Ejemplo práctico: hacer una copia de la lista de compras
const compras = ['Pan', 'Leche', 'Huevos'];
const copiaCompras = compras.slice(); // Copiamos todo el array usando slice
console.log(copiaCompras); // Resultado: ['Pan', 'Leche', 'Huevos']

// 3. Copiar parte de un array con slice()
// Ejemplo práctico: copiar solo los elementos más recientes de un historial de transacciones
const transacciones = ['Depósito', 'Pago de tarjeta', 'Compra en tienda'];
const ultimasTransacciones = transacciones.slice(1); // Copiamos desde la segunda transacción
console.log(ultimasTransacciones); // Resultado: ['Pago de tarjeta', 'Compra en tienda']

// 4. Copia superficial: Ambos métodos crean una copia superficial
// Ejemplo práctico: modificar un objeto dentro de un array de usuarios
const usuarios = [{ nombre: 'Juan', edad: 30 }, { nombre: 'Ana', edad: 25 }];
const copiaUsuarios = [...usuarios]; // Clonamos el array con el operador de propagación
copiaUsuarios[0].edad = 31; // Modificamos la copia
console.log(usuarios[0].edad); // Resultado: 31, el cambio afecta al array original porque es una copia superficial

// 5. Compatibilidad con versiones antiguas: slice() es más antiguo y compatible
// Ejemplo práctico: en proyectos legacy, es mejor usar slice() para mayor compatibilidad
const productos = ['Laptop', 'Teclado', 'Ratón'];
const copiaProductosLegacy = productos.slice(); // Compatible con versiones antiguas de JavaScript
console.log(copiaProductosLegacy); // Resultado: ['Laptop', 'Teclado', 'Ratón']

// 6. Concisión: El operador [...] es más conciso y legible
// Ejemplo práctico: clonar rápidamente una lista de clientes
const clientes = ['Cliente 1', 'Cliente 2', 'Cliente 3'];
const copiaClientes = [...clientes]; // Más corto y claro que slice()
console.log(copiaClientes); // Resultado: ['Cliente 1', 'Cliente 2', 'Cliente 3']

// 7. Copia parcial más fácil con slice()
// Ejemplo práctico: extraer los últimos mensajes de un chat sin modificar el array original
const mensajes = ['Hola', '¿Cómo estás?', 'Todo bien'];
const ultimosMensajes = mensajes.slice(1); // Solo copiamos los mensajes más recientes
console.log(ultimosMensajes); // Resultado: ['¿Cómo estás?', 'Todo bien']

// CONCLUSIÓN:
// - [...] es más conciso y moderno, útil para copiar rápidamente un array completo.
// - slice() es más flexible, ya que permite copiar una parte del array y es más compatible con versiones antiguas de JavaScript.
