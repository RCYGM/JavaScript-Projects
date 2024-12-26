// APUNTE: Cómo usar startsWith() en JavaScript para verificar el inicio de una cadena de texto

/*
El método `startsWith()` se utiliza para verificar si una cadena de texto comienza con los caracteres especificados. 
Devuelve `true` si la cadena comienza con los caracteres dados, y `false` en caso contrario.

Sintaxis:
cadena.startsWith(valorBuscado, [posicion]);

- `valorBuscado`: La cadena de texto que se desea buscar al inicio.
- `[posicion]`: (Opcional) La posición en la cadena desde donde comenzar la búsqueda (por defecto es 0).

Este método es útil para validar si una cadena tiene un prefijo específico, como verificar URLs, archivos, o entradas de texto.

### Ejemplos prácticos del uso de startsWith() en el día a día de un programador:
*/

// 1. Verificar si una URL comienza con "https://"
// Ejemplo práctico: asegurar que todas las URLs utilicen HTTPS
const url = 'https://ejemplo.com';
if (url.startsWith('https://')) {
  console.log('La URL utiliza HTTPS');
} else {
  console.log('La URL no es segura');
}
// Resultado: 'La URL utiliza HTTPS'

// 2. Validar si un número de teléfono comienza con un prefijo específico
// Ejemplo práctico: comprobar si un número de teléfono comienza con el código de país "+1"
const telefono = '+1234567890';
if (telefono.startsWith('+1')) {
  console.log('El número de teléfono es de EE.UU.');
} else {
  console.log('El número de teléfono no es de EE.UU.');
}
// Resultado: 'El número de teléfono es de EE.UU.'

// 3. Comprobar el tipo de archivo por su extensión
// Ejemplo práctico: verificar si un archivo es de tipo PDF
const archivo = 'documento.pdf';
if (archivo.startsWith('documento')) {
  console.log('Es un documento válido');
} else {
  console.log('El archivo no es válido');
}
// Resultado: 'Es un documento válido'

// 4. Uso con la posición opcional
// Ejemplo práctico: verificar si una palabra aparece en una cadena a partir de una posición específica
const frase = 'JavaScript es un lenguaje increíble';
console.log(frase.startsWith('lenguaje', 14));  // Comienza a buscar desde el índice 14
// Resultado: true

// 5. Filtrar elementos en un array que comienzan con ciertos caracteres
// Ejemplo práctico: filtrar una lista de nombres que comienzan con "Ana"
const nombres = ['Ana', 'Carlos', 'Anabel', 'Luisa'];
const nombresFiltrados = nombres.filter(nombre => nombre.startsWith('Ana'));
console.log(nombresFiltrados);
// Resultado: ['Ana', 'Anabel']

// 6. Comprobar si un texto de entrada del usuario comienza con una palabra clave
// Ejemplo práctico: detectar si el texto comienza con la palabra "pedido" en un sistema de atención al cliente
const mensajeUsuario = 'pedido: Necesito ayuda con mi compra';
if (mensajeUsuario.startsWith('pedido')) {
  console.log('El mensaje está relacionado con un pedido');
} else {
  console.log('El mensaje no está relacionado con un pedido');
}
// Resultado: 'El mensaje está relacionado con un pedido'

/*
### Conclusión:
- `startsWith()` es ideal para verificar si una cadena comienza con ciertos caracteres, lo que es útil en 
validaciones de entrada de datos, procesamiento de URLs o extensiones de archivos.

- Puedes usar el parámetro opcional de posición para verificar desde un índice específico en la cadena.

- Es una herramienta útil para tareas comunes como filtrado de listas, validaciones de seguridad, y detección de patrones en texto.
*/
