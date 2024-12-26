// APUNTE: Cómo usar includes() en JavaScript para verificar si un valor está en un array o cadena

/*
.includes() es un método que verifica si un array o una cadena contiene un valor específico. Devuelve `true` si encuentra el valor, y `false` si no lo encuentra.

Sintaxis:
array.includes(valorBuscado);
cadena.includes(valorBuscado);

- valorBuscado: El valor que se busca dentro del array o cadena.
*/

// 1. Verificar si un número está en un array
// Ejemplo práctico: comprobar si un número está en la lista de números de la lotería
const numerosLoteria = [3, 15, 22, 8, 12];
const ganoLoteria = numerosLoteria.includes(15);
console.log(ganoLoteria); // Resultado: true

// 2. Verificar si un usuario está registrado
// Ejemplo práctico: comprobar si un usuario está en la lista de registrados
const usuariosRegistrados = ['Carlos', 'Ana', 'Luis'];
const estaRegistrado = usuariosRegistrados.includes('Ana');
console.log(estaRegistrado); // Resultado: true

// 3. Verificar si una cadena contiene una subcadena
// Ejemplo práctico: comprobar si una URL contiene un dominio específico
const url = 'https://www.mi-sitio.com';
const tieneDominioCom = url.includes('.com');
console.log(tieneDominioCom); // Resultado: true

// 4. Comprobar si una lista de productos contiene un elemento específico
// Ejemplo práctico: verificar si un producto está disponible en una tienda online
const inventario = ['Manzana', 'Plátano', 'Naranja'];
const productoDisponible = inventario.includes('Plátano');
console.log(productoDisponible); // Resultado: true

// 5. Verificar si un permiso existe en una lista de permisos
// Ejemplo práctico: comprobar si un usuario tiene un permiso específico
const permisos = ['lectura', 'escritura', 'eliminación'];
const tienePermiso = permisos.includes('escritura');
console.log(tienePermiso); // Resultado: true

// CONCLUSIÓN:
// - .includes() es ideal para verificar la existencia de un valor en un array o dentro de una cadena.
// - Muy útil para validaciones rápidas como búsqueda de elementos en listas o comprobación de permisos.
