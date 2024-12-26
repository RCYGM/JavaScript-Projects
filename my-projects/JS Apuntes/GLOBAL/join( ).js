// APUNTE: Cómo usar join() en JavaScript para unir elementos de un array

/*
.join() es un método que une todos los elementos de un array en una cadena de texto. Puedes especificar un separador para los elementos; si no se proporciona, por defecto se usa una coma.

Sintaxis:
array.join(separador);

- separador (opcional): El carácter o cadena que se utilizará para separar los elementos en la cadena resultante.
*/

// 1. Crear una lista separada por comas
// Ejemplo práctico: convertir un array de nombres en una cadena para mostrar en un reporte
const nombres = ['Carlos', 'Ana', 'Luis'];
const listaNombres = nombres.join(', ');
console.log(listaNombres); // Resultado: 'Carlos, Ana, Luis'

// 2. Generar una URL a partir de un array de segmentos
// Ejemplo práctico: unir segmentos de una URL en un solo string
const segmentosURL = ['https://', 'mi-sitio', '.com', '/inicio'];
const urlCompleta = segmentosURL.join('');
console.log(urlCompleta); // Resultado: 'https://mi-sitio.com/inicio'

// 3. Formatear una fecha en formato legible
// Ejemplo práctico: convertir un array de partes de una fecha en una cadena legible
const fecha = [2024, 9, 27];
const fechaFormateada = fecha.join('-');
console.log(fechaFormateada); // Resultado: '2024-9-27'

// 4. Unir líneas de código en un archivo generado dinámicamente
// Ejemplo práctico: unir varias líneas de código en una sola cadena para generar archivos dinámicos
const lineasCodigo = ['<!DOCTYPE html>', '<html>', '<head></head>', '<body></body>', '</html>'];
const archivoHTML = lineasCodigo.join('\n');
console.log(archivoHTML);
/*
Resultado:
<!DOCTYPE html>
<html>
<head></head>
<body></body>
</html>
*/

// CONCLUSIÓN:
// - join() es útil para convertir un array en una cadena de texto con el formato que elijas.
// - Ideal para formatear listas, URLs, fechas o construir cadenas de texto dinámicamente.
