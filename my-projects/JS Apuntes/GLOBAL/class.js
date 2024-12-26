// APUNTE: Cómo usar class en JavaScript para crear clases y objetos

/*
Una `class` en JavaScript es una plantilla para crear objetos. Define propiedades y métodos que los objetos instanciados a partir de la clase tendrán.

Sintaxis básica:
class NombreDeLaClase {
  constructor(parametros) {
    // Definir propiedades
    this.propiedad = valor;
  }

  // Definir métodos
  metodo() {
    // Código del método
  }
}
*/

// 1. Crear una clase básica para representar un Usuario
// Ejemplo práctico: crear un modelo de Usuario con propiedades y un método para mostrar información
class Usuario {
    constructor(nombre, edad, email) {
      this.nombre = nombre;
      this.edad = edad;
      this.email = email;
    }
  
    mostrarInfo() {
      console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Email: ${this.email}`);
    }
  }
  
  // Crear instancias de la clase Usuario
  const usuario1 = new Usuario('Carlos', 30, 'carlos@example.com');
  const usuario2 = new Usuario('Ana', 25, 'ana@example.com');
  
  // Mostrar información de los usuarios
  usuario1.mostrarInfo(); // Resultado: 'Nombre: Carlos, Edad: 30, Email: carlos@example.com'
  usuario2.mostrarInfo(); // Resultado: 'Nombre: Ana, Edad: 25, Email: ana@example.com'
  
  // 2. Crear una clase con métodos adicionales
  // Ejemplo práctico: agregar un método para cambiar el email del usuario
  class UsuarioAvanzado {
    constructor(nombre, edad, email) {
      this.nombre = nombre;
      this.edad = edad;
      this.email = email;
    }
  
    mostrarInfo() {
      console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Email: ${this.email}`);
    }
  
    cambiarEmail(nuevoEmail) {
      this.email = nuevoEmail;
      console.log(`Email actualizado a: ${this.email}`);
    }
  }
  
  const usuario3 = new UsuarioAvanzado('Luis', 35, 'luis@example.com');
  usuario3.mostrarInfo(); // Muestra la información inicial
  usuario3.cambiarEmail('nuevo-luis@example.com'); // Actualiza el email
  
  // 3. Herencia entre clases
  // Ejemplo práctico: crear una clase Administrador que herede de Usuario, añadiendo un método extra
  class Administrador extends Usuario {
    constructor(nombre, edad, email, permisos) {
      super(nombre, edad, email); // Llamar al constructor de la clase padre (Usuario)
      this.permisos = permisos;
    }
  
    mostrarPermisos() {
      console.log(`Permisos del administrador: ${this.permisos.join(', ')}`);
    }
  }
  
  const admin1 = new Administrador('Sara', 28, 'sara@example.com', ['crear', 'eliminar', 'editar']);
  admin1.mostrarInfo(); // Usa el método heredado de Usuario
  admin1.mostrarPermisos(); // Muestra los permisos del administrador
  
  // 4. Métodos estáticos en una clase
  // Ejemplo práctico: agregar un método estático para contar cuántos usuarios han sido creados
  class ContadorUsuarios {
    static contador = 0;
  
    constructor(nombre) {
      this.nombre = nombre;
      ContadorUsuarios.contador++;
    }
  
    static mostrarContador() {
      console.log(`Total de usuarios: ${ContadorUsuarios.contador}`);
    }
  }
  
  const usuario4 = new ContadorUsuarios('Mario');
  const usuario5 = new ContadorUsuarios('Clara');
  
  ContadorUsuarios.mostrarContador(); // Resultado: 'Total de usuarios: 2'
  
  // 5. Uso de getters y setters
  // Ejemplo práctico: controlar la propiedad edad de un usuario con validación
  class UsuarioConEdad {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this._edad = edad; // Usamos una convención con "_" para la propiedad privada
    }
  
    // Getter para la edad
    get edad() {
      return this._edad;
    }
  
    // Setter para validar la edad
    set edad(valor) {
      if (valor < 0) {
        console.log('La edad no puede ser negativa.');
      } else {
        this._edad = valor;
      }
    }
  }
  
  const usuario6 = new UsuarioConEdad('Pedro', 20);
  console.log(usuario6.edad); // Resultado: 20
  
  usuario6.edad = -5; // Resultado: 'La edad no puede ser negativa.'
  usuario6.edad = 25; // Actualiza la edad correctamente
  console.log(usuario6.edad); // Resultado: 25
  
  /*
  CONCLUSIÓN:
  - class en JavaScript te permite crear plantillas de objetos con propiedades y métodos.
  - Puedes usar herencia para extender funcionalidades de clases, agregar métodos estáticos y usar getters y setters para controlar propiedades.
  
  Tipos de Funcionalidades que se pueden añadir con class:
  
  1. Constructores:
     - Se definen dentro de `constructor()` y permiten inicializar las propiedades de la clase cuando se crea una instancia.
  
  2. Métodos:
     - Son funciones asociadas a los objetos de la clase. Puedes definir cualquier número de métodos dentro de una clase, y estos operarán sobre las propiedades del objeto.
  
  3. Herencia:
     - Puedes extender una clase usando la palabra clave `extends`, lo que permite heredar métodos y propiedades de otra clase.
     - Ejemplo: Crear una clase `Administrador` que hereda de `Usuario`.
  
  4. Métodos Estáticos:
     - Los métodos estáticos son funciones que pertenecen a la clase en lugar de a las instancias de la clase. Se llaman directamente en la clase, no en los objetos creados a partir de ella.
     - Ejemplo: `ContadorUsuarios.mostrarContador()`.
  
  5. Getters y Setters:
     - Los getters permiten acceder a las propiedades de una clase de manera controlada.
     - Los setters permiten modificar las propiedades, agregando validaciones o lógica adicional si es necesario.
  
  CONCLUSIÓN FINAL:
  - class en JavaScript es una herramienta poderosa para la programación orientada a objetos (OOP).
  - Te ayuda a mantener el código organizado, modular y reutilizable.
  */
  