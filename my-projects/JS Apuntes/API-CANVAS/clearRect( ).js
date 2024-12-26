// APUNTE: Cómo usar clearRect() en JavaScript para limpiar partes de un canvas

/*
El método `clearRect()` en la API de Canvas se utiliza para borrar un área específica del canvas, dejando esa área completamente transparente. Se suele usar junto con `fillRect()` y `requestAnimationFrame()` para crear animaciones o redibujar elementos.

Sintaxis:
contexto.clearRect(x, y, width, height);

- `x`: Coordenada X desde donde empieza el área a limpiar.
- `y`: Coordenada Y desde donde empieza el área a limpiar.
- `width`: Ancho del área a limpiar.
- `height`: Alto del área a limpiar.

### Ejemplos prácticos del uso de clearRect() en el día a día de un programador:
*/

// 1. Limpiar todo el canvas antes de redibujar
// Ejemplo práctico: limpiar el canvas completo para actualizar la animación en cada frame

const canvas = document.getElementById('miCanvas');
const ctx = canvas.getContext('2d');

function animarCuadrado() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar todo el canvas
  ctx.fillStyle = 'blue';
  ctx.fillRect(50, 50, 100, 100); // Dibujar un cuadrado en una nueva posición
}

animarCuadrado(); // Ejecutar la función para limpiar y dibujar

// 2. Limpiar una parte específica del canvas
// Ejemplo práctico: borrar solo una parte del canvas mientras se mantienen otros elementos
ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 200, 200); // Dibujar un rectángulo rojo

ctx.clearRect(50, 50, 100, 100); // Borrar un área de 100x100 en el centro del rectángulo

// 3. Crear una animación que se actualiza limpiando el canvas en cada frame
// Ejemplo práctico: usar `clearRect()` para crear una animación de un círculo que se mueve
let x = 0;

function animarCirculo() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar todo el canvas en cada frame
  ctx.beginPath();
  ctx.arc(x, 100, 30, 0, Math.PI * 2, false); // Dibujar un círculo
  ctx.fillStyle = 'green';
  ctx.fill();

  x += 2; // Mover el círculo hacia la derecha
  if (x < canvas.width) {
    requestAnimationFrame(animarCirculo); // Continuar la animación
  }
}

animarCirculo(); // Iniciar la animación

// 4. Limpiar una pequeña área dentro de una animación
// Ejemplo práctico: borrar solo el rastro de un objeto en movimiento
let y = 0;

function animarRectangulo() {
  ctx.fillStyle = 'orange';
  ctx.fillRect(50, y, 50, 50); // Dibujar un rectángulo que se mueve hacia abajo

  y += 2; // Mover el rectángulo hacia abajo
  ctx.clearRect(50, y - 4, 50, 50); // Limpiar solo el área donde estaba antes
  if (y < canvas.height) {
    requestAnimationFrame(animarRectangulo); // Continuar la animación
  }
}

animarRectangulo(); // Iniciar la animación

// 5. Limpiar un área específica como parte de un juego
// Ejemplo práctico: borrar una sección del canvas al hacer clic en un área específica (como destruir un bloque en un juego)
canvas.addEventListener('click', (event) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  // Limpiar el área donde se hizo clic
  ctx.clearRect(mouseX - 25, mouseY - 25, 50, 50); // Borrar un área de 50x50 alrededor del clic
});

/*
### Conclusión:
- `clearRect()` es útil para borrar partes específicas o todo el canvas, permitiendo redibujar y actualizar gráficos sin superposiciones.
- Es esencial en animaciones para evitar que los elementos anteriores dejen rastro, creando transiciones suaves.
- Se combina comúnmente con `requestAnimationFrame()` para hacer animaciones fluidas y limpias.
- También es útil para aplicaciones interactivas como juegos o editores gráficos donde necesitas limpiar o eliminar partes del dibujo.
*/
