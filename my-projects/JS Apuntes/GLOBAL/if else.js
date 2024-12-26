// APUNTE: Cómo usar if-else en JavaScript para manejar condiciones complejas

/*
La estructura `if-else` se usa para ejecutar código basado en ciertas condiciones. Si la condición es verdadera (`true`), el bloque de código dentro del `if` se ejecuta. Si es falsa (`false`), el código en el bloque `else` (o `else if`) puede ejecutarse.

Sintaxis básica:
if (condicion) {
  // Código a ejecutar si la condición es verdadera
} else if (otraCondicion) {
  // Código a ejecutar si otraCondicion es verdadera
} else {
  // Código a ejecutar si ninguna de las condiciones anteriores se cumple
}
*/

// Tipos de condiciones que se pueden usar en un `if-else`:

// 1. **Condiciones Lógicas**: Comparaciones básicas como `===`, `!==`, `>`, `<`, `>=`, `<=`

// Ejemplo práctico: Verificar la edad del usuario para acceder a una sección restringida
const edad = 20;
if (edad >= 18) {
  console.log('Acceso permitido. Eres mayor de edad.');
} else {
  console.log('Acceso denegado. Eres menor de edad.');
}

// 2. **Condiciones con Operadores Lógicos (`&&`, `||`)**: Permiten combinar múltiples condiciones

// Ejemplo práctico: Comprobar si un usuario tiene permisos de administrador y está activo
const esAdmin = true;
const estaActivo = true;
if (esAdmin && estaActivo) {
  console.log('Acceso a la configuración.');
} else {
  console.log('No tienes acceso.');
}

// 3. **Condiciones con Comparación de Cadenas**: Comparar cadenas de texto es común, por ejemplo, validar roles o estados

// Ejemplo práctico: Verificar el rol del usuario para mostrar diferentes acciones
const rol = 'admin';
if (rol === 'admin') {
  console.log('Tienes acceso total.');
} else if (rol === 'editor') {
  console.log('Puedes editar contenido.');
} else {
  console.log('Acceso limitado.');
}

// 4. **Condiciones con Valores Falsy/Truthy**: En JavaScript, algunos valores son "falsy" (falsos) y otros son "truthy" (verdaderos). Los valores "falsy" incluyen `false`, `0`, `''`, `null`, `undefined`, y `NaN`

// Ejemplo práctico: Verificar si un campo del formulario está vacío antes de enviarlo
const nombreUsuario = ''; // Valor vacío (falsy)
if (!nombreUsuario) {
  console.log('El nombre es obligatorio.');
} else {
  console.log(`Bienvenido, ${nombreUsuario}`);
}

// 5. **Condiciones con Comparaciones Anidadas**: Puedes usar `if-else` anidados para manejar múltiples casos complejos

// Ejemplo práctico: Determinar descuentos según el tipo de cliente y el monto total de la compra
const tipoCliente = 'premium';
const totalCompra = 150;

if (tipoCliente === 'premium' && totalCompra > 100) {
  console.log('Descuento del 20%.');
} else if (tipoCliente === 'regular' && totalCompra > 100) {
  console.log('Descuento del 10%.');
} else {
  console.log('No hay descuentos disponibles.');
}

// 6. **Condiciones con Valores Booleanos Directos**: A veces se usan directamente en `if` sin necesidad de comparaciones

// Ejemplo práctico: Verificar si el usuario ha aceptado los términos y condiciones
const haAceptadoTerminos = true;
if (haAceptadoTerminos) {
  console.log('Gracias por aceptar los términos.');
} else {
  console.log('Debes aceptar los términos antes de continuar.');
}

// 7. **Condiciones con Expresiones Ternarias**: Cuando tienes una condición simple, puedes usar el operador ternario (`? :`) para hacerlo más conciso

// Ejemplo práctico: Mostrar un mensaje basado en el estado de inicio de sesión
const estaLogueado = true;
const mensaje = estaLogueado ? 'Bienvenido de nuevo' : 'Inicia sesión';
console.log(mensaje); // Resultado: 'Bienvenido de nuevo'

// 8. **Condiciones con Funciones de Validación**: Puedes crear funciones que encapsulan la lógica de validación para simplificar los bloques `if-else`

// Ejemplo práctico: Validar si un usuario es elegible para un descuento basado en varias condiciones
const tieneDescuento = (edad, tipoCliente) => {
  return edad >= 18 && tipoCliente === 'premium';
};

if (tieneDescuento(20, 'premium')) {
  console.log('Tienes un descuento especial.');
} else {
  console.log('No aplicas para descuento.');
}

// 9. **Condiciones con Valores Dinámicos**: Puedes comparar variables dinámicas, como datos obtenidos de una API o inputs de usuario

// Ejemplo práctico: Verificar si un número ingresado por el usuario es mayor o menor a un valor
const inputUsuario = 50; // Este valor podría venir de un campo de texto
if (inputUsuario > 100) {
  console.log('El valor es mayor que 100.');
} else if (inputUsuario < 100) {
  console.log('El valor es menor que 100.');
} else {
  console.log('El valor es exactamente 100.');
}

// CONCLUSIÓN:
// - `if-else` es una herramienta fundamental en la programación que te permite controlar el flujo de la aplicación.
// - Las condiciones pueden ser simples comparaciones, combinaciones lógicas, valores booleanos directos o incluso validaciones complejas.
