// APUNTE: Cómo usar Object.values() en JavaScript para obtener los valores de un objeto

/*
`Object.values()` es un método que devuelve un array con los valores de las propiedades enumerables de un objeto. 
A diferencia de `Object.keys()` que devuelve las claves, `Object.values()` devuelve solo los valores.

Sintaxis:
Object.values(objeto);

Este método es útil para obtener todos los valores de un objeto de manera rápida, 
facilitando la manipulación y el análisis de datos en escenarios como formularios, 
objetos de configuración, etc.

### Ejemplos prácticos del uso de Object.values() en el día a día de un programador:
*/

// 1. Obtener los valores de un objeto
// Ejemplo práctico: obtener los valores de las propiedades de un objeto de usuario
const usuario = {
    nombre: 'Carlos',
    edad: 30,
    email: 'carlos@example.com'
  };
  
  const valoresUsuario = Object.values(usuario);
  console.log(valoresUsuario); 
  // Resultado: ['Carlos', 30, 'carlos@example.com']
  
  // 2. Iterar sobre los valores de un objeto
  // Ejemplo práctico: recorrer los valores de un objeto de producto y mostrar información al usuario
  const producto = {
    nombre: 'Laptop',
    precio: 1200,
    stock: 5
  };
  
  for (const valor of Object.values(producto)) {
    console.log(valor);
  }
  /*
  Resultado:
  Laptop
  1200
  5
  */
  
  // 3. Usar Object.values() con un objeto anidado
  // Ejemplo práctico: obtener los valores de un objeto que contiene otro objeto
  const empleado = {
    nombre: 'Ana',
    puesto: 'Desarrolladora',
    contacto: {
      email: 'ana@example.com',
      telefono: '123-456-789'
    }
  };
  
  const valoresEmpleado = Object.values(empleado);
  console.log(valoresEmpleado);
  /*
  Resultado:
  [
    'Ana',
    'Desarrolladora',
    { email: 'ana@example.com', telefono: '123-456-789' }
  ]
  */
  
  // 4. Calcular el total de valores numéricos con Object.values()
  // Ejemplo práctico: sumar los valores numéricos de un objeto de ventas diarias
  const ventas = {
    lunes: 200,
    martes: 150,
    miercoles: 300,
    jueves: 100,
    viernes: 400
  };
  
  const totalVentas = Object.values(ventas).reduce((total, valor) => total + valor, 0);
  console.log(`Total de ventas de la semana: $${totalVentas}`);
  // Resultado: 'Total de ventas de la semana: $1150'
  
  // 5. Usar Object.values() en combinación con otros métodos
  // Ejemplo práctico: combinar Object.values() con map() para transformar los valores de un objeto
  const configuracion = {
    modoOscuro: true,
    notificaciones: false,
    sonido: true
  };
  
  const configuracionTexto = Object.values(configuracion).map(valor => valor ? 'Activado' : 'Desactivado');
  console.log(configuracionTexto);
  // Resultado: ['Activado', 'Desactivado', 'Activado']
  
  /*
  ### Conclusión:
  - `Object.values()` es muy útil para obtener todos los valores de un objeto de manera rápida y simple.
  - Puedes utilizarlo para manipular los valores obtenidos, como calcular totales, filtrar, o transformar los datos.
  - También es una excelente herramienta cuando trabajas con objetos que contienen configuraciones, usuarios, productos, y otros tipos de datos.
  */
  