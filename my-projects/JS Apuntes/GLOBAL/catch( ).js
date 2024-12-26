// APUNTE: Cómo usar .catch() en JavaScript para manejar errores en promesas

/*
El método `.catch()` en JavaScript se utiliza para manejar errores o rechazos en una promesa. 
Si una promesa es rechazada (por ejemplo, por un error en una solicitud HTTP), `.catch()` permite capturar y 
gestionar ese error de manera controlada.

Sintaxis:
promesa.catch(funcionRechazo);

- `funcionRechazo`: Se ejecuta cuando la promesa es rechazada o cuando ocurre un error.

Es común usar `.catch()` en combinación con `.then()` cuando trabajas con operaciones asíncronas, como solicitudes 
HTTP o cualquier operación que pueda fallar.

### Ejemplos prácticos del uso de .catch() en el día a día de un programador:
*/

// 1. Manejar errores en una solicitud HTTP con fetch
// Ejemplo práctico: capturar un error si la solicitud a la API falla
fetch('https://jsonplaceholder.typicode.com/usuarios')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud: Usuario no encontrado');
    }
    return response.json();
  })
  .then(data => {
    console.log('Usuarios obtenidos:', data);
  })
  .catch(error => {
    console.error('Error al obtener los usuarios:', error);
  });

// 2. Manejar rechazos de promesas personalizadas
// Ejemplo práctico: crear una promesa que puede fallar y capturar el error
const promesa = new Promise((resolve, reject) => {
  const exito = false;
  if (exito) {
    resolve('Operación exitosa');
  } else {
    reject('Operación fallida');
  }
});

promesa
  .then(mensaje => {
    console.log(mensaje);
  })
  .catch(error => {
    console.error('Error en la promesa:', error);  // Capturar el error
  });

// 3. Encadenar .then() y .catch() para manejar errores
// Ejemplo práctico: manejar un error durante una cadena de promesas
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    console.log('Publicaciones obtenidas:', posts);
    return posts[0];  // Obtener la primera publicación
  })
  .then(post => {
    if (!post) {
      throw new Error('No se encontró la publicación');
    }
    console.log(`Título de la primera publicación: ${post.title}`);
  })
  .catch(error => {
    console.error('Error en el procesamiento:', error);
  });

// 4. Usar .catch() para manejar errores en tareas asíncronas
// Ejemplo práctico: simular una tarea asíncrona que puede fallar
const tareaAsincrona = new Promise((resolve, reject) => {
  setTimeout(() => {
    const exito = false;
    if (exito) {
      resolve('Tarea completada con éxito');
    } else {
      reject('Error en la tarea asíncrona');
    }
  }, 2000);
});

tareaAsincrona
  .then(mensaje => {
    console.log(mensaje);
  })
  .catch(error => {
    console.error('Error en la tarea asíncrona:', error);  // Captura el error de la tarea
  });

// 5. Combinar try-catch y .catch() en código asíncrono
// Ejemplo práctico: manejar errores con una combinación de try-catch y .catch() para asegurar el flujo
async function obtenerDatos() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log('Datos de usuarios:', data);
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
}

obtenerDatos();  // Llamar a la función asíncrona

/*
### Conclusión:
- `.catch()` es esencial para capturar y manejar errores en promesas, especialmente cuando trabajas con operaciones asíncronas como `fetch()`.
- Puedes encadenar `.catch()` después de `.then()` para capturar cualquier error que ocurra en el proceso.
- También puedes manejar errores en código asíncrono utilizando `try-catch` en combinación con promesas o `async/await`.
*/
