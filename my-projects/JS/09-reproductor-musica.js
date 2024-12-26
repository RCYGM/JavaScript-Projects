const playlistSongs = document.getElementById('playlist-songs');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
const shuffleButton = document.getElementById('shuffle');
const allSongs = [
    {
        id: 0,
        title: "Scratching The Surface",
        artist: "Quincy Larson",
        duration: "4:25",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3"
    },
    {
        id: 1,
        title: "Can't Stay Down",
        artist: "Quincy Larson",
        duration: "4:15",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3"
    },
    {
        id: 2,
        title: "Still Learning",
        artist: "Quincy Larson",
        duration: "3:51",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3"
    },
    {
        id: 3,
        title: "Cruising for a Musing",
        artist: "Quincy Larson",
        duration: "3:34",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3",
    },
    {
        id: 4,
        title: "Never Not Favored",
        artist: "Quincy Larson",
        duration: "3:35",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/never-not-favored.mp3",
    },
    {
        id: 5,
        title: "From the Ground Up",
        artist: "Quincy Larson",
        duration: "3:12",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/from-the-ground-up.mp3",
    },
    {
        id: 6,
        title: "Walking on Air",
        artist: "Quincy Larson",
        duration: "3:25",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/walking-on-air.mp3",
    },
    {
        id: 7,
        title: "Can't Stop Me. Can't Even Slow Me Down.",
        artist: "Quincy Larson",
        duration: "3:52",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cant-stop-me-cant-even-slow-me-down.mp3",
    },
    {
        id: 8,
        title: "The Surest Way Out is Through",
        artist: "Quincy Larson",
        duration: "3:10",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/the-surest-way-out-is-through.mp3",
    },
    {
        id: 9,
        title: "Chasing That Feeling",
        artist: "Quincy Larson",
        duration: "2:43",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/chasing-that-feeling.mp3",
    },
];
const audio = new Audio();
let userData = {
    songs: [...allSongs],
    currentSong: null,
    songCurrentTime: 0,
};

const playSong = (id) => {
    const song = userData?.songs.find((song) => song.id === id);
    audio.src = song.src;
    audio.title = song.title;
    if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
        audio.currentTime = 0;
    } else {
        audio.currentTime = userData?.songCurrentTime;
    }
    //Nota: No debes usar el operador de encadenamiento opcional ?. en este paso porque userData.currentSong no será null ni undefined en este punto.
    userData.currentSong = song;
    playButton.classList.add("playing");
    highlightCurrentSong();
    setPlayerDisplay();
    setPlayButtonAccessibleText();
    audio.play();
};

const pauseSong = () => {
    //Nota: No debes usar encadenamiento opcional para este paso porque userData.songCurrentTime no será null ni undefined en este punto.
    userData.songCurrentTime = audio.currentTime;
    playButton.classList.remove("playing");
    audio.pause();
};

const playNextSong = () => {
    if (userData?.currentSong === null) {
        playSong(userData?.songs[0].id);
    } else {
        const currentSongIndex = getCurrentSongIndex();
        const nextSong = userData?.songs[currentSongIndex + 1];
        playSong(nextSong.id);
    }
};

const playPreviousSong = () => {
    if (userData?.currentSong === null) {
        return;
    } else {
        const currentSongIndex = getCurrentSongIndex();
        const previousSong = userData?.songs[currentSongIndex - 1]
        playSong(previousSong.id)
    }
};

const shuffle = () => {
    userData?.songs.sort(() => Math.random() - 0.5);
    userData.currentSong = null;
    userData.songCurrentTime = 0;
    renderSongs(userData?.songs);
    pauseSong();
    setPlayerDisplay();
    setPlayButtonAccessibleText();
};

const deleteSong = (id) => {
    if (userData?.currentSong?.id === id) {
        userData.currentSong = null;
        userData.songCurrentTime = 0;
        pauseSong();
        setPlayerDisplay();
    }
    userData.songs = userData?.songs.filter((song) => song.id !== id);
    renderSongs(userData?.songs);
    highlightCurrentSong();
    setPlayButtonAccessibleText();
    if (userData?.songs.length === 0) {
        const resetButton = document.createElement('button');
        const resetText = document.createTextNode("Reset Playlist");
        resetButton.id = "reset";
        resetButton.ariaLabel = "Reset playlist";
        resetButton.appendChild(resetText);
        playlistSongs.appendChild(resetButton);
        resetButton.addEventListener('click', () => {
            userData.songs = [...allSongs];
            renderSongs(sortSongs());
            setPlayButtonAccessibleText();
            resetButton.remove();
        });
    }
};

const setPlayerDisplay = () => {
    const playingSong = document.getElementById('player-song-title');
    const songArtist = document.getElementById('player-song-artist');
    const currentTitle = userData?.currentSong?.title;
    const currentArtist = userData?.currentSong?.artist;
    playingSong.textContent = currentTitle ? currentTitle : "";
    songArtist.textContent = currentArtist ? currentArtist : "";

};

const highlightCurrentSong = () => {
    const playlistSongElements = document.querySelectorAll(".playlist-song");
    const songToHighlight = document.getElementById(`song-${userData?.currentSong?.id}`);
    playlistSongElements.forEach((songEl) => {
        songEl.removeAttribute("aria-current");
    });
    if (songToHighlight) songToHighlight.setAttribute("aria-current", "true");
};

const renderSongs = (array) => {
    const songsHTML = array.map((song) => {
        return `<li id="song-${song.id}" class="playlist-song">
<button onclick="playSong(${song.id})"  class="playlist-song-info"><span class="playlist-song-title">
${song.title}</span>
<span class="playlist-song-artist">${song.artist}</span>
<span class="playlist-song-duration">${song.duration}</span>
</button>
<button onclick="deleteSong(${song.id})" class="playlist-song-delete" aria-label="Delete ${song.title}">
<svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="8" fill="#4d4d62"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/>
</svg>
</button>
</li>`
    }).join("");
    playlistSongs.innerHTML = songsHTML;
};

const setPlayButtonAccessibleText = () => {
    const song = userData?.currentSong || userData?.songs[0];
    const playButton = playButton.setAttribute("aria-label", song?.title ? `Play ${song.title}` : "Play");
};

const getCurrentSongIndex = () => {
    return userData?.songs.indexOf(userData?.currentSong);
};

playButton.addEventListener('click', () => {
    if (userData?.currentSong === null) {
        playSong(userData?.songs[0].id);
    } else {
        playSong(userData?.currentSong.id);
    }
});

pauseButton.addEventListener('click', pauseSong);
nextButton.addEventListener('click', playNextSong);
previousButton.addEventListener('click', playPreviousSong);
shuffleButton.addEventListener('click', shuffle);
audio.addEventListener('ended', () => {
    const currentSongIndex = getCurrentSongIndex();
    const nextSongExists = currentSongIndex < userData.songs.length - 1;
    if (nextSongExists) {
        playNextSong();
    } else {
        userData.currentSong = null;
        userData.songCurrentTime = 0;
        pauseSong();
        setPlayerDisplay();
        highlightCurrentSong();
        setPlayButtonAccessibleText();
    }
});
const sortSongs = () => {
    userData?.songs.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        }

        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });
    return userData?.songs
}

renderSongs(sortSongs());


/*
---
El operador spread (...) te permite copiar todos los elementos de un arreglo en otro. 
También se puede usar para concatenar múltiples arreglos en uno.
---
---
pause() es un método de la API de Web Audio para pausar archivos de música.
---
---
El método sort() convierte los elementos de un arreglo en cadenas y los ordena en su lugar según sus valores en la codificación UTF-16.
---
---
El método map() se utiliza para iterar a través de un arreglo y devolver un nuevo arreglo. 
Es útil cuando deseas crear un nuevo arreglo basado en los valores de un arreglo existente.
---

---
necesitarás unir el arreglo en una sola cadena usando el método join()

El método join() se usa para concatenar todos los elementos de un arreglo en una sola cadena. 
Toma un parámetro opcional llamado separador, que se utiliza para separar cada elemento del arreglo. Por ejemplo:

const exampleArr = ["Esto", "es", "una", "oración"];
const sentence = exampleArr.join(" "); // El separador toma un carácter de espacio
console.log(sentence); 
---

---
El método find() recupera el primer elemento dentro de un arreglo que cumple con las 
condiciones especificadas en la función de callback proporcionada. Si ningún elemento 
satisface la condición, el método devuelve undefined.

En el ejemplo a continuación, el método find() se usa para encontrar el primer número mayor que 25:

Código de ejemplo:

const numbers = [10, 20, 30, 40, 50];

// Encuentra el primer número mayor que 25
const foundNumber = numbers.find((number) => number > 25);
console.log(foundNumber); // Salida: 30
---

---
El método indexOf() del arreglo devuelve el primer índice en el que se puede 
encontrar un elemento dado en el arreglo, o -1 si el elemento no está presente.

Código de ejemplo:

const animals = ["dog", "cat", "horse"];
animals.indexOf("cat") // 1
---

---
A continuación, usa la propiedad classList y el método add() para añadir la clase "playing" al elemento playButton. 
Esto buscará la clase "playing" en el archivo CSS y la añadirá al elemento playButton.
---

---
El método forEach se usa para recorrer un arreglo y realizar una función en cada elemento del arreglo. 
Por ejemplo, supongamos que tienes un arreglo de números y quieres imprimir cada número en la consola.

Código de ejemplo:

const numbers = [1, 2, 3, 4, 5];

// Usando forEach para iterar a través del arreglo
numbers.forEach((number) => {
  console.log(number); // 1, 2, 3, 4, 5
});
---

---
textContent establece el texto de un nodo y te permite establecer o recuperar el 
contenido de texto de un elemento HTML.

Código de ejemplo:

<div id="example">This is some text content</div>
Código de ejemplo:

const element = document.getElementById('example');
console.log(element.textContent); // Salida: This is some text content
Puedes usar un operador ternario para asignar condicionalmente el valor de textContent. 
Aquí tienes un ejemplo de cómo asignar el resultado de un operador ternario a una variable:

Código de ejemplo:

const example = condition ? "I'm true" : "I'm false";
---

---
createElement() es un método del DOM que puedes usar para crear dinámicamente un elemento 
usando JavaScript. Para usar createElement(), lo llamas y pasas el nombre de la etiqueta como una cadena:

Código de ejemplo:

// sintaxis
document.createElement(tagName)

// ejemplo
document.createElement('div')
También puedes asignarlo a una variable:

Código de ejemplo:

const divElement = document.createElement('div');
---

---
El método createTextNode() se usa para crear un nodo de texto. Para usarlo, lo llamas y pasas el texto como una cadena:

Código de ejemplo:

document.createTextNode("your text")
También puedes asignarlo a una variable:

Código de ejemplo:

const myText = document.createTextNode("your text");
---

---
appendChild() te permite agregar un nodo o un elemento como hijo de otro elemento. 
En el ejemplo a continuación, el texto "Click me" se adjuntaría al botón:

Código de ejemplo:

const parentElement = document.createElement("button");
const parentElementText = document.createTextNode("Click me");

// adjunta el texto "Click me" al botón
parentElement.appendChild(parentElementText);
---

--------------------------------------------------------------


const printGreeting = () => {
    console.log('Hello there!')
}
printGreeting()

const printMessage = (org) => {
    console.log(`${org} is awesome!`)
}
console.log(printMessage("freeCodeCamp"));

const addTwoNumbers = (num1, num2) => num1 + num2

console.log(addTwoNumbers(5, 5));


-------

El encadenamiento opcional (?.) ayuda a evitar errores al acceder a propiedades anidadas que podrían ser null o undefined. Por ejemplo:

javascript
Copiar código
const user = {
  name: "Quincy",
  address: {
    city: "San Francisco",
    state: "CA",
    country: "USA",
  },
};

// Accediendo a propiedades anidadas sin encadenamiento opcional
const state = user.address.state; // CA

// Accediendo a una propiedad anidada inexistente con encadenamiento opcional
const zipCode = user.address?.zipCode; // Devuelve undefined en lugar de lanzar un error

*/