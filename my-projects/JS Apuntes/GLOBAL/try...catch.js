// APUNTE: Cómo usar try...catch en JavaScript para manejar errores

/*
`try...catch` es una estructura de control en JavaScript que permite manejar errores que puedan ocurrir durante la ejecución de un bloque de código. Es útil para evitar que un programa se detenga por completo ante un error inesperado, y permite proporcionar soluciones alternativas o mensajes informativos.

Sintaxis básica:
try {
  // Bloque de código que puede causar un error
} catch (error) {
  // Bloque que se ejecuta si ocurre un error
}

### Ejemplos prácticos del uso de try...catch en el día a día de un programador:
*/

// 1. Manejar errores al analizar JSON
// Ejemplo práctico: capturar un error al intentar analizar datos JSON incorrectos
const datosJSON = '{ "nombre": "Carlos", "edad": 30 ';  // Falta el cierre de la cadena JSON

try {
  const usuario = JSON.parse(datosJSON);  // Esto arrojará un error
  console.log(usuario);
} catch (error) {
  console.error('Error al analizar JSON:', error.message);
}
// Resultado: 'Error al analizar JSON: Unexpected end of JSON input'

// 2. Manejar errores en funciones asíncronas
// Ejemplo práctico: intentar hacer una solicitud a una API que puede fallar
async function obtenerUsuarios() {
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/invalid-url');
    if (!respuesta.ok) {
      throw new Error('Error al obtener los usuarios');  // Lanzar error si la respuesta no es OK
    }
    const data = await respuesta.json();
    console.log(data);
  } catch (error) {
    console.error('Error en la solicitud:', error.message);
  }
}

obtenerUsuarios();  // Intentar hacer la solicitud

// 3. Manejar errores al acceder a una propiedad inexistente
// Ejemplo práctico: intentar acceder a una propiedad de un objeto que puede no existir
const usuario = { nombre: 'Ana' };

try {
  console.log(usuario.email.toLowerCase());  // `email` no existe, esto arrojará un error
} catch (error) {
  console.error('Error al acceder a una propiedad:', error.message);
}
// Resultado: 'Error al acceder a una propiedad: Cannot read property 'toLowerCase' of undefined'

// 4. Validar datos de entrada
// Ejemplo práctico: capturar errores al validar datos en un formulario
function procesarFormulario(datos) {
  try {
    if (!datos.nombre || !datos.email) {
      throw new Error('Nombre y email son obligatorios');  // Lanza un error si faltan datos
    }
    console.log('Datos procesados correctamente:', datos);
  } catch (error) {
    console.error('Error en el formulario:', error.message);
  }
}

procesarFormulario({ nombre: 'Carlos' });  // Falta el email

// 5. Intentar ejecutar código arriesgado y garantizar una limpieza con finally
// Ejemplo práctico: manejar un error y asegurar que cierta acción (como cerrar un archivo) siempre ocurra
try {
  const resultado = 10 / 0;  // Esto no genera error en JS, pero supongamos que es un cálculo peligroso
  if (!isFinite(resultado)) {
    throw new Error('División por cero');
  }
} catch (error) {
  console.error('Error en el cálculo:', error.message);
} finally {
  console.log('Finalizando operación, independientemente de los errores');
}
// Resultado:
// 'Error en el cálculo: División por cero'
// 'Finalizando operación, independientemente de los errores'

/*
### Conclusión:
- `try...catch` es fundamental para manejar errores que podrían detener la ejecución de un programa.
- Es útil para trabajar con datos que pueden fallar, como solicitudes a APIs, análisis de JSON, o acceso a propiedades inexistentes.
- El bloque `finally` se puede utilizar para ejecutar acciones que deben ocurrir independientemente de si ocurre un error o no.
- Implementar un buen manejo de errores mejora la estabilidad y la experiencia del usuario en las aplicaciones.
*/
