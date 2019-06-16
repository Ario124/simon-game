//List of the main content that will be used through 'let' and 'const'

let blink;                      // For blinking the game pads
let turn;
let doingGood;                  //Checks to see if player is doing well without failure.
let victory;                    // For when the player wins the game.
let gameTurn;
let playTime;

//Empty arrays for the assortments
let assortment = [];
let playerAssortment = [];

let sound = true;
let strictMode = false;
let powerOn = false;
let volumeOn = true;

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
const volume = document.getElementById("volume");


volume.addEventListener("click", function () {                  // This will activate mute if player clicks on the Volume icon.
    if (sound) {
        volumeOn = false;
        this.classList.toggle("fa-volume-up");
        this.classList.toggle("fa-volume-off");
    } else {
        volumeOn = true;
        this.classList.toggle("fa-volume-up");
        this.classList.toggle("fa-volume-off");
    }
});

powerOnButton.addEventListener("click", function(){                 // Event listener to see if user checks the box
    if (powerOnButton.checked == true){
        powerOn = true;
        roundSum.innerHTML = "ON";                                  // The round Display appears as "ON" to let the user know game is on
    } else {
        powerOn = false;
        roundSum.innerHTML = "";
        resetColor();
        clearInterval(playTime);
    }
});

strictModeButton.addEventListener("click", function(){              // Strict Mode goes true if box checked
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

function playGame(){                                                // Main function for the game, this contains most of whats needed to run the game, including the loop to randomly generate numbers 1-4.
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
     playTime = setInterval(gamesTurn, 600);
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
        }, 250);
    }
    
}

function first(){ 
    if (volumeOn) {                                                         // This will activate sound for the game pads, it will also deactivate if player has chosen to mute.
        let audio = document.getElementById("simonsound1");     
        audio.play();
    }
    sound = true;
    uLeft.style.backgroundColor = "lightgreen";
    
        if (volumeOn == false) {
        sound = false;
    }
}

function second(){
    if (volumeOn) {
        let audio = document.getElementById("simonsound2");
        audio.play();
    }
    sound = true;
    uRight.style.backgroundColor = "salmon";
    
        if (volumeOn == false) {
        sound = false;
    }
}

function third(){
    if (volumeOn) {
        let audio = document.getElementById("simonsound3");
        audio.play();
    }
    sound = true;
    bLeft.style.backgroundColor = "yellow";
    
        if (volumeOn == false) {
        sound = false;
    }
}

function fourth(){
    if (volumeOn) {
        let audio = document.getElementById("simonsound4");
        audio.play();
    }
    sound = true;
    bRight.style.backgroundColor = "lightskyblue";
    
    if (volumeOn) {
        sound = false;
    }
}

function resetColor() {                                                 // This will reset all 4 game pads to original color.
    uLeft.style.backgroundColor = "darkgreen";
    uRight.style.backgroundColor = "darkred";
    bLeft.style.backgroundColor = "olive";
    bRight.style.backgroundColor = "darkblue";
}

uLeft.addEventListener("click", function() {
    if (powerOn && turn) {
        playerAssortment.push(1);
        
        checkUp();
        first();
        if(!victory) {
            setTimeout(() => {
                resetColor();
            }, 250);
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
            }, 250);
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
            }, 250);
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
            }, 250);
        }
    }
});

function checkUp(){                                             // Checks to see if player is doing good or if player has failed.
    if (playerAssortment[playerAssortment.length - 1] !== assortment[playerAssortment.length -1]) {    // With this we check to see for the saved values with .length
        doingGood = false;   
    }
    
    if (playerAssortment.length == 20 && doingGood) {          //If player on round 20 and without fail then player wins!
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
                round();
                doingGood = true;
            }
        }, 1100);
        sound = false;
    }
    
    if (turn == playerAssortment.length && doingGood && !victory) {
        turn++;
        round();
        roundSum.innerHTML = turn;

    }
}

function round() {
    blink = 0;
    playerAssortment = [];
    gameTurn = true;
    playTime = setInterval(gamesTurn, 600);
}

function blinkColor() {                                         //This is going to lighten the original colors to make it appear as the colors blink
    uLeft.style.backgroundColor = "lightgreen";
    uRight.style.backgroundColor = "salmon";
    bLeft.style.backgroundColor = "yellow";
    bRight.style.backgroundColor = "lightskyblue";
}

function gameVictory(){                                         //This function is for when the player has won. It will reset the game after set time.
    blinkColor();
    roundSum.innerHTML = "Victory!";
    powerOn = false;
    victory = true;
    setTimeout(() => {
        resetColor();
        playGame();
    }, 1900);
}