const listOfAllDice = document.querySelectorAll(".die");
const scoreInputs = document.querySelectorAll("#score-options input");
const scoreSpans = document.querySelectorAll("#score-options span");
const roundElement = document.getElementById("current-round");
const rollsElement = document.getElementById("current-round-rolls");
const totalScoreElement = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");
const rollDiceBtn = document.getElementById("roll-dice-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");
const rulesContainer = document.querySelector(".rules-container");
const rulesBtn = document.getElementById("rules-btn");

let diceValuesArr = [];
let isModalShowing = false;
let score = 0;
let round = 1;
let rolls = 0;

const rollDice = () => {
    diceValuesArr = [];

    for (let i = 0; i < 5; i++) {
        const randomDice = Math.floor(Math.random() * 6) + 1;
        diceValuesArr.push(randomDice);
    };

    listOfAllDice.forEach((dice, index) => {
        dice.textContent = diceValuesArr[index];
    });
};

const updateStats = () => {
    rollsElement.textContent = rolls;
    roundElement.textContent = round;
}

const updateRadioOption = (index, score) => {
    scoreInputs[index].disabled = false;
    scoreInputs[index].value = score;
    scoreSpans[index].textContent = `, score = ${score}`;
};
const updateScore = (selectedValue, achieved) => {
    score += parseInt(selectedValue);
    totalScoreElement.textContent = score;
  
    scoreHistory.innerHTML += `<li>${achieved} : ${selectedValue}</li>`;
  };

const getHighestDuplicates = (arr) => { //  arr = [3, 4, 3, 6, 4]:
    const counts = {
        // 3: 2,
        // 4: 2,
        // 6: 1,
        /* Al final, counts es un objeto que contiene las 
        frecuencias de cada número en el array: { 3: 2, 4: 2, 6: 1 }. 
        Esto significa que el número 3 aparece 2 veces, el 4 aparece 2 veces, 
        y el 6 aparece 1 vez. */
    };

    for (const num of arr) {
// primera iteración, num = 3 El número 3 no está en counts, por lo que se agrega: counts[3] = 1 counts ahora es { 3: 1 }
// segunda iteración, num = 4 El número 4 no está en counts, por lo que se agrega: counts[4] = 1 counts ahora es { 3: 1, 4: 1 }
// tercera iteración, num = 3 El número 3 ya existe en counts, así que incrementamos su valor: counts[3]++ counts ahora es { 3: 2, 4: 1 }
// cuarta iteración, num = 6 El número 6 no está en counts, por lo que se agrega: counts[6] = 1 counts ahora es { 3: 2, 4: 1, 6: 1 }
// quinta iteración, num = 4 El número 4 ya existe en counts, así que incrementamos su valor: counts[4]++ counts ahora es { 3: 2, 4: 2, 6: 1 }
        if (counts[num]) {
            counts[num]++;
        } else {
            counts[num] = 1;
        }

    };

    let highestCount = 0; // Inicializamos highestCount en 0, este guardará la mayor cantidad de repeticiones encontradas

// Este bucle recorre cada número en el array arr y compara cuántas veces aparece usando el objeto counts
for (const num of arr) {
    const count = counts[num]; // count es el número de veces que aparece num en el array

    // primera iteración, num = 3
    // count = counts[3] = 2
    // El número 3 aparece 2 veces, pero no actualizamos highestCount porque no alcanza 3 o más.
    // highestCount sigue siendo 0

    // segunda iteración, num = 4
    // count = counts[4] = 2
    // El número 4 también aparece 2 veces, pero al igual que con el número 3, no es suficiente para actualizar highestCount.
    // highestCount sigue siendo 0

    // tercera iteración, num = 3
    // count = counts[3] = 2
    // A pesar de que el número 3 aparece de nuevo, el conteo sigue siendo 2, por lo que no actualizamos highestCount.
    // highestCount sigue siendo 0

    // cuarta iteración, num = 6
    // count = counts[6] = 1
    // El número 6 aparece 1 vez, lo cual no es suficiente para actualizar highestCount.
    // highestCount sigue siendo 0

    // quinta iteración, num = 4
    // count = counts[4] = 2
    // El número 4 aparece por segunda vez, pero su conteo sigue siendo 2, por lo que no actualizamos highestCount.
    // highestCount sigue siendo 0

    // Como en este caso no hay un número que aparezca 3 o más veces, highestCount no se actualiza.
    if (count >= 3 && count > highestCount) {
        highestCount = count; // Si encontramos un número que aparece 3 veces o más, actualizamos highestCount
    }

    // Similar a la condición anterior, si encontramos un número que aparece 4 veces o más,
    // también actualizamos highestCount.
    if (count >= 4 && count > highestCount) {
        highestCount = count;
    }
}

// Al final de todas las iteraciones, highestCount sigue siendo 0 porque ningún número apareció 3 o más veces en el array.

    const sumOfAllDice = arr.reduce((a, b) => a + b, 0);

    if (highestCount >= 4) {
        updateRadioOption(1, sumOfAllDice);
    }

    if (highestCount >= 3) {
        updateRadioOption(0, sumOfAllDice);
    }

    updateRadioOption(5, 0);
};

const detectFullHouse = (arr) => {
    const counts = {};
  
    for (const num of arr) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    };
  
    const hasThreeOfAKind = Object.values(counts).includes(3);
    const hasPair = Object.values(counts).includes(2);
  
    if (hasThreeOfAKind && hasPair) {
      updateRadioOption(2, 25);
    };
  
    updateRadioOption(5, 0);
  };

const resetRadioOptions = () => {
    scoreInputs.forEach((input) => {
      input.disabled = true;
      input.checked = false; // desmarcar cualquier opción de radio que haya sido seleccionada previamente
    });
  
    scoreSpans.forEach((span) => {
      span.textContent = "";
    });
  };

  const resetGame = () => {
    diceValuesArr = [0, 0, 0, 0, 0];
    score = 0;
    round = 1;
    rolls = 0;
  
    listOfAllDice.forEach((dice, index) => {
      dice.textContent = diceValuesArr[index];
    });
  
    totalScoreElement.textContent = score;
    scoreHistory.innerHTML = "";
  
    rollsElement.textContent = rolls;
    roundElement.textContent = round;
  
    resetRadioOptions();
  };



rollDiceBtn.addEventListener("click", () => {
    getHighestDuplicates();
    resetRadioOptions();
    if (rolls === 3) {
        alert("You have made three rolls this round. Please select a score.");
    } else {
        rolls += 1
        rollDice();
        updateStats();
        detectFullHouse(diceValuesArr);
    }
});



rulesBtn.addEventListener("click", () => {
    isModalShowing = !isModalShowing;

    if (isModalShowing) {
        rulesBtn.textContent = "Hide rules";
        rulesContainer.style.display = "block";
    } else {
        rulesBtn.textContent = "Show rules";
        rulesContainer.style.display = "none";
    }
});

  keepScoreBtn.addEventListener("click", () => {
    let selectedValue;
    let achieved;
  
    for (const radioButton of scoreInputs) {
      if (radioButton.checked) {
        selectedValue = radioButton.value;
        achieved = radioButton.id;
        break;
      }
    }
  
    if (selectedValue) {
      rolls = 0;
      round++;
      updateStats();
      resetRadioOptions();
      updateScore(selectedValue, achieved);
      if (round > 6) {
        setTimeout(() => {
          alert(`Game Over! Your total score is ${score}`);
          resetGame();
        }, 500);
      }
    } else {
      alert("Please select an option or roll the dice");
    }
  });