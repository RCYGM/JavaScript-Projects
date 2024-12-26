/*Paso 1
CamperBot está tratando de construir un cambiador de color de fondo aleatorio. Pero sigue encontrando problemas y necesita tu ayuda para depurar el código.

CamperBot ya agregó el HTML y CSS para el proyecto, pero está confundido porque ninguno de los estilos y el contenido se muestra en la página.

Cuando abren la consola, ven este mensaje:

Código de ejemplo

SyntaxError: unknown: Unexpected token, expected "," (5:2)
Los errores de sintaxis se generan cuando el motor de JavaScript encuentra algo que no puede interpretar. En este caso, parece que CamperBot tiene errores de sintaxis en el array darkColorsArr.

Corrige los errores de sintaxis en el array darkColorsArr y deberías ver que el contenido y los estilos aparecen en la página.
*/
const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C"
    "#616A6B"
    "#4A235A"
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
  ];



/*Paso 2
Ahora, CamperBot está tratando de crear una función que devuelva un índice aleatorio del array darkColorsArr. Pero se ha encontrado con el siguiente mensaje de error:

Código de ejemplo

Uncaught ReferenceError: math is not defined
Un error de referencia (ReferenceError) se genera cuando se hace referencia a una variable inexistente. En este caso, parece que CamperBot está tratando de usar math, pero JavaScript no tiene un objeto math.

Corrige el error de CamperBot en la línea math.random() y abre la consola de nuevo.
*/
console.log(darkColorsArr.length * math.random())



/*Paso 3
Ahora que el error de referencia ha sido resuelto, la consola muestra los resultados correctos para un número aleatorio entre 0 y 9. Pero CamperBot no esperaba ver números decimales como estos:

Código de ejemplo

javascript
Copiar código
0.015882899879771095
2.114596286197641
6.040964780197666
Actualiza la declaración de consola para imprimir un número entero entre 0 y 9.

Recuerda que trabajaste con un método en el proyecto de juego de rol que redondea un número al número entero más cercano.
*/
function getRandomIndex() {
    console.log(darkColorsArr.length * Math.random())
  }
  getRandomIndex();
/*Paso 4
CamperBot ha terminado de construir la función getRandomIndex y está funcionando como se esperaba.

Pero ahora se encuentra con este problema al intentar crear una referencia al elemento body en el DOM:

Código de ejemplo

javascript
Copiar código
Uncaught TypeError: document.queryselector is not a function
Un TypeError significa que el código está intentando realizar una operación en un valor que no es del tipo esperado.

Corrige el TypeError actualizando el método document.queryselector al nombre correcto del método que selecciona un elemento del DOM.
*/
const body = document.queryselector("body");



/*Paso 5
CamperBot ha creado una nueva variable llamada bgHexCodeSpanElement para almacenar la referencia al elemento span con el id bg-hex-code. Sin embargo, cuando intenta registrar esa variable en la consola, obtiene null.

null es un valor especial en JavaScript que representa la ausencia de un valor. Esto puede suceder cuando intentas acceder a una propiedad de un objeto que no existe.

En este caso, CamperBot no está pasando el selector correcto al método document.querySelector.

Corrige la línea document.querySelector("bg-hex-code") para que seleccione correctamente el elemento con el id bg-hex-code.
*/
const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("bg-hex-code");

console.log(bgHexCodeSpanElement);



/*Paso 6
CamperBot ha creado ahora una función llamada changeBackgroundColor que cambia el color de fondo de la página a un color aleatorio del array darkColorsArr. La función también muestra el código hexadecimal para ese nuevo color.

Cuando intenta probar esta función, nota que el color de fondo no está cambiando y el texto muestra lo siguiente:

Código de ejemplo

Hex Code: undefined
undefined aparece aquí porque la variable color no se está estableciendo correctamente.

Corrige el error en la línea darkColorsArr[getRandomIndex] para que la variable color se establezca en un color aleatorio del array darkColorsArr.
*/
function changeBackgroundColor() {
    const color = darkColorsArr[getRandomIndex];
  
    bgHexCodeSpanElement.innerText = color;
    body.style.backgroundColor = color;
  }
  changeBackgroundColor();


/*Paso 7
CamperBot está intentando crear una nueva variable llamada btn para almacenar la referencia al elemento button con el id click-btn.

Sin embargo, cuando intenta registrar el elemento button en la consola, ve que el elemento button es null.

Abre el archivo index.html para ver el nombre correcto del id de ese elemento button.

Luego, corrige el error en la línea document.querySelector("#click-btn");.
*/
const btn = document.querySelector("#click-btn");
console.log(btn);


/*Paso 8
CamperBot ha terminado de construir su cambiador de color de fondo aleatorio. Sin embargo, cuando hace clic en el botón, el color de fondo no cambia.

Parece que está intentando usar la propiedad onclick, pero la está utilizando incorrectamente. La propiedad onclick debe asignarse a una referencia de función.

Corrige el error en la línea btn.onclick = changeBackgroundColor();.

Recuerda que trabajaste con la propiedad onclick en el proyecto de juego de rol. Revisa la solución final para ver cómo se usó correctamente onclick.

Una vez que corrijas ese último error, ¡el cambiador de color de fondo aleatorio estará completo!
*/
btn.onclick = changeBackgroundColor();


/* codigo completo y corregido
const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
  ];
  
  function getRandomIndex() {
    const randomIndex = Math.floor(darkColorsArr.length * Math.random());
    return randomIndex;
  }
  
  const body = document.querySelector("body");
  const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");
  
  function changeBackgroundColor() {
    const color = darkColorsArr[getRandomIndex()];
  
    bgHexCodeSpanElement.innerText = color;
    body.style.backgroundColor = color;
  }
  const btn = document.querySelector("#btn");
  
  btn.onclick = changeBackgroundColor();
*/