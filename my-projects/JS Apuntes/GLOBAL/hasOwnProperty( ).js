// APUNTE: Cómo usar hasOwnProperty() en JavaScript para verificar propiedades en objetos

/*
El método `hasOwnProperty()` se utiliza para verificar si un objeto tiene una propiedad específica como una propiedad directa 
(no heredada). A diferencia del operador `in`, `hasOwnProperty()` no verifica las propiedades heredadas a través de la cadena de prototipos.

Sintaxis:
objeto.hasOwnProperty(propiedad);

- `propiedad`: El nombre de la propiedad que se desea verificar.

Este método es útil cuando se quiere verificar de forma segura si un objeto tiene una propiedad específica sin interferencia de 
las propiedades heredadas.

### Ejemplos prácticos del uso de hasOwnProperty() en el día a día de un programador:
*/

// 1. Verificar si un objeto tiene una propiedad específica
// Ejemplo práctico: verificar si un objeto de usuario tiene un email
const usuario = {
    nombre: 'Carlos',
    edad: 30,
  };
  
  console.log(usuario.hasOwnProperty('nombre'));  // Resultado: true
  console.log(usuario.hasOwnProperty('email'));   // Resultado: false
  
  // 2. Comparar hasOwnProperty() con el operador "in"
  // Ejemplo práctico: verificar si una propiedad es heredada o propia
  const persona = {
    nombre: 'Ana',
  };
  
  console.log(persona.hasOwnProperty('nombre'));  // Resultado: true (propiedad directa)
  console.log('nombre' in persona);               // Resultado: true (propiedad directa)
  
  // Herencia de propiedades
  const padre = { apellido: 'Pérez' };
  const hijo = Object.create(padre);
  hijo.nombre = 'Luis';
  
  console.log(hijo.hasOwnProperty('nombre'));     // Resultado: true (propiedad directa)
  console.log(hijo.hasOwnProperty('apellido'));   // Resultado: false (propiedad heredada)
  console.log('apellido' in hijo);                // Resultado: true (la propiedad está en la cadena de prototipos)
  
  // 3. Verificar propiedades en objetos dinámicos
  // Ejemplo práctico: verificar si un objeto de configuración tiene opciones específicas
  const configuracion = {
    tema: 'oscuro',
    notificaciones: true,
  };
  
  function verificarConfiguracion(obj, propiedad) {
    if (obj.hasOwnProperty(propiedad)) {
      console.log(`La configuración incluye la propiedad: ${propiedad}`);
    } else {
      console.log(`La configuración no incluye la propiedad: ${propiedad}`);
    }
  }
  
  verificarConfiguracion(configuracion, 'tema');           // Resultado: 'La configuración incluye la propiedad: tema'
  verificarConfiguracion(configuracion, 'sonido');         // Resultado: 'La configuración no incluye la propiedad: sonido'
  
  // 4. Evitar interferencia con propiedades heredadas
  // Ejemplo práctico: evitar errores al trabajar con objetos que heredan propiedades
  const objetoBase = { basePropiedad: true };
  const objetoExtendido = Object.create(objetoBase);
  objetoExtendido.propiedad = 'valor';
  
  if (objetoExtendido.hasOwnProperty('basePropiedad')) {
    console.log('Propiedad directa encontrada');
  } else {
    console.log('Propiedad heredada, no directa');  // Resultado: 'Propiedad heredada, no directa'
  }
  
  /*
  ### Conclusión:
  - `hasOwnProperty()` es útil para verificar si un objeto posee una propiedad directamente, sin incluir las propiedades heredadas 
  de su prototipo.

  - Es especialmente útil cuando trabajas con objetos dinámicos o que heredan propiedades, ya que te permite evitar errores de 
  validación o acceso no intencionado a propiedades heredadas.
  
  - Usar `hasOwnProperty()` es una buena práctica para manejar objetos de manera segura cuando se necesita confirmar que una 
  propiedad es directamente parte del objeto.
  */
  