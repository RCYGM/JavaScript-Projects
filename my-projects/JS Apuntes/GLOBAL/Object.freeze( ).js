// APUNTE: Cómo usar Object.freeze() para evitar la modificación de objetos

/*
Object.freeze() es un método que "congela" un objeto, evitando que se le puedan agregar, eliminar o modificar propiedades. Esto es útil cuando quieres asegurarte de que un objeto permanezca inmutable.

Sintaxis:
Object.freeze(objeto);
*/

// 1. Evitar modificaciones de un objeto de configuración
// Ejemplo práctico: congelar las configuraciones de una aplicación para evitar cambios no deseados
const configuracion = {
    tema: 'oscuro',
    idioma: 'español'
  };
  
  // Congelar el objeto
  Object.freeze(configuracion);
  
  // Intento de modificar una propiedad (no tendrá efecto)
  configuracion.tema = 'claro';
  console.log(configuracion.tema); // Resultado: 'oscuro' (no se modificó)
  
  // 2. Evitar modificaciones accidentales en constantes globales
  // Ejemplo práctico: definir roles de usuario y congelarlos para que no se puedan modificar en toda la aplicación
  const rolesUsuario = {
    ADMIN: 'admin',
    USUARIO: 'usuario',
    INVITADO: 'invitado'
  };
  
  Object.freeze(rolesUsuario);
  
  // Intento de agregar una nueva propiedad (no tendrá efecto)
  rolesUsuario.MODERADOR = 'moderador';
  console.log(rolesUsuario.MODERADOR); // Resultado: undefined (no se agregó)
  
  // 3. Congelar objetos anidados (solo congela el primer nivel)
  // Ejemplo práctico: evitar cambios en un objeto principal, pero permitir modificaciones en los objetos internos
  const app = {
    nombre: 'Mi App',
    configuracion: {
      idioma: 'español'
    }
  };
  
  Object.freeze(app);
  app.configuracion.idioma = 'inglés'; // Se permite porque el objeto anidado no está congelado
  console.log(app.configuracion.idioma); // Resultado: 'inglés'
  
  // CONCLUSIÓN:
  // - Object.freeze() es útil para garantizar que un objeto no pueda ser modificado.
  // - Solo congela el primer nivel de propiedades, los objetos anidados no se congelan automáticamente.
  