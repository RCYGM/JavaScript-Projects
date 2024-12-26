// APUNTE: Cómo usar some() en JavaScript para tareas comunes

// 1. Verificar si hay números mayores que un valor específico
// Ejemplo práctico: comprobar si en un array de calificaciones hay al menos una mayor a 8
const calificaciones = [6, 7, 9, 5];
const hayCalificacionAlta = calificaciones.some(calificacion => calificacion > 8);
console.log(hayCalificacionAlta); // Resultado: true

// 2. Verificar si hay un usuario mayor de edad
// Ejemplo práctico: saber si en un grupo de personas al menos una es mayor de 18 años
const personas = [
  { nombre: 'Carlos', edad: 15 },
  { nombre: 'Lucía', edad: 19 },
  { nombre: 'Pedro', edad: 13 }
];
const alMenosUnAdulto = personas.some(persona => persona.edad >= 18);
console.log(alMenosUnAdulto); // Resultado: true

// 3. Comprobar si hay valores inválidos (null o undefined)
// Ejemplo práctico: verificar si en un formulario hay campos incompletos
const formulario = [ 'Nombre', 'Apellido', null, 'Correo' ];
const camposIncompletos = formulario.some(campo => campo === null || campo === undefined);
console.log(camposIncompletos); // Resultado: true

// 4. Verificar si hay productos agotados
// Ejemplo práctico: comprobar si en una tienda online al menos un producto tiene stock 0
const inventario = [
  { producto: 'Teléfono', stock: 3 },
  { producto: 'Tablet', stock: 0 },
  { producto: 'Auriculares', stock: 5 }
];
const tieneProductosAgotados = inventario.some(item => item.stock === 0);
console.log(tieneProductosAgotados); // Resultado: true

// 5. Verificar si hay palabras largas en una lista
// Ejemplo práctico: saber si en una lista de nombres hay uno con más de 10 letras
const nombres = ['Pedro', 'Guillermo', 'Ana'];
const nombresLargos = nombres.some(nombre => nombre.length > 10);
console.log(nombresLargos); // Resultado: false

// CONCLUSIÓN:
// - some() es ideal para verificar si al menos un elemento de un array cumple con una condición.
// - Es útil para validaciones rápidas como verificar existencia de datos o condiciones específicas.
