# Simon Game

The idea behind this project is to make a Simon Game for the second milestone project.
This is a basic game that you can play and test your memory with.

The game is designed to select random colored blocks and highlight them for a short period of time, 
the user will have to repeat the same moves afterwards which gets difficult after some time, since you have to remember the correct order.

## UX

The game itself will only start once the user (player) clicks to check the "ON/OFF" button, then procceeds to click on the "START" button located in the middle of the Simon Game platform.
Once "START" has been activated, the game will begin by flashing and highlighting one of the four different colored buttons.
If the user clicks on the correct button, the game will go on to the next level and continue until level 20 which is the last level. Victory is only granted once 20 levels have been cleared.

The game will let the user try to get the right order of flashes endlessly, unless the "STRICT" button has been activated. If activated and if the user then fails to match the flashes, it
will make the game reset and get back to level 1.

### User Stories

#### User story 1

* As a user I can click "ON/OFF" to turn the game ON or to turn the game OFF.
* As a user I am presented with a nice and clean game design.
* As a user I am presented with a display that shows if the game is ON.
* As a user I am allowed to jump right into the game, I can also select strict mode.
* I advance to the next level by clicking to match the game colors/blinks.
* Once I advance to a new level, I am presented with the same series as previously but with one additional step to match.
* [Normal Mode] If I as a user select the colors in the wrong order, I am then notified that the match was "wrong" and get to try again, continuing on the same level.
* [Strict Mode] As a user who fails to match the colors in the right order, I will be brought back to level 1.
* I can win the game by getting through all 20 levels.
* As a user I am notified when victory has been granted.


## Features
#### Game Features

These are the game features that users will interact with.

* User can use a checkbox to either turn the game ON or OFF.
* User can use a checkbox to activate Strict mode.
* User can start playing by clicking START.
* Each button has its own sound that activates once clicked.
* User can keep track of the game level by looking at the display box.
* Each time the user succeeds with the matching of colors will make the game add one additional color to click.
* User will get a message letting you know if the attempt to match the colors has failed.
* When victory is granted, users will get a "WIN" message.

### Features left to implement
* Navbar
* Contact page, possibly with emailjs
* Info with play instructions


## Logics of the game
#### Logic through Javascript

The game is designed to be simple and and easy to understand.

* Game will wait until Start has been clicked then procceed to control if the game is ON or if Victory has been achieved.
* If the power is ON and or if Victory has been achieved then the game will run "playGame" Function.
* The game will then generate 20 random numbers from 1-4 to go through.
* Checkup is active during player turn to see if the player matches accurately with the game round.
* If player matches in the wrong order then a message appears to indicate that wrong choice has been made.
* The game will check if player is at level 20, if true gameVictory will activate, blinking all colors.
* Once victory, the game will wait some second, then procceed to reset the colors and start the playGame function again.
* Strict Mode will only let the player fail to match the colors once, after that the level will be reset to 1.


## Technologies used

#### This website uses these technologies

The site design is for the main part HTML & CSS, logic applied through Javascript.
I've also used Bootstrap and Google Fonts.

* HTML
* CSS
* Javascript
* Bootstrap
* Google Fonts

## Testing

#### Testing game functions

1. Click "ON/OFF" to start the game and see if the game is responsive.
2. Click on "STRICT" to activate strict mode.
3. Verify that you can't start clicking the colors after "ON" is displayed. This should happen once "START" is activated.
4. Verify that you can click on the colors once "START" has been clicked.
3. Display shows the game level once the "START" button is activated.
4. Verify that the game has its first round.
5. Once the game has started, sound should match the blinking lights from the selected colors.
6. Verify so the game only start by playing off 1 blink and not more. This should increase by 1 every level.

## Deployment

## Media

#### Sound used

The 4 sound files for the game buttons come from link given in Slack
* https://s3.amazonaws.com/freecodecamp/simonSound1.mp3
* https://s3.amazonaws.com/freecodecamp/simonSound2.mp3
* https://s3.amazonaws.com/freecodecamp/simonSound3.mp3
* https://s3.amazonaws.com/freecodecamp/simonSound4.mp3

## Credits