// APUNTE: Cómo usar switch en JavaScript para controlar el flujo de la aplicación

/*
El `switch` es una estructura de control que te permite comparar una variable o expresión con múltiples valores posibles (casos). Es útil cuando tienes varias condiciones que comparar y no quieres usar múltiples `if-else`.

Sintaxis básica:
switch (expresion) {
  case valor1:
    // Código a ejecutar si expresion === valor1
    break;
  case valor2:
    // Código a ejecutar si expresion === valor2
    break;
  default:
    // Código a ejecutar si no coincide ningún caso
}
*/

// 1. Controlar acciones según el rol del usuario
// Ejemplo práctico: cambiar el comportamiento según el tipo de usuario en una aplicación
const rol = 'admin';

switch (rol) {
  case 'admin':
    console.log('Acceso total al sistema.');
    break;
  case 'usuario':
    console.log('Acceso limitado.');
    break;
  case 'invitado':
    console.log('Acceso de solo lectura.');
    break;
  default:
    console.log('Rol no reconocido.');
    break;
}

// 2. Elegir configuración de idioma
// Ejemplo práctico: cambiar el idioma de la interfaz según la selección del usuario
const idioma = 'es';

switch (idioma) {
  case 'es':
    console.log('Bienvenido!');
    break;
  case 'en':
    console.log('Welcome!');
    break;
  case 'fr':
    console.log('Bienvenue!');
    break;
  default:
    console.log('Idioma no soportado.');
    break;
}

// 3. Determinar el precio según la membresía
// Ejemplo práctico: establecer el precio de suscripción según el tipo de membresía de un usuario
const membresia = 'premium';

let precio;

switch (membresia) {
  case 'basica':
    precio = 5;
    break;
  case 'estandar':
    precio = 10;
    break;
  case 'premium':
    precio = 15;
    break;
  default:
    precio = 0;
    console.log('Tipo de membresía no válido.');
}

console.log(`El precio es: $${precio}`); // Resultado: El precio es: $15

// CONCLUSIÓN:
// - switch es útil para simplificar el control de flujo cuando tienes múltiples valores posibles.
// - Recuerda usar `break` para evitar que el código siga ejecutándose después de encontrar un caso coincidente.
