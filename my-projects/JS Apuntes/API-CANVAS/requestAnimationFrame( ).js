// APUNTE: Cómo usar requestAnimationFrame() en JavaScript para animaciones eficientes

/*
El método `requestAnimationFrame()` le dice al navegador que ejecute una función específica antes de que se repinte la siguiente vez, permitiendo que las animaciones sean más eficientes y fluidas. Es preferible a `setInterval()` o `setTimeout()` para animaciones porque optimiza el rendimiento ajustándose a la tasa de refresco del monitor.

Sintaxis:
requestAnimationFrame(funcionCallback);

- `funcionCallback`: Es la función que se ejecutará en el siguiente repintado de la pantalla.

### Ejemplos prácticos del uso de requestAnimationFrame() en el día a día de un programador:
*/

// 1. Crear una animación simple de movimiento
// Ejemplo práctico: animar un cuadrado que se mueve de izquierda a derecha en un canvas

const canvas = document.getElementById('miCanvas');
const ctx = canvas.getContext('2d');

let x = 0; // Posición inicial del cuadrado

function moverCuadrado() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
  ctx.fillStyle = 'blue';
  ctx.fillRect(x, 50, 50, 50); // Dibujar el cuadrado en la nueva posición

  x += 2; // Mover el cuadrado 2 píxeles hacia la derecha
  if (x < canvas.width) {
    requestAnimationFrame(moverCuadrado); // Llamar de nuevo para el siguiente frame
  }
}

moverCuadrado(); // Iniciar la animación

// 2. Crear una animación de rebote
// Ejemplo práctico: hacer que un círculo rebote de un lado al otro del canvas

let y = 50;
let velocidadY = 2;

function rebotarCirculo() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
  ctx.beginPath();
  ctx.arc(150, y, 25, 0, Math.PI * 2, false);
  ctx.fillStyle = 'red';
  ctx.fill();
  
  y += velocidadY; // Cambiar la posición vertical
  if (y + 25 > canvas.height || y - 25 < 0) {
    velocidadY = -velocidadY; // Invertir dirección si toca los bordes
  }

  requestAnimationFrame(rebotarCirculo); // Llamar de nuevo para el siguiente frame
}

rebotarCirculo(); // Iniciar la animación

// 3. Controlar la velocidad de una animación con timestamp
// Ejemplo práctico: controlar la velocidad del movimiento usando el tiempo

let lastTime = 0;
let velocidadX = 100; // Píxeles por segundo

function moverConVelocidad(timestamp) {
  if (!lastTime) lastTime = timestamp;
  
  const deltaTime = (timestamp - lastTime) / 1000; // Tiempo transcurrido en segundos
  lastTime = timestamp;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'green';
  ctx.fillRect(x, 150, 50, 50); // Dibujar el cuadrado

  x += velocidadX * deltaTime; // Mover el cuadrado a una velocidad constante

  if (x < canvas.width) {
    requestAnimationFrame(moverConVelocidad);
  }
}

requestAnimationFrame(moverConVelocidad); // Iniciar la animación

// 4. Pausar y reanudar una animación
// Ejemplo práctico: hacer una animación que se pueda pausar y reanudar
let animacionID;
let pausado = false;

function animarRectangulo() {
  if (!pausado) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'orange';
    ctx.fillRect(x, 200, 50, 50);
    
    x += 3; // Mover el rectángulo
  }

  animacionID = requestAnimationFrame(animarRectangulo); // Guardar la ID de la animación
}

animarRectangulo(); // Iniciar la animación

// Función para pausar y reanudar
function pausarReanudar() {
  pausado = !pausado;
  if (pausado) {
    cancelAnimationFrame(animacionID); // Pausar la animación
  } else {
    animarRectangulo(); // Reanudar la animación
  }
}

document.getElementById('botonPausa').addEventListener('click', pausarReanudar); // Botón para pausar y reanudar

/*
### Conclusión:
- `requestAnimationFrame()` es ideal para crear animaciones eficientes y fluidas en el navegador, ajustándose a la tasa de refresco de la pantalla.
- Su uso reduce el consumo de recursos y optimiza el rendimiento en comparación con `setInterval()` o `setTimeout()`.
- Puedes combinarlo con otros métodos para controlar la velocidad, hacer rebotes, y manipular el tiempo para crear animaciones dinámicas.
*/
