// APUNTE: Cómo usar .bind() en JavaScript para cambiar el contexto de "this"

/*
El método `.bind()` en JavaScript se utiliza para crear una nueva función que, cuando se llame, 
tendrá un valor específico de `this`, sin importar cómo o dónde se invoque. Esto es útil para 
asegurarse de que las funciones mantengan el contexto adecuado, especialmente cuando se usan 
como callbacks o manejadores de eventos.

Sintaxis:
const nuevaFuncion = funcionOriginal.bind(thisArg);

- `thisArg`: El valor que deseas que `this` tenga dentro de la nueva función.

### Ejemplos prácticos del uso de .bind() en el día a día de un programador:
*/

// 1. Usar .bind() para mantener el contexto de "this" en un manejador de eventos
// Ejemplo práctico: asegurar que "this" en el método de clase se refiera al objeto instanciado
class Usuario {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    // Método que usa "this" para referirse al objeto instanciado
    mostrarNombre() {
      console.log(`Nombre del usuario: ${this.nombre}`);
    }
  }
  
  const usuario1 = new Usuario('Carlos');
  const boton = document.querySelector('#miBoton');
  
  // Sin bind, "this" dentro de mostrarNombre() se refiere al botón, no al objeto Usuario
  boton.addEventListener('click', usuario1.mostrarNombre.bind(usuario1)); // Forzamos "this" a referirse al objeto usuario1
  
  // 2. Usar .bind() para pasar argumentos predefinidos
  // Ejemplo práctico: crear una función con argumentos predefinidos utilizando .bind()
  function saludar(saludo, nombre) {
    console.log(`${saludo}, ${nombre}!`);
  }
  
  const saludarHola = saludar.bind(null, 'Hola'); // Predefinimos el argumento "saludo"
  saludarHola('Carlos'); // Resultado: 'Hola, Carlos!'
  saludarHola('Ana');    // Resultado: 'Hola, Ana!'
  
  // 3. Usar .bind() con métodos en objetos
  // Ejemplo práctico: asegurar que un método de objeto mantenga su referencia cuando se pasa como callback
  const objeto = {
    nombre: 'Luis',
    mostrarNombre: function () {
      console.log(`Mi nombre es ${this.nombre}`);
    }
  };
  
  const mostrarNombreEnConsola = objeto.mostrarNombre.bind(objeto); // Vinculamos "this" al objeto
  setTimeout(mostrarNombreEnConsola, 1000); // Después de 1 segundo, se muestra "Mi nombre es Luis"
  
  // 4. Usar .bind() para crear funciones reutilizables con contexto fijo
  // Ejemplo práctico: crear funciones específicas para objetos diferentes usando el mismo método
  const objeto1 = { nombre: 'Objeto 1' };
  const objeto2 = { nombre: 'Objeto 2' };
  
  function mostrarContexto() {
    console.log(`Este es el contexto de: ${this.nombre}`);
  }
  
  const mostrarContextoObjeto1 = mostrarContexto.bind(objeto1);
  const mostrarContextoObjeto2 = mostrarContexto.bind(objeto2);
  
  mostrarContextoObjeto1(); // Resultado: 'Este es el contexto de: Objeto 1'
  mostrarContextoObjeto2(); // Resultado: 'Este es el contexto de: Objeto 2'
  
  /*
  ### Conclusión:
  - El método `.bind()` es esencial para asegurar que las funciones conserven el valor correcto de `this`, 
  especialmente cuando se pasan como callbacks o manejadores de eventos.

  - También es útil para crear funciones con argumentos predefinidos, o cuando se necesita que un método 
  siempre use un contexto específico.
  
  - A diferencia de `.call()` o `.apply()`, `.bind()` no ejecuta la función inmediatamente, sino que 
  devuelve una nueva función con el contexto fijo.
  */
  