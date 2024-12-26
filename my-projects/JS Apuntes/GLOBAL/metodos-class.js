// APUNTE: Creación de métodos dentro de una clase (class) en JavaScript

/*
En JavaScript, los métodos dentro de una clase son funciones que pertenecen a las 
instancias de la clase. Estos métodos te permiten realizar operaciones con las 
propiedades del objeto, modificar su estado o realizar cálculos relacionados con el objeto.

Sintaxis básica:
class NombreClase {
  constructor(parametros) {
    // Propiedades
    this.propiedad = valor;
  }

  // Definición de métodos
  metodo() {
    // Código del método
  }
}
*/

// 1. Método para mostrar información de un objeto
// Ejemplo práctico: Mostrar la información de un usuario como texto
class Usuario {
    constructor(nombre, email, edad) {
      this.nombre = nombre;
      this.email = email;
      this.edad = edad;
    }
  
    // Método para mostrar la información del usuario
    mostrarInfo() {
      console.log(`Nombre: ${this.nombre}, Email: ${this.email}, Edad: ${this.edad}`);
    }
  }
  
  const usuario1 = new Usuario('Carlos', 'carlos@example.com', 30);
  usuario1.mostrarInfo(); // Resultado: 'Nombre: Carlos, Email: carlos@example.com, Edad: 30'
  
  // 2. Método para modificar una propiedad del objeto
  // Ejemplo práctico: Actualizar el email del usuario
  class UsuarioConEmail {
    constructor(nombre, email) {
      this.nombre = nombre;
      this.email = email;
    }
  
    // Método para cambiar el email del usuario
    cambiarEmail(nuevoEmail) {
      this.email = nuevoEmail;
      console.log(`El email ha sido actualizado a: ${this.email}`);
    }
  }
  
  const usuario2 = new UsuarioConEmail('Ana', 'ana@example.com');
  usuario2.cambiarEmail('nueva-ana@example.com'); // Resultado: 'El email ha sido actualizado a: nueva-ana@example.com'
  
  // 3. Métodos para calcular valores basados en propiedades del objeto
  // Ejemplo práctico: Calcular la edad en base a un año de nacimiento
  class Persona {
    constructor(nombre, anioNacimiento) {
      this.nombre = nombre;
      this.anioNacimiento = anioNacimiento;
    }
  
    // Método para calcular la edad actual
    calcularEdad() {
      const anioActual = new Date().getFullYear();
      return anioActual - this.anioNacimiento;
    }
  
    // Método para mostrar un saludo
    saludar() {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.calcularEdad()} años.`);
    }
  }
  
  const persona1 = new Persona('Luis', 1990);
  persona1.saludar(); // Resultado: 'Hola, soy Luis y tengo 34 años.' (dependiendo del año actual)
  
  // 4. Métodos estáticos en una clase
  // Ejemplo práctico: Contar cuántos objetos de una clase han sido creados
  class Contador {
    static totalInstancias = 0;
  
    constructor(nombre) {
      this.nombre = nombre;
      Contador.totalInstancias++;
    }
  
    // Método estático para mostrar cuántas instancias han sido creadas
    static mostrarContador() {
      console.log(`Total de instancias: ${Contador.totalInstancias}`);
    }
  }
  
  const objeto1 = new Contador('Objeto 1');
  const objeto2 = new Contador('Objeto 2');
  
  Contador.mostrarContador(); // Resultado: 'Total de instancias: 2'
  
  // 5. Método para interactuar con otros objetos
  // Ejemplo práctico: Transferir dinero entre cuentas de usuario
  class CuentaBancaria {
    constructor(titular, saldo) {
      this.titular = titular;
      this.saldo = saldo;
    }
  
    // Método para mostrar el saldo de la cuenta
    mostrarSaldo() {
      console.log(`Saldo de ${this.titular}: $${this.saldo}`);
    }
  
    // Método para transferir dinero a otra cuenta
    transferirDinero(cuentaDestino, monto) {
      if (this.saldo >= monto) {
        this.saldo -= monto;
        cuentaDestino.saldo += monto;
        console.log(`Se transfirieron $${monto} de la cuenta de ${this.titular} a la cuenta de ${cuentaDestino.titular}.`);
      } else {
        console.log('Fondos insuficientes.');
      }
    }
  }
  
  const cuenta1 = new CuentaBancaria('Carlos', 500);
  const cuenta2 = new CuentaBancaria('Ana', 300);
  
  cuenta1.transferirDinero(cuenta2, 200); // Resultado: 'Se transfirieron $200 de la cuenta de Carlos a la cuenta de Ana.'
  cuenta1.mostrarSaldo(); // Resultado: 'Saldo de Carlos: $300'
  cuenta2.mostrarSaldo(); // Resultado: 'Saldo de Ana: $500'
  
  /*
  ### Conclusión:
  - Los métodos en una clase permiten definir el comportamiento de los objetos.
  - Puedes usar métodos para realizar cálculos, modificar propiedades, interactuar con otros objetos, o ejecutar acciones específicas.
  - Los métodos estáticos pertenecen a la clase y no a sus instancias, y son útiles para llevar a cabo operaciones comunes entre todas las instancias (como contar cuántos objetos han sido creados).
  - Los métodos bien organizados dentro de una clase permiten mantener el código modular, limpio y fácil de entender.
  */
  