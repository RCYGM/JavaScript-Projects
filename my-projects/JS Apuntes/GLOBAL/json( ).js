// APUNTE: Cómo usar .json() en JavaScript para convertir respuestas HTTP en formato JSON

/*
`.json()` es un método que se utiliza en combinación con `fetch()` o `Response` para convertir 
una respuesta HTTP a formato JSON. Este método analiza el cuerpo de la respuesta HTTP como JSON y 
devuelve una promesa que se resuelve con el objeto JavaScript resultante.

Es común en aplicaciones web que interactúan con APIs RESTful, ya que los datos generalmente se envían 
y reciben en formato JSON.

Sintaxis:
response.json();

- `response`: Es la respuesta obtenida de una solicitud HTTP con `fetch()`.
- `.json()`: Convierte el cuerpo de la respuesta en un objeto JavaScript (o array).

### Ejemplos prácticos del uso de .json() en el día a día de un programador:
*/

// 1. Convertir una respuesta de una API en JSON
// Ejemplo práctico: obtener una lista de usuarios de una API y convertir la respuesta a JSON
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())  // Convertir la respuesta a JSON
  .then(data => {
    console.log('Usuarios:', data);  // Manejar los datos en formato de objeto o array
  })
  .catch(error => {
    console.error('Error al obtener los usuarios:', error);
  });

// 2. Procesar datos de una API y mostrar en el DOM
// Ejemplo práctico: obtener publicaciones de una API y mostrarlas en la página web
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    const listaPosts = document.getElementById('lista-posts');
    posts.forEach(post => {
      const listItem = document.createElement('li');
      listItem.textContent = post.title;
      listaPosts.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error al obtener las publicaciones:', error);
  });

// 3. Manejar errores al convertir a JSON
// Ejemplo práctico: manejar un error cuando la respuesta no se puede convertir a JSON
fetch('https://jsonplaceholder.typicode.com/invalid-url')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return response.json();  // Intentar convertir a JSON
  })
  .then(data => {
    console.log('Datos:', data);
  })
  .catch(error => {
    console.error('Error al convertir a JSON:', error);
  });

// 4. Hacer solicitudes POST con JSON y obtener la respuesta como JSON
// Ejemplo práctico: enviar datos a una API en formato JSON y procesar la respuesta
const nuevoPost = {
  title: 'Nuevo post',
  body: 'Este es el contenido del nuevo post',
  userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(nuevoPost)  // Convertir el objeto en JSON antes de enviarlo
})
  .then(response => response.json())  // Convertir la respuesta a JSON
  .then(data => {
    console.log('Post creado:', data);
  })
  .catch(error => {
    console.error('Error al crear el post:', error);
  });

/*
### Conclusión:
- El método `.json()` es esencial para convertir respuestas HTTP de una API a objetos o arrays en JavaScript.
- Es ampliamente utilizado cuando trabajas con `fetch()` para manipular y mostrar datos obtenidos de APIs.
- Este método devuelve una promesa, por lo que debe manejarse con `.then()` para procesar los datos o manejar errores.
- Siempre es útil verificar si la respuesta es válida antes de intentar convertirla a JSON, ya que respuestas no válidas pueden causar errores.
*/
