// APUNTE: Cómo usar .then() en JavaScript para manejar promesas

/*
`.then()` es un método que se utiliza para manejar el resultado de una promesa. 
Permite encadenar acciones que se ejecutarán cuando la promesa se resuelva (éxito) o 
cuando la promesa se rechace (error). Es fundamental para trabajar con código asíncrono 
en JavaScript, como al usar `fetch()`, donde la respuesta no es inmediata.

Sintaxis básica:
promesa.then(funcionExito, funcionRechazo);

- `funcionExito`: Se ejecuta cuando la promesa se resuelve correctamente.
- `funcionRechazo`: (Opcional) Se ejecuta cuando la promesa se rechaza o ocurre un error.

### Ejemplos prácticos del uso de .then() en el día a día de un programador:
*/

// 1. Usar .then() para manejar una solicitud con fetch
// Ejemplo práctico: obtener una lista de usuarios de una API y manejar la respuesta
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())  // Convertir la respuesta a JSON
  .then(data => {
    console.log('Usuarios:', data);  // Manejar los datos obtenidos
  })
  .catch(error => {
    console.error('Error al obtener los usuarios:', error);
  });

// 2. Encadenar varios .then()
// Ejemplo práctico: realizar múltiples operaciones después de obtener los datos
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())  // Convertir la respuesta a JSON
  .then(posts => {
    console.log('Publicaciones obtenidas:', posts);
    return posts.length;  // Devolver el número de publicaciones
  })
  .then(cantidad => {
    console.log(`Hay un total de ${cantidad} publicaciones.`);
  })
  .catch(error => {
    console.error('Error en la solicitud:', error);
  });

// 3. Manejar un rechazo con .then()
// Ejemplo práctico: detectar y manejar el rechazo de una promesa
const promesa = new Promise((resolve, reject) => {
  const exito = false;
  if (exito) {
    resolve('La operación fue exitosa');
  } else {
    reject('La operación falló');
  }
});

promesa
  .then(mensaje => {
    console.log(mensaje);
  })
  .catch(error => {
    console.error('Error:', error);  // Manejar el error
  });

// 4. Hacer una solicitud POST y manejar la respuesta
// Ejemplo práctico: enviar datos a una API y manejar el resultado
const nuevoUsuario = {
  nombre: 'Carlos',
  email: 'carlos@example.com'
};

fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(nuevoUsuario)
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al crear el usuario');
    }
    return response.json();  // Convertir la respuesta a JSON
  })
  .then(data => {
    console.log('Usuario creado:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// 5. Manejar tiempos de espera o tareas asíncronas
// Ejemplo práctico: simular una tarea asíncrona que tarda 2 segundos en completarse
const tareaAsincrona = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Tarea completada después de 2 segundos');
  }, 2000);
});

tareaAsincrona.then(mensaje => {
  console.log(mensaje);  // Resultado: 'Tarea completada después de 2 segundos'
});

/*
### Conclusión:
- `.then()` es fundamental para trabajar con promesas en JavaScript. Permite manejar el resultado exitoso de una operación asíncrona y encadenar múltiples acciones.
- Al trabajar con APIs (como en `fetch()`), `.then()` se utiliza para manejar la respuesta del servidor y convertirla en un formato útil, como JSON.
- `.catch()` es útil para manejar errores o rechazos en las promesas, asegurando que los fallos se manejen de manera controlada.
*/
