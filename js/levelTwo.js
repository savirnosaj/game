// Set [] on webpage load;
const gameOver = document.getElementById("gg-lvlTwo");
const levelWon = document.getElementById("level-won");
const vest = document.getElementById("vest");
const vestItem = document.getElementById("item-vest");
const pants = document.getElementById("pants");
const pantsItem = document.getElementById("item-pants");
const boots = document.getElementById("boots");
const bootsItem = document.getElementById("item-boots");
const gauntlet = document.getElementById("gauntlet");
const gauntletItem = document.getElementById("item-gauntlet");
const liveOne = document.getElementById("liveOne");
const liveTwo = document.getElementById("liveTwo");
const liveThree = document.getElementById("liveThree");
const sayGG = document.getElementById("sayGG");


// Hide HTML
liveThree.style.display = 'none';

// Creating Game Map

// variable array: creating the Stage by storing values as strings made of our HTML elements;
var WORLD = [
    [2,0,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,0,0,0,0,0,14,0,0,0,0,0,2],
    [2,2,2,2,0,2,2,2,2,0,2,2,11,2],
    [2,6,0,0,9,0,0,2,15,0,0,2,2,2],
    [2,0,2,2,0,2,10,2,0,2,17,0,0,2],
    [2,0,2,0,0,0,2,2,0,2,2,2,0,2],
    [2,0,2,0,2,19,0,0,0,0,0,0,0,2],
    [2,2,2,0,2,2,0,0,2,2,0,2,2,2],
    [2,0,0,6,0,0,0,0,2,7,0,2,13,2],
    [2,0,0,2,2,0,0,2,2,2,0,2,0,2],
    [2,0,2,2,12,2,0,0,2,0,0,2,0,2],
    [2,0,2,0,0,7,2,18,0,0,0,0,0,2],
    [2,0,8,0,0,2,2,2,2,2,2,2,2,2]
];

// 

// creating key-values and assigning each individual number as our appropiate HTML element;
var gameDictionary = {
    0: 'blank',
    2: 'wall',
    3: 'screw',
    // 4: 'wrench',
    // 5: 'bolt-cutter',
    6: 'goblin',
    7: 'amanita',
    8: 'orc',
    9: 'maniac',
    10: 'vest',
    11: 'pants',
    12: 'boots',
    13: 'gauntlet',
    14: 'clown',
    15: 'troll',
    16: 'Goblin',
    17: 'Orc',
    18: 'Clown',
    19: 'reptile'
};

// 

// function: create a div using JS called "row" for each index value in our World array;
function drawWorld(){
    worldRow = ""; // insert entire array index(array) inside an HTML class and add the entire HTML class inside this variable to be added to our world HTML element;

    // loop: iterate through 'World' array;
    for(var row = 0; row < WORLD.length; row++){

        // logic: insert the beginning of HTML div named 'row' into 'output' empty string;
        worldRow += "<div class = 'row'>";

        // loop: iterate through each individual array's index values in our World arrays;
        for(var rowIndex = 0; rowIndex < WORLD[row].length; rowIndex++){
            
            // logic: insert a class titled: grab the property in gameDictionary with the value according to the property number;
            worldRow += "<a id = 'button' href = '#" + gameDictionary[WORLD[row] [rowIndex]] + "Info'><div class = '" + gameDictionary[WORLD[row] [rowIndex]] + "'></div></a>"; // add our HTML element incatinated value which is our value that is in our array that's in our World array, to our new string 'output';
        }

        // logic: insert closing row div that will be inserted into the world HTML element;
        worldRow += "</div>";
    }

    // add/print to the screen in our 'world' div, the HTML string stored in 'output';
    document.getElementById('world').innerHTML = worldRow;
}

// call the function immediately when the web-page is ran; 
drawWorld();



// Now Working with Player Object

// variables:
var points = 0;
var lives = ['Live', 'Live'];
var items = [];
// counts for iteration:
var clownCount = 0;
var ClownCount = 0;
var trollCount = 0;
var OrcCount = 0;
var reptileCount = 0;

// setting player's location:
var playerLocation = {
    x: 1,
    y: 0
};

// function to set & move player across the game-field by altering it's stored location starting from the far top left corner;
function movePlayer(){
    document.getElementById('player').style.top = 60 + (playerLocation.y * 60) + 'px';
    document.getElementById('player').style.left = 60 + (playerLocation.x * 60) + 'px';
}

// call the function immediately when the web-page is ran; this will place player in designated area which is the very top location which is the first index value in our first row in our WORLD array
movePlayer();

document.onkeydown = function(keydown){
    // console.log(keydown);
    if(keydown.keyCode == 37){ // LEFT
        if(WORLD[playerLocation.y][playerLocation.x - 1] != 2){
            playerLocation.x--;
        }
    }
    else if(keydown.keyCode == 38){ // TOP
        if(WORLD[playerLocation.y - 1][playerLocation.x] != 2){
            playerLocation.y--;
        }
    }
    else if(keydown.keyCode == 39){ // RIGHT
        if(WORLD[playerLocation.y][playerLocation.x + 1] != 2){
            playerLocation.x++;
        }
    }
    else if(keydown.keyCode == 40){ // DOWN
        if(WORLD[playerLocation.y + 1][playerLocation.x] != 2){
            playerLocation.y++;
        }
    }

    // Game Logic

    // if player location is where the initial check is, then do something which is:
    if(WORLD[playerLocation.y][playerLocation.x] == 6){ // Goblin Enemy
        points -= 20;
        console.log("Ouch!" + " Minus 20 Points");
        lives.pop();
        console.log(lives);
    }
    else if(WORLD[playerLocation.y][playerLocation.x] == 8){ // Orc Enemy
        points -= 20;
        console.log("Ouch!" + " Minus 20 Points");
        lives.pop();
        console.log(lives);
    }
    else if(WORLD[playerLocation.y][playerLocation.x] == 9){ // Maniac Enemy
        points -= 20;
        console.log("Ouch!" + " Minus 20 Points");
        lives.pop();
        console.log(lives);
    }
    else if(WORLD[playerLocation.y][playerLocation.x] == 14){ // Clown Enemy
        points -= 20;
        console.log("Ouch!" + " Minus 20 Points");
        lives.pop();
        console.log(lives);
    }else if(WORLD[playerLocation.y][playerLocation.x] == 15){ // Troll Enemy
        points -= 20;
        console.log("Ouch!" + " Minus 20 Points");
        lives.pop();
        console.log(lives);
    } // ITEMS
    else if(WORLD[playerLocation.y][playerLocation.x] == 10){ // Vest Item
        points += 10;
        console.log("Picked up a Vest: " + "10 Points");
        vest.style.opacity = 1;
        vestItem.style.border = "5px solid #008000";
        items.push("Vest");
    }
    else if(WORLD[playerLocation.y][playerLocation.x] == 11){ // Pants Item
        points += 15;
        console.log("Picked up Pants: " + "15 Points");
        pants.style.opacity = 1;
        pantsItem.style.border = "5px solid #008000";
        items.push("Pants");
    }
    else if(WORLD[playerLocation.y][playerLocation.x] == 12){ // Boots Item
        points += 15;
        console.log("Picked up Boots: " + "15 Points");
        boots.style.opacity = 1;
        bootsItem.style.border = "5px solid #008000";
        items.push("Boots");
    }
    else if(WORLD[playerLocation.y][playerLocation.x] == 13){ // Gauntlet Item
        points += 15;
        console.log("Picked up the Infinity Gauntlet: " + "15 Points");
        gauntlet.style.opacity = 1;
        gauntletItem.style.border = "5px solid #008000";
        items.push("Gauntlet");
    }
    else if(WORLD[playerLocation.y][playerLocation.x] == 7){ // Mushroom Item
        points += 25;
        console.log("Picked up a Mushroom: " + "25 Points");
        if(lives.length < 3 && lives.length > 1){
            lives.push("Live");
            liveThree.style.display = "inline-block";
        }
        else if(lives.length < 2 && lives.length > 0){
            lives.push("Live");
            liveTwo.style.display = "inline-block";
        }
        else if(lives.length < 1){
            lives.push("Live");
            liveOne.style.display = "inline-block";
        }
    }
    
    WORLD[playerLocation.y][playerLocation.x] = 0; // make every index value 0 (blank) to mimic item pickup;
    
    console.log("Total: " + points);

    // Keep track of Player Lives
    if(lives.length == 2) {
        liveThree.style.display = "none";
    }
    else if(lives.length == 1) {
        liveTwo.style.display = "none";
    }
    else if(lives.length == 0) {
        liveOne.style.display = "none";
        gameOver.style.display = "flex";
        gameOver.style.flexDirection = "column";
        gameOver.style.justifyContent = "center";
        gameOver.style.alignItems = "center";
        sayGG.style.display = "block";
    }

    if(items.length == 4){
        levelWon.style.display = "block";
    }

    movePlayer();
    drawWorld();
}


// Enemy Logic

function moveSlowEnemy(){

    // loop: iterate through 'World' array;
    for(var r = 0; r < WORLD.length; r++){
    
        // loop: iterate through each individual array's index values in our World arrays;
        for(var rIndex = 0; rIndex < WORLD[r].length; rIndex++){
            
            if(gameDictionary[WORLD[r] [rIndex]] === 'orc'){
    
                if(WORLD[r] [rIndex + 1] != 2){
    
                    WORLD[r] [rIndex] = 0;
                    rIndex++;
                    WORLD[r] [rIndex] = 8;
                }
                else if(WORLD[r] [rIndex + 1] == 2){
                    WORLD[r] [rIndex] = 0;
                    WORLD[r] [1] = 8;
                }
            }
            else if(gameDictionary[WORLD[r] [rIndex]] === 'Orc'){
    
                if(WORLD[r] [rIndex + 1] != 2){
    
                    WORLD[r] [rIndex] = 0;
                    rIndex++;
                    OrcCount++;
                    WORLD[r] [rIndex] = 17;
                }
                else if(WORLD[r] [rIndex + 1] == 2){
                    WORLD[r] [rIndex] = 0;
                    WORLD[r] [rIndex - OrcCount] = 17;
                    OrcCount = 0;
                }
            }
            else if(gameDictionary[WORLD[r] [rIndex]] === 'troll'){ // this is the enemy we want to move

                if(WORLD[r + 1] [rIndex] == 19) {
                    WORLD[r] [rIndex] = 0;
                    WORLD[r - trollCount] [rIndex] = 15;
                    trollCount = 0;
                }
                else if(WORLD[r + 1] [rIndex] != 2){ // mostly will do this; if index value in front of enemy is 'blank', move enemy into that position
    
                    WORLD[r] [rIndex] = 0;
                    r++;
                    trollCount++;
                    WORLD[r] [rIndex] = 15;
                }
                else if(WORLD[r + 1] [rIndex] == 2){ // if enemy encounters wall, move enemy rack to start of array
                    WORLD[r] [rIndex] = 0;
                    WORLD[r - trollCount] [rIndex] = 15;
                    trollCount = 0; // idk why if enemy goes backward in it's array movement, it will create a blank space in-front it's set position. Also, it places the enemy in the array value -1;
                }
            } //

            drawWorld();
        }
    }
}

setInterval(moveSlowEnemy, 2500);

// 

function moveEnemy(){

    // loop: iterate through 'World' array;
    for(var b = 0; b < WORLD.length; b++){
    
        // loop: iterate through each individual array's index values in our World arrays;
        for(var bIndex = 0; bIndex < WORLD[b].length; bIndex++){
            
            if(gameDictionary[WORLD[b] [bIndex]] === 'goblin'){ // this is the enemy we want to move
    
                if(WORLD[b - 1] [bIndex + 1] == 9){ // check location so enemies don't collide
                    WORLD[b] [bIndex] = 0;
                    bIndex = bIndex + 2;
                    WORLD[b] [bIndex] = 6;
                }
                else if(WORLD[b] [bIndex + 1] == 9){ // check location so enemies don't collide
                    WORLD[b] [bIndex] = 0;
                    bIndex = bIndex + 2;
                    WORLD[b] [bIndex] = 6;
                }
                else if(WORLD[b] [bIndex + 1] != 2){ // mostly will do this; if index value in front of enemy is 'blank', move enemy into that position
    
                    WORLD[b] [bIndex] = 0;
                    bIndex++;
                    WORLD[b] [bIndex] = 6;
                }
                else if(WORLD[b] [bIndex + 1] == 2){ // if enemy encounters wall, move enemy back to start of array
                    WORLD[b] [bIndex] = 0;
                    WORLD[b] [1] = 6;
                }
            } //
            else if(gameDictionary[WORLD[b] [bIndex]] === 'maniac'){ // this is the enemy we want to move
    
                if(WORLD[b + 1] [bIndex] == 6){ // check location so enemies don't collide
                    WORLD[b] [bIndex] = 0;
                    b = b + 2;
                    WORLD[b] [bIndex] = 9;
                }
                else if(WORLD[b] [bIndex] == WORLD[playerLocation.y][playerLocation.x]) {
                    lives.pop();
                    WORLD[b] [bIndex] = 0;
                    b++;
                    WORLD[b] [bIndex] = 9;

                    if(lives.length == 2){
                        liveThree.style.display = "none";
                    }
                    else if(lives.length < 2 && lives.length > 0){
                        liveTwo.style.display = "none";
                    }
                    else if(lives.length < 1){
                        liveOne.style.display = "none";
                        gameOver.style.display = "flex";
                        gameOver.style.flexDirection = "column";
                        gameOver.style.justifyContent = "center";
                        gameOver.style.alignItems = "center";
                        sayGG.style.display = "block";
                    }
                }
                else if(WORLD[b + 1] [bIndex] != 2){ // mostly will do this; if index value in front of enemy is 'blank', move enemy into that position
    
                    WORLD[b] [bIndex] = 0;
                    b++;
                    WORLD[b] [bIndex] = 9;
                }
                else if(WORLD[b + 1] [bIndex] == 2){ // if enemy encounters wall, move enemy back to start of array
                    WORLD[b] [bIndex] = 0;
                    WORLD[1] [bIndex] = 9;
                }
            } //
            else if(gameDictionary[WORLD[b] [bIndex]] === 'clown'){ // this is the enemy we want to move

                if(WORLD[b] [bIndex + 1] == 9){ // check location so enemies don't collide
                    WORLD[b] [bIndex] = 0;
                    bIndex = bIndex + 2;
                    WORLD[b] [bIndex] = 14;
                }
                else if(WORLD[b + 4] [bIndex + 1] == 9){
                    WORLD[b] [bIndex] = 0;
                    bIndex = bIndex + 2;
                    WORLD[b] [bIndex] = 14;
                }
                else if(WORLD[b] [bIndex] == WORLD[playerLocation.y][playerLocation.x]) {
                    lives.pop();
                    WORLD[b] [bIndex] = 0;
                    bIndex ++;
                    WORLD[b] [bIndex] = 14;

                    if(lives.length == 2){
                        liveThree.style.display = "none";
                    }
                    else if(lives.length < 2 && lives.length > 0){
                        liveTwo.style.display = "none";
                    }
                    else if(lives.length < 1){
                        liveOne.style.display = "none";
                        gameOver.style.display = "flex";
                        gameOver.style.flexDirection = "column";
                        gameOver.style.justifyContent = "center";
                        gameOver.style.alignItems = "center";
                        sayGG.style.display = "block";
                    }
                }
                else if(WORLD[b] [bIndex + 1] != 2){ // mostly will do this; if index value in front of enemy is 'blank', move enemy into that position
    
                    WORLD[b] [bIndex] = 0;
                    bIndex++;
                    WORLD[b] [bIndex] = 14;
                }
                else if(WORLD[b] [bIndex + 1] == 2){ // if enemy encounters wall, move enemy back to start of array
                    WORLD[b] [bIndex] = 0;
                    WORLD[b] [1] = 14;
                }
            } //
            else if(gameDictionary[WORLD[b] [bIndex]] === 'Clown'){ // this is the enemy we want to move

                if(WORLD[b] [bIndex + 1] != 2){ // mostly will do this; if index value in front of enemy is 'blank', move enemy into that position
    
                    WORLD[b] [bIndex] = 0;
                    bIndex++;
                    ClownCount++;
                    WORLD[b] [bIndex] = 18;
                }
                else if(WORLD[b] [bIndex + 1] == 2){ // if enemy encounters wall, move enemy back to start of array

                    WORLD[b] [bIndex] = 0;
                    WORLD[b] [bIndex - ClownCount] = 18;
                    ClownCount = 0;
                }
            } //
            drawWorld();
        }
    }
}

setInterval(moveEnemy, 1000);

// 

function moveFastEnemy(){

    // loop: iterate through 'World' array;
    for(var a = 0; a < WORLD.length; a++){
    
        // loop: iterate through each individual array's index values in our World arrays;
        for(var aIndex = 0; aIndex < WORLD[a].length; aIndex++){
            
            if(gameDictionary[WORLD[a] [aIndex]] === 'reptile'){ // this is the enemy we want to move
    
                if(WORLD[a + 1] [aIndex + 1] == 15) {
                    WORLD[a] [aIndex] = 0;
                    aIndex = aIndex + 2;
                    reptileCount = reptileCount + 2;
                    WORLD[a] [aIndex] = 19;
                }
                if(WORLD[a] [aIndex + 1] == 15) {
                    WORLD[a] [aIndex] = 0;
                    aIndex = aIndex + 2;
                    reptileCount = reptileCount + 2;
                    WORLD[a] [aIndex] = 19;
                }
                else if(WORLD[a] [aIndex + 1] != 2){ // mostly will do this; if index value in front of enemy is 'blank', move enemy into that position
    
                    WORLD[a] [aIndex] = 0;
                    aIndex++;
                    reptileCount++;
                    WORLD[a] [aIndex] = 19;
                }
                else if(WORLD[a] [aIndex + 1] == 2){ // if enemy encounters wall, move enemy back to start of array
                    WORLD[a] [aIndex] = 0;
                    WORLD[a] [aIndex - reptileCount] = 19;
                    reptileCount = 0;
                }
            } //
            drawWorld();
        }
    }
}

setInterval(moveFastEnemy, 500);

// On Click Buttons

// Reload page onClick (restartGame btn)
function restartGame() {
    location.reload();
    return false;
}

// Congrats! Let's play next level:
function nextLevel() {
    window.location.replace("levelTwo.html");
}

// Generate random world when web-page is reloaded
// create algorithm that makes enemy chase player
