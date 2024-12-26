// APUNTE: Cómo usar fillRect() en JavaScript para dibujar rectángulos en un canvas

/*
El método `fillRect()` es parte de la API de Canvas en JavaScript y se utiliza para dibujar 
un rectángulo lleno de color en un elemento `<canvas>`. El rectángulo se dibuja con las coordenadas 
de su esquina superior izquierda, su ancho, y su alto.

Sintaxis:
contexto.fillRect(x, y, width, height);

- `x`: La coordenada X de la esquina superior izquierda del rectángulo.
- `y`: La coordenada Y de la esquina superior izquierda del rectángulo.
- `width`: El ancho del rectángulo.
- `height`: La altura del rectángulo.

### Ejemplos prácticos del uso de fillRect() en el día a día de un programador:
*/

// 1. Dibujar un rectángulo simple en un canvas
// Ejemplo práctico: dibujar un cuadrado en el canvas en la posición (50, 50)
const canvas = document.getElementById('miCanvas');
const ctx = canvas.getContext('2d');

// Dibujamos un rectángulo de 100x100 en la posición (50, 50)
ctx.fillStyle = 'blue'; // Establecemos el color de relleno
ctx.fillRect(50, 50, 100, 100); // Dibuja un rectángulo azul de 100x100

// 2. Dibujar varios rectángulos
// Ejemplo práctico: dibujar un tablero de ajedrez usando múltiples rectángulos
const tamanioCelda = 50;
for (let fila = 0; fila < 8; fila++) {
  for (let columna = 0; columna < 8; columna++) {
    // Alternamos el color entre blanco y negro
    ctx.fillStyle = (fila + columna) % 2 === 0 ? 'white' : 'black';
    ctx.fillRect(columna * tamanioCelda, fila * tamanioCelda, tamanioCelda, tamanioCelda);
  }
}

// 3. Crear un gráfico de barras simple
// Ejemplo práctico: dibujar un gráfico de barras con diferentes alturas
const datos = [100, 200, 150, 300, 250];
const anchoBarra = 40;
const espacio = 20;

datos.forEach((valor, index) => {
  const x = index * (anchoBarra + espacio);
  const y = canvas.height - valor; // La altura del rectángulo es el valor de los datos
  ctx.fillStyle = 'green';
  ctx.fillRect(x, y, anchoBarra, valor);
});

// 4. Cambiar el color de relleno en tiempo real
// Ejemplo práctico: dibujar rectángulos de colores que cambian según la interacción del usuario
const colores = ['red', 'blue', 'green', 'yellow', 'purple'];
colores.forEach((color, index) => {
  ctx.fillStyle = color;
  ctx.fillRect(20 + index * 60, 20, 50, 50); // Dibujar rectángulos de diferentes colores
});

/*
### Conclusión:
- `fillRect()` es una herramienta poderosa y simple para dibujar rectángulos en un canvas HTML.
- Es útil para tareas como dibujar formas básicas, gráficos de barras, tableros de juegos, y más.
- Puedes combinarlo con otros métodos de la API de canvas para crear gráficos más complejos y dinámicos.
*/
