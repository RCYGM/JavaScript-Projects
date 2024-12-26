// En este apunte, explicaremos el uso de `addEventListener` en JavaScript con el tipo de evento `PointerEvent`.
// Los eventos de puntero (PointerEvents) son una interfaz que combina eventos de mouse, tacto y stylus en un solo evento.
// A continuación, desglosaremos cada propiedad clave de un `PointerEvent` cuando se usa `addEventListener` para entender mejor cómo manipular eventos en dispositivos modernos.

document.addEventListener('pointerdown', (event) => {
    console.log(event);
});

/*
Resumen de Propiedades del `PointerEvent` cuando usamos `addEventListener`:

1. `isTrusted`: 
   - Un valor booleano que indica si el evento fue generado por el usuario (true) o creado por un script (false).
   
2. `pointerId`: 
   - Un identificador único para el dispositivo de entrada. Esto es útil cuando tienes múltiples punteros activos, como varios dedos en una pantalla táctil.

3. `width` y `height`: 
   - Representan el ancho y la altura del área de contacto del puntero en la pantalla, en píxeles. Para un mouse, suelen ser 1, mientras que para una pantalla táctil pueden variar.

4. `pressure`: 
   - Mide la presión aplicada con el puntero, en un rango de 0 a 1. Un mouse siempre da `0` o `0.5`, mientras que un stylus puede dar valores más precisos.

5. `altKey`, `ctrlKey`, `shiftKey`, `metaKey`: 
   - Booleanos que indican si alguna de estas teclas de modificador está presionada mientras se genera el evento.

6. `clientX` y `clientY`: 
   - Las coordenadas del puntero en el viewport (área visible de la ventana) cuando ocurrió el evento. Muy útiles para calcular la posición relativa del puntero en pantalla.

7. `pointerType`: 
   - Indica el tipo de dispositivo que generó el evento, como "mouse", "pen" o "touch". Esto permite adaptar la interacción según el tipo de dispositivo.

8. `isPrimary`: 
   - Un valor booleano que indica si el evento se generó con el puntero primario (por ejemplo, el dedo índice en pantallas táctiles).

9. `timeStamp`: 
   - Muestra el tiempo en milisegundos desde que se creó el evento, útil para medir el tiempo entre eventos, como para detectar doble clics.

10. `target` y `currentTarget`: 
   - `target`: Elemento específico en el que ocurrió el evento.
   - `currentTarget`: Elemento en el cual se escuchó el evento, útil en funciones donde quieres referenciar el elemento que invocó el evento.

11. `type`: 
   - Describe el tipo de evento (en este caso, "pointerdown", "pointermove", etc.), que puede usarse en un mismo `addEventListener` para identificar la acción específica.

Ejemplo de uso:
Cuando usas `addEventListener` para escuchar un evento de puntero, puedes personalizar la interacción de acuerdo con las propiedades del `PointerEvent` capturado, permitiendo que un sitio sea responsivo y sensible a dispositivos de entrada variados (mouse, tacto, stylus).

Prueba práctica:
    - Para probar este código, abre la consola del navegador y haz clic en cualquier lugar de la pantalla.
    - Observa el `PointerEvent` impreso en la consola, explorando cada propiedad para familiarizarte con su propósito y cómo podría ayudarte en una aplicación real.
*/
