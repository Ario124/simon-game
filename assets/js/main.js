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





powerOnButton.addEventListener("click", function(){
    if (powerOnButton.checked == true){
        powerOn = true;
        roundSum.innerHTML = "ON";
    } else {
        powerOn = false;
        roundSum.innerHTML = "";
        resetColor();
        clearInterval(playTime);
    }
});

strictModeButton.addEventListener("click", function(){
    if (strictModeButton.checked == true) {
        strictMode = true;
    } else {
        strictMode = false;
    }
});

startingButton.addEventListener("click", function(){
    if (powerOn || victory) {
        playGame();
    }
});


function playGame(){
    victory = false;
    assortment = [];
    playerAssortment =[];
    blink = 0;
    playTime = 0;
    turn = 1;
    roundSum.innerHTML = "1";
    doingGood = true;
    
    for (var i = 0; i < 20; i++)
     {
         assortment.push(Math.floor(Math.random() * 4) +1);
     }
     gameTurn = true;
     playTime = setInterval(gamesTurn, 800);
}

function gamesTurn(){
    powerOn = false;
    if (blink == turn){
        clearInterval(playTime);
        
        resetColor();
        powerOn = true;
        gameTurn = false;
    }
    
    if (gameTurn) {
        resetColor();
        setTimeout(() => {
            if (assortment[blink] == 1) first();
            if (assortment[blink] == 2) second();
            if (assortment[blink] == 3) third();
            if (assortment[blink] == 4) fourth();
            blink++;
        }, 300);
    }
    
}

function first(){
    if (sound) {
        let audio = document.getElementById("simonsound1");
        audio.play();
    }
    sound = true;
    uLeft.style.backgroundColor = "lightgreen";
}

function second(){
    if (sound) {
        let audio = document.getElementById("simonsound2");
        audio.play();
    }
    sound = true;
    uRight.style.backgroundColor = "salmon";
}

function third(){
    if (sound) {
        let audio = document.getElementById("simonsound3");
        audio.play();
    }
    sound = true;
    bLeft.style.backgroundColor = "yellow";
}

function fourth(){
    if (sound) {
        let audio = document.getElementById("simonsound4");
        audio.play();
    }
    sound = true;
    bRight.style.backgroundColor = "lightskyblue";
}


function resetColor() {
    uLeft.style.backgroundColor = "darkgreen";
    uRight.style.backgroundColor = "darkred";
    bLeft.style.backgroundColor = "olive";
    bRight.style.backgroundColor = "darkblue";
}

function blinkColor() {
    uLeft.style.backgroundColor = "lightgreen";
    uRight.style.backgroundColor = "salmon";
    bLeft.style.backgroundColor = "yellow";
    bRight.style.backgroundColor = "lightskyblue";
}


uLeft.addEventListener("click", function() {
    if (powerOn && turn) {
        playerAssortment.push(1);
        
        checkUp();
        first();
        if(!victory) {
            setTimeout(() => {
                resetColor();
            }, 300);
        }
    }
});

uRight.addEventListener("click", function() {
    if (powerOn && turn) {
        playerAssortment.push(2);
        checkUp();
        second();
        if(!victory) {
            setTimeout(() => {
                resetColor();
            }, 300);
        }
    }
});

bLeft.addEventListener("click", function() {
    if (powerOn && turn) {
        playerAssortment.push(3);
        checkUp();
        third();
        if(!victory) {
            setTimeout(() => {
                resetColor();
            }, 300);
        }
    }
});

bRight.addEventListener("click", function() {
    if (powerOn && turn) {
        playerAssortment.push(4);
        checkUp();
        fourth();
        if(!victory) {
            setTimeout(() => {
                resetColor();
            }, 300);
        }
    }
});


function checkUp(){
    if (playerAssortment[playerAssortment.length - 1] !== assortment[playerAssortment.length -1])
    doingGood = false;
    
    if (playerAssortment.length == 3 && doingGood) {
        gameVictory();
    }
    
    if (doingGood == false) {
        blinkColor();
        roundSum.innerHTML = "Wrong";
        setTimeout(() => {
            roundSum.innerHTML = turn;
            resetColor();
            
            if(strictMode) {
                playGame();
            } else {
                gameTurn = true;
                blink; 0;
                playerAssortment = [];
                doingGood = true;
                playTime = setInterval(gamesTurn, 800);
            }
        }, 800);
        sound = false;
    }
    
    if (turn == playerAssortment.length && doingGood && !victory) {
        turn++;
        playerAssortment = [];
        gameTurn = true;
        blink = 0;
        roundSum.innerHTML = turn;
        playTime = setInterval(gamesTurn, 800);
    }
}

function gameVictory(){
    blinkColor();
    roundSum.innerHTML = "Victory!";
    powerOn = false;
    victory = true;
    setTimeout(() => {
        resetColor();
        playGame();
    }, 1900);
}