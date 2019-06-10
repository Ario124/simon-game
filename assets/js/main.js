//List of the main content that will be used through 'let' and 'const'

let blink;
let turn;
let doingGood;
let victory;
let gameTurn;
let playTime;

//Empty arrays for the assortments
let assortment = [];
let playerAssortment = [];

let sound = true;
let strictMode = false;
let powerOn = false;

//These are the 4 main Colored buttons for the game!

const uLeft = document.getElementById("uLeft");
const uRight = document.getElementById("uRight");
const bLeft = document.getElementById("bLeft");
const bRight = document.getElementById("bRight");


//These are the buttons that interact with the menu.

const roundSum = document.getElementById("sum");
const strictModeButton = document.getElementById("strict");
const powerOnButton = document.getElementById("activateOn");
const startingButton = document.getElementById("start");



function playGame(){
    victory = false;
}

powerOnButton.addEventListener("click", function(){
    if (powerOnButton.checked == true){
        powerOn = true;
        roundSum.innerHTML = "ON";
    } else {
        powerOn = false;
        roundSum.innerHTML = "";
    }
})

strictModeButton.addEventListener("click", function(){
    if (strictModeButton.checked == true) {
        strictMode = true;
    } else {
        strictMode = false;
    }
})

startingButton.addEventListener("click", function(){
    if (powerOn || victory) {
        playGame();
    }
});