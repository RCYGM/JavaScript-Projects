// APUNTE: Cómo usar "this" en JavaScript para referenciar contextos

/*
El keyword `this` en JavaScript hace referencia al **contexto** en el que se está ejecutando el código. 
El valor de `this` puede cambiar dependiendo de cómo se llame la función o cómo se defina el contexto.

El uso de `this` es uno de los conceptos fundamentales para entender la orientación a objetos en JavaScript.

### Casos comunes del uso de `this`:

1. **En el contexto global (modo no estricto)**:
   Cuando se usa `this` en el contexto global, hace referencia al objeto global (`window` en navegadores).

2. **En un objeto o método de objeto**:
   En el contexto de un método, `this` hace referencia al objeto que contiene el método.

3. **En una clase**:
   Dentro de una clase, `this` se refiere a la instancia del objeto que se está creando.

4. **En eventos**:
   En un manejador de eventos, `this` se refiere al elemento HTML que dispara el evento.

5. **En funciones arrow**:
   Las funciones `arrow` no tienen su propio `this`; en lugar de eso, heredan el `this` del contexto en el que fueron definidas.
*/

// 1. `this` en el contexto global (modo no estricto)
// Ejemplo práctico: Mostrar cómo `this` apunta al objeto global (window)
console.log(this); // Resultado: En un navegador, será el objeto `window`

// 2. `this` dentro de un objeto o método de objeto
// Ejemplo práctico: Usar `this` para referirse a las propiedades del mismo objeto
const usuario = {
  nombre: 'Carlos',
  edad: 30,
  mostrarInfo: function () {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
  }
};

usuario.mostrarInfo(); // Resultado: 'Nombre: Carlos, Edad: 30'

// 3. `this` en una clase
// Ejemplo práctico: Referenciar `this` para acceder a las propiedades del objeto instanciado
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

const persona1 = new Persona('Ana', 25);
persona1.saludar(); // Resultado: 'Hola, soy Ana y tengo 25 años.'

// 4. `this` en un manejador de eventos
// Ejemplo práctico: Usar `this` para referirse al elemento que disparó el evento
const boton = document.querySelector('#miBoton');
boton.addEventListener('click', function() {
  console.log(this); // `this` se refiere al elemento `#miBoton`
});

// 5. `this` en una función arrow
// Ejemplo práctico: Ver cómo `this` en una función arrow hereda el contexto donde fue definida
const objetoConArrow = {
  nombre: 'Luis',
  mostrarInfo: function() {
    const arrowFunction = () => {
      console.log(`Nombre: ${this.nombre}`); // `this` hace referencia al objeto `objetoConArrow`
    };
    arrowFunction();
  }
};

objetoConArrow.mostrarInfo(); // Resultado: 'Nombre: Luis'

// 6. `this` con el método call(), apply() y bind()
// Ejemplo práctico: Cambiar manualmente el valor de `this` con call, apply o bind

const persona2 = {
  nombre: 'Pedro',
  edad: 40
};

function mostrarDatos() {
  console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
}

// Usamos call() para establecer el valor de `this`
mostrarDatos.call(persona2); // Resultado: 'Nombre: Pedro, Edad: 40'

// Usamos bind() para crear una nueva función con `this` vinculado
const mostrarDatosVinculado = mostrarDatos.bind(persona2);
mostrarDatosVinculado(); // Resultado: 'Nombre: Pedro, Edad: 40'

/*
### Conclusión:
- El valor de `this` cambia dependiendo del **contexto** donde se utilice.
- En un objeto, `this` se refiere al objeto que contiene el método.
- En una clase, `this` se refiere a la instancia del objeto creado con esa clase.
- En eventos, `this` hace referencia al elemento que disparó el evento.
- Las funciones arrow no tienen su propio `this`, heredan el `this` del contexto en el que fueron creadas.
- Con `call()`, `apply()` y `bind()`, puedes establecer manualmente el valor de `this`.

Entender el valor de `this` en diferentes contextos es clave para escribir código orientado a objetos y trabajar con eventos en JavaScript.
*/
