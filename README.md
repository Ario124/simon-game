# [Simon Game](https://simon-game-ario124-1.c9users.io/index.html)

The idea behind this project is to make a Simon Game for the second milestone project.
This is a basic game that you can play and test your memory with.

The game is designed to select random colored blocks and highlight them for a short period of time, 
the user will have to repeat the same moves afterwards which gets difficult after some time, since you have to remember the correct order.

## UX


Instructions for the game can be found on the main page for the game by clicking on the question mark.
Mute sound by clicking the sound icon.

The game design consists of four colored game pads and a menu with buttons, all these are placed in the middle of the screen.

* Green     -  This dark green colored button is located in the top left corner of the game platform.
* Red       -  This dark red colored button is located in the top right corner of the game platform.
* Yellow    -  This olive colored button is located in the bottom left corner of the game platform.
* Blue      -  This dark blue colored button is located in the bottom right corner of the game platform.

The game itself will only start once the user (player) clicks to check the "ON/OFF" button, then procceeds to click on the "START" button located in the middle of the Simon Game platform.
Once "START" has been activated, the game will begin by flashing and highlighting one of the four different colored buttons.
If the user clicks on the correct button, the game will go on to the next level and continue until level 20 which is the last level. Victory is only granted once 20 levels have been cleared.

The game will let the user try to get the right order of flashes endlessly, unless the "STRICT" button has been activated. If activated and if the user then fails to match the flashes, it
will make the game reset and get back to level 1.

### Wireframes/Mockups

* [Simon Mobile](https://github.com/Ario124/simon-game/blob/master/assets/Wireframe/simon_mobile2.png?raw=true)
* [Simon Tablet](https://github.com/Ario124/simon-game/blob/master/assets/Wireframe/simon-tablet2.png?raw=true)
* [Simon Desktop](https://github.com/Ario124/simon-game/blob/master/assets/Wireframe/simon-desktop2.png?raw=true)
* [Simon Contact Page](https://github.com/Ario124/simon-game/blob/master/assets/Wireframe/Contact%20page.png?raw=true)


### User Stories

#### User story 1


* As a user I can navigate thorugh the menu.
* As a user I can easily get to the "Contact" page through the navigation bar.
* As a user I can fill out the form and submit a message.
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
* As a user I can click on the sound icon to mute.
* As a user I can click on the sound icon to unmute.


## Features

#### Website Features

Features that the website offers

* Users can use the navigation bar
* Users can fill a form and submit it to get in touch thorugh mail.
* Users can click on the question mark to get game instructions (Index.html)
* Users can mute the game by clicking on the sound icon.
* Users can click on the github icon located by the footer.

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

### Features that could be implemented
* Highscore
* Increse difficulty beyond strict
* Improve user friendliness.


## Logics of the game
#### Logic through Javascript

The game is designed to be simple and and easy to understand.

* Game will wait until Start has been clicked, then procceed to control if the game is ON or if Victory has been achieved.
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

* [Balsamiq Mockups 3](https://balsamiq.com/)
I have used Balsamiq to design the mockups of the website.
* [HTML](https://en.wikipedia.org/wiki/HTML)
The core structure of the game comes from the use of HTML.
* [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
Giving color and life to the website and game, by styling through CSS.
* [JavaScript](https://www.javascript.com/)
The game itself is run by executing the functions on JavaScript.
* [Bootstrap](https://getbootstrap.com/)
I have used Bootstrap to get the navigation bar working.
* [Google Fonts](https://fonts.google.com/)
The website is designed to make use of fonts provided by Google.
* [EmailJS](https://www.emailjs.com/)
A Form can be filled and submitted, it is working with the help of EmailJS.
* [Jasmine](https://jasmine.github.io/)
To automate basic functionality tests.

## Testing

These test are to make sure that the game and the website itself is working good.
Main focus for devices iPhone 6/7/8, Tablet and Desktop.

* Media queries tested through Google Chrome Dev Tools, Also tested on Samsung Galaxy S8 & Samsung Galaxy S9.


#### Validation

* HTML tested through [HTML Validator](https://validator.w3.org/)
* CSS tested through [CSS Validator](https://jigsaw.w3.org/css-validator/)
* Javascript tested through [JS Validator](http://esprima.org/demo/validate.html)

#### Browsers

* Google Chrome
* Internet Explorer
* Microsoft Edge
* Mozilla Firefox

#### Testing website

1. Navbar should be responsive, when I click on "Home" or "Contact" this should be marked with a darker color to let the user know which window is being viewed.
2. Contact page has a form that can be filled. I have tested it and it works without problems, once "send message" has been clicked on, it activates the submit of mail(EMAILJS)
3. Load the page on Chrome and open Chrome Dev tools to check for errors.
4. Load the page on different resolutions for Mobile, Tablet and Desktop and verify that queries are working.
5. Load Contact.html and click on "Send Message" without filling the form. A message will appear letting the user know that the form has to be filled before submission.
6. Load index.html, start the game and click on the Sound Icon to verify it toggles.
7. Sound effects are muted when Sound Icon has been activated and the icon has a new darker color.
8. Sound effects are active when the Sound Icon is clicked back to normal.

#### Testing game functions

1. Click "ON/OFF" to start the game and see if the game is responsive.
2. Click on "STRICT" to activate strict mode.
3. Verify that you can't start clicking the colors after "ON" is displayed. This should happen once "START" is activated.
4. Verify that you can click on the colors once "START" has been clicked.
3. Display shows the game level once the "START" button is activated.
4. Verify that the game has its first round, before the players turn.
5. Once the game has started, sound should match the blinking lights from the selected colors.
6. Verify so the game only start by playing off 1 blink and not more. This should increase by 1 every level.
7. Click on the question mark to verify that it activates the modal that pops up with game instructions.
8. Close the modal by clicking on the background, or by either clicking on "Got it" or by closing the modal by the top right corner.
9. Verify that the game sends out the message "Wrong" when the player fails to match the colors.
10. Verify that once the player is on level 20 and wins, message "Victory" should appear.
11. Load the page on Google Chrome and open Dev tools to verify no major errors are in the way.


These test are tested and approved by me.
The game works well and is responsive. I have tested the game on my mobile device SGS8 and my Laptop (Windows 10)

#### Jasmine




#### Problems to be solved

* The game blinking/sounds can be troublesome when the speed of the blinks is played on a faster rate than usual. On some turns you might see the color blink but the sound will not play,
since if it happens to play the same color twice in a row, the sound will not play because of the speed the game is set to. I chose to keep it this way because the game is more challenging.

A solution could be to somehow make the sound play on faster repeated rates.

## Deployment

The deployment for this project was done through Github.

1. Firstly I make sure to create a repository called simon-game, this can be done through Github.
2. Proceed to make a Push from the local repository to a remote one.
3. Commands used are as follows: "git remote add origin https://github.com/ario124/simon-game.git" Followed by "git push -u origin master"
4. Go to the simon-game repository in Github, proceed to click on the settings button that is located on the top right inside simon-game repository.
5. Once inside the settings menu, scroll downwards till you find "Github Pages"
6. Under "Source" you can find a menu where we change from "None" to "Master Branch"
7. After that is done you should recieve a message like this "Your site is published at https://ario124.github.io/simon-game/"
8. Check to see if the link is working (may take some time to get it started).

By following these steps you should successfully manage with the Deployment of the project.

## Media

#### Sound used

The 4 sound files for the game buttons come from link given in Slack
* [First](https://s3.amazonaws.com/freecodecamp/simonSound1.mp3)
* [Second](https://s3.amazonaws.com/freecodecamp/simonSound2.mp3)
* [Third](https://s3.amazonaws.com/freecodecamp/simonSound3.mp3)
* [Forth](https://s3.amazonaws.com/freecodecamp/simonSound4.mp3)

## Credits

* Ideas to write the README file as well as for the coding of logic come from [Slack](https://code-institute-room.slack.com) and [Github](https://github.com/Code-Institute-Submissions/Simon-Game-13)
* I did a lot of research on how to get the game working using JS. I learned very much with the help of my tutor Juan Monetti and by viewing other projects and also from [Youtube](https://www.youtube.com/)

