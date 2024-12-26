// APUNTE: Cómo usar Object en JavaScript para trabajar con objetos

/*
`Object` es un tipo de dato fundamental en JavaScript que se utiliza para almacenar colecciones 
de datos y entidades más complejas. Un objeto es una colección de pares clave-valor, donde las 
claves son cadenas (strings) o símbolos, y los valores pueden ser cualquier tipo de dato, incluidos 
otros objetos o funciones.

### Métodos comunes del objeto Object y su uso práctico:

1. **Object.assign()**: Copia las propiedades de uno o más objetos a un objeto destino.
2. **Object.keys()**: Devuelve un array con las claves (propiedades) enumerables de un objeto.
3. **Object.values()**: Devuelve un array con los valores de las propiedades enumerables de un objeto.
4. **Object.entries()**: Devuelve un array de arrays, donde cada subarray es un par clave-valor del objeto.
5. **Object.freeze()**: Congela un objeto para que sus propiedades no puedan ser modificadas.
6. **Object.seal()**: Sella un objeto, permitiendo modificar propiedades existentes pero no agregar 
o eliminar propiedades.
7. **Object.create()**: Crea un nuevo objeto con un objeto prototipo especificado.
8. **Object.hasOwnProperty()**: Verifica si el objeto tiene una propiedad específica, ignorando la 
cadena de prototipos.

### Ejemplos prácticos del uso de Object en el día a día de un programador:
*/

// 1. Usar Object.assign() para fusionar objetos
// Ejemplo práctico: combinar configuraciones predeterminadas con configuraciones personalizadas de un usuario
const configPorDefecto = { tema: 'claro', notificaciones: true };
const configUsuario = { notificaciones: false };
const configuracionFinal = Object.assign({}, configPorDefecto, configUsuario);
console.log(configuracionFinal); 
// Resultado: { tema: 'claro', notificaciones: false }

// 2. Obtener las claves de un objeto con Object.keys()
// Ejemplo práctico: obtener todas las claves (propiedades) de un objeto de usuario
const usuario = { nombre: 'Carlos', edad: 30, email: 'carlos@example.com' };
const clavesUsuario = Object.keys(usuario);
console.log(clavesUsuario); 
// Resultado: ['nombre', 'edad', 'email']

// 3. Obtener los valores de un objeto con Object.values()
// Ejemplo práctico: obtener los valores de las propiedades de un objeto de producto
const producto = { nombre: 'Laptop', precio: 1000, stock: 5 };
const valoresProducto = Object.values(producto);
console.log(valoresProducto); 
// Resultado: ['Laptop', 1000, 5]

// 4. Usar Object.entries() para convertir un objeto en pares clave-valor
// Ejemplo práctico: iterar sobre un objeto para mostrar sus propiedades y valores
const persona = { nombre: 'Ana', edad: 25, profesion: 'Desarrolladora' };
for (const [clave, valor] of Object.entries(persona)) {
  console.log(`${clave}: ${valor}`);
}
/*
Resultado:
nombre: Ana
edad: 25
profesion: Desarrolladora
*/

// 5. Congelar un objeto con Object.freeze()
// Ejemplo práctico: evitar que un objeto de configuración sea modificado accidentalmente
const configuracion = { modo: 'estricto', depuracion: true };
Object.freeze(configuracion);
configuracion.depuracion = false; // No se aplica el cambio porque el objeto está congelado
console.log(configuracion.depuracion); // Resultado: true

// 6. Sellar un objeto con Object.seal()
// Ejemplo práctico: evitar que se añadan nuevas propiedades pero permitir modificar las existentes
const cuenta = { saldo: 1000 };
Object.seal(cuenta);
cuenta.saldo = 800; // Se permite modificar propiedades existentes
cuenta.moneda = 'USD'; // No se permite agregar nuevas propiedades
console.log(cuenta); 
// Resultado: { saldo: 800 }

// 7. Crear un nuevo objeto con un prototipo específico usando Object.create()
// Ejemplo práctico: crear un objeto basado en otro objeto prototipo
const vehiculo = { tipo: 'Automóvil', arrancar() { console.log('El vehículo ha arrancado.'); } };
const coche = Object.create(vehiculo);
coche.marca = 'Toyota';
coche.arrancar(); // Resultado: 'El vehículo ha arrancado.'
console.log(coche.tipo); // Resultado: 'Automóvil'

// 8. Verificar si un objeto tiene una propiedad con Object.hasOwnProperty()
// Ejemplo práctico: verificar si un objeto de usuario tiene una propiedad específica
const perfilUsuario = { nombre: 'Luis', rol: 'Administrador' };
console.log(perfilUsuario.hasOwnProperty('nombre')); // Resultado: true
console.log(perfilUsuario.hasOwnProperty('edad'));   // Resultado: false

/*
### Conclusión:
- `Object` proporciona una variedad de métodos útiles para trabajar con objetos en JavaScript.
- Métodos como `Object.keys()`, `Object.values()` y `Object.entries()` permiten extraer información clave de los objetos de forma eficiente.
- Métodos como `Object.freeze()` y `Object.seal()` ayudan a proteger y controlar la modificación de objetos en aplicaciones críticas.
- `Object.assign()` es ideal para fusionar objetos o aplicar configuraciones predeterminadas con personalizadas.
*/
