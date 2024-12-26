// APUNTE: Cómo usar addEventListener() en JavaScript para manejar eventos

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/* Tipos de Eventos en JavaScript:
Aquí tienes una lista completa de los tipos de eventos que puedes manejar con addEventListener(). Estos eventos se dividen en varias categorías:

1. Eventos de Mouse (Ratón):
click: Ocurre cuando un elemento es clicado.
dblclick: Ocurre cuando un elemento es doble clicado.
mousedown: Cuando el botón del ratón es presionado.
mouseup: Cuando el botón del ratón es liberado.
mouseover: Cuando el ratón pasa sobre un elemento.
mouseout: Cuando el ratón sale de un elemento.
mousemove: Cuando el ratón se mueve dentro de un elemento.
contextmenu: Ocurre cuando se hace clic derecho (abre el menú contextual).


2. Eventos de Teclado:
keydown: Ocurre cuando una tecla es presionada.
keyup: Ocurre cuando una tecla es liberada.
keypress: Ocurre cuando una tecla es presionada y mantenida.

3. Eventos de Documento/Janela:
DOMContentLoaded: Ocurre cuando el DOM ha sido completamente cargado.
load: Ocurre cuando la página completa ha sido cargada, incluyendo todos los recursos (imágenes, scripts).
unload: Ocurre cuando la página está siendo descargada (al cerrarla, por ejemplo).
resize: Ocurre cuando el tamaño de la ventana cambia.
scroll: Ocurre cuando la página es desplazada.

4. Eventos de Formulario:
submit: Ocurre cuando un formulario es enviado.
focus: Ocurre cuando un campo recibe el foco.
blur: Ocurre cuando un campo pierde el foco.
input: Ocurre cuando el valor de un campo de entrada cambia.

5. Eventos de Entrada (Input):
change: Ocurre cuando el valor de un input cambia (por ejemplo, al seleccionar una opción en un select).
input: Ocurre cuando el valor de un campo de texto cambia mientras se está escribiendo.
select: Ocurre cuando un usuario selecciona texto en un campo de entrada.

6. Eventos de Touch (Pantalla táctil):
touchstart: Ocurre cuando el usuario pone el dedo en la pantalla.
touchmove: Ocurre cuando el usuario desliza el dedo en la pantalla.
touchend: Ocurre cuando el usuario levanta el dedo de la pantalla.

7. Eventos de Clipboard (Portapapeles):
copy: Ocurre cuando se copia contenido.
cut: Ocurre cuando se corta contenido.
paste: Ocurre cuando se pega contenido.

8. Eventos de Drag & Drop (Arrastrar y soltar):
drag: Ocurre mientras se está arrastrando un elemento.
dragstart: Ocurre cuando comienza a arrastrarse un elemento.
dragend: Ocurre cuando se termina de arrastrar un elemento.
dragover: Ocurre cuando un elemento arrastrado está sobre una zona en la que puede soltarse.
drop: Ocurre cuando un elemento es soltado en una zona.

9. Eventos de Multimedia:
play: Ocurre cuando un video o audio comienza a reproducirse.
pause: Ocurre cuando un video o audio es pausado.
ended: Ocurre cuando un video o audio llega a su fin.
volumechange: Ocurre cuando el volumen cambia.

10. Otros Eventos Útiles:
focusin / focusout: Similar a focus y blur, pero se propagan.
error: Ocurre cuando se produce un error en la carga de un recurso (imagen, script).
animationstart, animationend, animationiteration: Eventos relacionados con animaciones CSS.
transitionend: Ocurre cuando una transición CSS ha terminado.
*/
/*

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


.addEventListener() es un método que se usa para registrar una función que será llamada cuando ocurra un evento específico en un elemento HTML. Es la forma más común de manejar eventos en el navegador.

Sintaxis:
elemento.addEventListener(tipoDeEvento, funcionCallback);

Parámetros:
- tipoDeEvento: Es una cadena que define el tipo de evento a escuchar, como 'click', 'keydown', 'scroll', etc.
- funcionCallback: Es la función que se ejecutará cuando ocurra el evento.

El método es flexible y permite agregar múltiples eventos al mismo elemento, sin sobrescribir otros eventos.
*/

// 1. Capturar un clic en un botón
// Ejemplo práctico: cambiar el texto de un botón cuando el usuario hace clic
const boton = document.querySelector('#miBoton');

boton.addEventListener('click', () => {
  boton.textContent = '¡Hiciste clic!';
});

// 2. Detectar cuando el usuario presiona una tecla
// Ejemplo práctico: mostrar un mensaje cuando el usuario presiona la tecla 'Enter' en un campo de texto
const inputTexto = document.querySelector('#miInput');

inputTexto.addEventListener('keydown', (evento) => {
  if (evento.key === 'Enter') {
    alert('Has presionado Enter');
  }
});

// 3. Ejecutar una acción cuando el mouse pasa sobre un elemento
// Ejemplo práctico: cambiar el color de un botón cuando el mouse está encima
const botonHover = document.querySelector('#botonHover');

botonHover.addEventListener('mouseover', () => {
  botonHover.style.backgroundColor = 'blue';
});

botonHover.addEventListener('mouseout', () => {
  botonHover.style.backgroundColor = ''; // Volver al color original
});

// 4. Manejar el envío de un formulario
// Ejemplo práctico: prevenir que el formulario se envíe si falta algún campo requerido
const formulario = document.querySelector('#miFormulario');

formulario.addEventListener('submit', (evento) => {
  const nombre = formulario.querySelector('#nombre').value;
  if (!nombre) {
    evento.preventDefault(); // Evitar el envío del formulario
    alert('El nombre es obligatorio');
  }
});

// CONCLUSIÓN:
// - addEventListener() te permite manejar múltiples tipos de eventos en los elementos del DOM.
// - Puedes registrar más de un evento en el mismo elemento sin sobrescribir los eventos anteriores.

