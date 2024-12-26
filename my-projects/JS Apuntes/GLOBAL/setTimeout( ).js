// APUNTE: Cómo usar setTimeout() en JavaScript para ejecutar código después de un tiempo específico

/*
El método `setTimeout()` se utiliza para ejecutar una función o bloque de código 
después de un tiempo determinado (en milisegundos). Es una forma de introducir 
retrasos en la ejecución de un programa, útil para efectos de temporización, 
animaciones, retrasar operaciones o manejar eventos en tiempo real.

Sintaxis:
setTimeout(funcionCallback, tiempoRetraso, [argumentos]);

- `funcionCallback`: La función o código que se ejecutará una vez transcurrido el tiempo.
- `tiempoRetraso`: El tiempo de espera en milisegundos antes de ejecutar la función.
- `[argumentos]`: (Opcional) Los parámetros que se pasarán a la función cuando se ejecute.

### Ejemplos prácticos del uso de setTimeout() en el día a día de un programador:
*/

// 1. Mostrar un mensaje después de un retraso
// Ejemplo práctico: mostrar un mensaje de bienvenida al usuario 3 segundos después de cargar la página
setTimeout(() => {
    console.log('¡Bienvenido a nuestra página web!');
  }, 3000); // 3000 ms = 3 segundos
  
  // 2. Simular la carga de un proceso
  // Ejemplo práctico: mostrar un mensaje de "cargando" durante 2 segundos antes de mostrar el contenido real
  console.log('Cargando...');
  
  setTimeout(() => {
    console.log('Contenido cargado');
  }, 2000); // Retraso de 2 segundos antes de mostrar el contenido
  
  // 3. Desactivar temporalmente un botón
  // Ejemplo práctico: desactivar un botón durante 5 segundos después de que el usuario haga 
  // clic para evitar múltiples clics seguidos
  const boton = document.getElementById('miBoton');
  
  boton.addEventListener('click', () => {
    boton.disabled = true;
    console.log('Botón desactivado, por favor espera...');
    
    setTimeout(() => {
      boton.disabled = false;
      console.log('Botón reactivado, ahora puedes hacer clic de nuevo');
    }, 5000); // Reactivar el botón después de 5 segundos
  });
  
  // 4. Crear una animación con retraso
  // Ejemplo práctico: mover un cuadro a la derecha con un retraso entre cada movimiento
  const cuadro = document.getElementById('miCuadro');
  let posicion = 0;
  
  function moverCuadro() {
    if (posicion < 300) {
      posicion += 50;
      cuadro.style.transform = `translateX(${posicion}px)`;
  
      setTimeout(moverCuadro, 1000); // Mover el cuadro cada 1 segundo
    }
  }
  
  moverCuadro(); // Iniciar la animación
  
  // 5. Enviar una notificación después de un retraso
  // Ejemplo práctico: mostrar una notificación 10 segundos después de que el usuario se haya logueado
  function notificarUsuario() {
    console.log('Enviando notificación...');
  }
  
  setTimeout(notificarUsuario, 10000); // Notificar después de 10 segundos
  
  // 6. Ejecución de una función con argumentos
  // Ejemplo práctico: pasar parámetros a una función que se ejecuta después de un retraso
  function saludarUsuario(nombre) {
    console.log(`Hola, ${nombre}!`);
  }
  
  setTimeout(saludarUsuario, 2000, 'Carlos'); // Saludar al usuario "Carlos" después de 2 segundos
  
  // 7. Cancelar una acción programada con clearTimeout
  // Ejemplo práctico: permitir que el usuario cancele una acción programada antes de que ocurra
  const idTimeout = setTimeout(() => {
    console.log('Esta acción se ejecutará después de 5 segundos');
  }, 5000);
  
  document.getElementById('cancelarAccion').addEventListener('click', () => {
    clearTimeout(idTimeout); // Cancelar la ejecución del setTimeout
    console.log('Acción cancelada');
  });
  
  /*
  ### Conclusión:
  - `setTimeout()` es una herramienta útil para ejecutar funciones con un 
  retraso específico, ideal para situaciones como mostrar mensajes, controlar 
  la interacción del usuario o gestionar animaciones.

  - Puedes usarlo para retrasar la ejecución de tareas como mostrar contenido, 
  notificaciones, o desactivar elementos temporalmente.
  
  - También puedes cancelar una tarea programada utilizando `clearTimeout()`, 
  lo que es útil cuando el usuario necesita cancelar una acción antes de que se ejecute.
  */
  