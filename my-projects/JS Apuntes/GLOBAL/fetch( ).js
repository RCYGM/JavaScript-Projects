// APUNTE: Cómo usar fetch() en JavaScript para hacer solicitudes HTTP

/*
`fetch()` es una función nativa de JavaScript que se utiliza para hacer solicitudes HTTP asíncronas a servidores. 
Permite obtener y enviar datos a través de diferentes métodos como GET y POST, devolviendo una promesa 
que se resuelve cuando la respuesta está disponible.

Sintaxis básica:
fetch(url, [opciones]);

- `url`: La URL a la que se envía la solicitud.
- `[opciones]`: (Opcional) Un objeto con configuraciones como método, cabeceras, cuerpo, etc.

En una llamada fetch, además de method, headers y body, existen otros parámetros útiles dentro 
del objeto de configuración. Aquí algunos de los más comunes:

method: Define el método HTTP (GET, POST, PUT, DELETE, etc.).
headers: Encabezados personalizados, como Content-Type o Authorization.
body: Cuerpo de la solicitud (para POST, PUT, PATCH).
mode: Controla el modo de la solicitud (ej. cors, no-cors, same-origin).
credentials: Controla el envío de cookies (omit, same-origin, include).
cache: Controla el comportamiento del caché (default, no-store, reload).
redirect: Indica cómo manejar redirecciones (follow, manual, error).
referrer: Controla el referrer que se envía (ej. client, no-referrer).
*/
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_token'
  },
  body: JSON.stringify({ key: 'value' }),
  mode: 'cors',              // Controla CORS
  credentials: 'include',     // Enviar cookies
  cache: 'no-cache',          // No usar caché
  redirect: 'follow',         // Seguir redirecciones
  referrer: 'client'          // Enviar referrer
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

/*
### Ejemplos prácticos del uso de fetch() en el día a día de un programador:
*/

// 1. Hacer una solicitud GET simple
// Ejemplo práctico: obtener datos de una API pública como la de usuarios
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())  // Convertir la respuesta a JSON
  .then(data => {
    console.log('Usuarios obtenidos:', data);  // Manejar los datos obtenidos
  })
  .catch(error => {
    console.error('Error al obtener los usuarios:', error);
  });

// 2. Hacer una solicitud POST para enviar datos
// Ejemplo práctico: enviar datos de un formulario a un servidor
const nuevoUsuario = {
  nombre: 'Carlos',
  email: 'carlos@example.com',
  edad: 30
};

fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(nuevoUsuario)  // Convertir el objeto a JSON
})
  .then(response => response.json())
  .then(data => {
    console.log('Usuario creado:', data);
  })
  .catch(error => {
    console.error('Error al crear el usuario:', error);
  });

// 3. Manejar errores y respuestas HTTP
// Ejemplo práctico: manejar el caso cuando el servidor responde con un error
fetch('https://jsonplaceholder.typicode.com/users/1000')  // ID que no existe
  .then(response => {
    if (!response.ok) {
      throw new Error('Usuario no encontrado');  // Lanza un error si la respuesta no es exitosa
    }
    return response.json();
  })
  .then(data => {
    console.log('Usuario obtenido:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// 4. Actualizar un recurso con PUT
// Ejemplo práctico: actualizar los datos de un usuario en el servidor
const usuarioActualizado = {
  nombre: 'Carlos Pérez',
  email: 'carlos.perez@example.com',
  edad: 31
};

fetch('https://jsonplaceholder.typicode.com/users/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(usuarioActualizado)
})
  .then(response => response.json())
  .then(data => {
    console.log('Usuario actualizado:', data);
  })
  .catch(error => {
    console.error('Error al actualizar el usuario:', error);
  });

// 5. Eliminar un recurso con DELETE
// Ejemplo práctico: eliminar un usuario del servidor
fetch('https://jsonplaceholder.typicode.com/users/1', {
  method: 'DELETE'
})
  .then(response => {
    if (response.ok) {
      console.log('Usuario eliminado');
    } else {
      console.error('Error al eliminar el usuario');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

/*
### Conclusión:
- `fetch()` es una herramienta poderosa para hacer solicitudes HTTP en JavaScript. Te permite obtener, enviar, actualizar o eliminar datos de servidores de manera asíncrona.
- Con `fetch()` puedes manejar promesas y errores de manera elegante utilizando `.then()` y `.catch()`.
- Puedes hacer solicitudes GET, POST, PUT y DELETE para interactuar con APIs de forma completa.
- Es una alternativa moderna a `XMLHttpRequest` y ofrece una sintaxis más limpia y flexible.
*/
