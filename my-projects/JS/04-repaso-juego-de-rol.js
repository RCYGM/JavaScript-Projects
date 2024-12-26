// variables que van a cambiar segun el juego
let prueba ="prueba";
let xp = 0;
let health = 100;
let gold = 50;

// variables que no van a cambiar 
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");


//button3.onclick =

//Objetos

const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"Store\"."
    },
    
    { // is in the store 
        name: "store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTownSquare],
        text: "You enter the store.",
    },
    { // is in the cave
        name: "cave",
        "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
        "button functions": [goFightSlime, goFightFangedBeast, goTownSquare],
        text: "You enter the cave. You see some monsters.",
    },
    { // is in the fight wiht the dragon 
        name: "fight",
        "button text": ["Attack", "Dodge", "Run"],
        "button functions": [attack, dodge, run],
        text: "You are fighting a monster",
    },
];
console.log(locations[1]);

button1.onclick = goStore;
button2.onclick = goToCave;
button3.onclick = fightDragon;

function upDate(location){
    monsterStats.style.display = "none";
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];

}
function goStore(){
    upDate(locations[1]);
    
};

function goToCave(){
    upDate(locations[2]);
};
function fightDragon(){
    upDate(locations[3]);
};

