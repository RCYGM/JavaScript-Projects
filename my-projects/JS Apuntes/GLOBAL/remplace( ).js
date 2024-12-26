// APUNTE: Cómo usar replace() en JavaScript para reemplazar cadenas de texto

/*
El método `replace()` en JavaScript se utiliza para buscar un valor en una cadena de texto y reemplazarlo por otro valor. 
Puede trabajar con cadenas de texto simples o con expresiones regulares, lo que lo hace muy flexible para manipular texto.

Sintaxis:
cadena.replace(valorBuscado, nuevoValor);

- `valorBuscado`: La cadena o expresión regular que se desea buscar.
- `nuevoValor`: La cadena de reemplazo que sustituirá el valor buscado.

Este método solo reemplaza la primera coincidencia si se utiliza con una cadena, pero puede reemplazar múltiples coincidencias 
si se usa con una expresión regular global.

### Ejemplos prácticos del uso de replace() en el día a día de un programador:
*/

// 1. Reemplazar la primera coincidencia en una cadena
// Ejemplo práctico: corregir un error tipográfico en una cadena de texto
const mensaje = 'Hola, mundo. Bienvenido al mundo de la programación.';
const mensajeCorregido = mensaje.replace('mundo', 'universo');
console.log(mensajeCorregido);  
// Resultado: 'Hola, universo. Bienvenido al mundo de la programación.'

// 2. Reemplazar todas las coincidencias con una expresión regular
// Ejemplo práctico: corregir todas las ocurrencias de una palabra en un texto
const texto = 'El perro corrió rápido. El perro saltó alto.';
const textoModificado = texto.replace(/perro/g, 'gato');
console.log(textoModificado);  
// Resultado: 'El gato corrió rápido. El gato saltó alto.'

// 3. Usar una función para modificar el valor de reemplazo
// Ejemplo práctico: cambiar el formato de fechas en un texto
const textoFechas = 'Hoy es 01/01/2023 y mañana será 02/01/2023.';
const textoConFormatoNuevo = textoFechas.replace(/(\d{2})\/(\d{2})\/(\d{4})/g, '$2-$1-$3');
console.log(textoConFormatoNuevo);
// Resultado: 'Hoy es 01-01-2023 y mañana será 01-02-2023.'

// 4. Reemplazar parte de una URL para cambiar el dominio
// Ejemplo práctico: cambiar todas las referencias a un dominio obsoleto
const url = 'Visita nuestro sitio en http://ejemplo.com y http://ejemplo.com/ayuda';
const nuevaUrl = url.replace(/http:\/\/ejemplo\.com/g, 'https://nuevo-sitio.com');
console.log(nuevaUrl);
// Resultado: 'Visita nuestro sitio en https://nuevo-sitio.com y https://nuevo-sitio.com/ayuda'

// 5. Reemplazar caracteres especiales
// Ejemplo práctico: sanitizar un texto de entrada eliminando caracteres no deseados
const entradaUsuario = '¡Hola! ¿Cómo estás?';
const textoSanitizado = entradaUsuario.replace(/[¡¿?]/g, '');  // Eliminamos los signos de puntuación
console.log(textoSanitizado);
// Resultado: 'Hola Como estás'

// 6. Usar replace() en combinación con otras funciones
// Ejemplo práctico: normalizar datos de un formulario cambiando el formato de las entradas
const nombreIngresado = '    Juan Pérez     ';
const nombreLimpio = nombreIngresado.replace(/\s+/g, ' ').trim();  // Elimina espacios extra
console.log(nombreLimpio);  
// Resultado: 'Juan Pérez'

/*
### Conclusión:
- `replace()` es ideal para reemplazar texto en cadenas, ya sea una sola coincidencia o múltiples, usando expresiones regulares.

- Se puede usar en tareas como la corrección de errores tipográficos, modificación de URLs, formateo de fechas, 
y sanitización de entradas de usuario.

- Cuando se necesita realizar múltiples reemplazos, es mejor usar expresiones regulares con el modificador `g` 
para que el reemplazo sea global.
*/
