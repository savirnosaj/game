// Set [] on webpage load;
const gameOver = document.getElementById("game-overInfo");
const screw = document.getElementById("screw");
const screwItem = document.getElementById("item-screw");
const wrench = document.getElementById("wrench");
const wrenchItem = document.getElementById("item-wrench");
const boltCutter = document.getElementById("bolt-cutter");
const boltCutterItem = document.getElementById("item-boltCutter");
const liveOne = document.getElementById("liveOne");
const liveTwo = document.getElementById("liveTwo");
const liveThree = document.getElementById("liveThree");


// Hide HTML

// Creating Game Map

// variable array: creating the Stage by storing values as strings made of our HTML elements;
var WORLD = [
    [2,2,2,2,2,2,2,2,2,2,2],
    [2,0,2,2,0,0,0,2,5,0,2],
    [2,0,6,2,4,2,9,2,2,0,2],
    [2,0,2,2,0,0,0,0,0,0,2],
    [2,6,0,2,2,2,2,2,2,9,2],
    [2,0,0,8,2,3,2,0,0,0,2],
    [2,0,0,0,0,6,0,0,2,0,2],
    [2,0,0,0,2,2,2,0,0,0,2],
    [2,0,0,0,0,2,0,0,0,2,2],
    [2,0,8,0,2,2,2,0,0,0,2],
    [2,2,2,0,0,7,0,0,2,2,2],
    [2,2,2,2,2,2,2,2,2,2,2]
];

// 

// creating key-values and assigning each individual number as our appropiate HTML element;
var gameDictionary = {
    0: 'blank',
    2: 'wall',
    3: 'screw',
    4: 'wrench',
    5: 'bolt-cutter',
    6: 'goblin',
    7: 'amanita',
    8: 'orc',
    9: 'maniac'
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
var lives = ['Live', 'Live', 'Live'];

// setting player's location:
var playerLocation = {
    x: 1,
    y: 1
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
    else if(WORLD[playerLocation.y][playerLocation.x] == 9){ // Orc Enemy
        points -= 20;
        console.log("Ouch!" + " Minus 20 Points");
        lives.pop();
        console.log(lives);
    } // ITEMS
    else if(WORLD[playerLocation.y][playerLocation.x] == 3){ // Screw Item
        points += 10;
        console.log("Picked up a Screw: " + "10 Points");
        screw.style.opacity = 1;
        screwItem.style.border = "5px solid #008000";
    }
    else if(WORLD[playerLocation.y][playerLocation.x] == 4){ // Wrench Item
        points += 10;
        console.log("Picked up a Wrench: " + "10 Points");
        wrench.style.opacity = 1;
        wrenchItem.style.border = "5px solid #008000";
    }
    else if(WORLD[playerLocation.y][playerLocation.x] == 5){ // Bolt-Cutter Item
        points += 15;
        console.log("Picked up a Bolf-Cutter: " + "15 Points");
        boltCutter.style.opacity = 1;
        boltCutterItem.style.border = "5px solid #008000";
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

    // Keep track of Player Lives
    if(lives.length == 2) {
        liveThree.style.display = "none";
        // playerLocation.x = 1;
        // playerLocation.y = 1;
    }
    else if(lives.length == 1) {
        liveTwo.style.display = "none";
    }
    else if(lives.length == 0) {
        liveOne.style.display = "none";
        gameOver.style.display = "block";
    }

    movePlayer();
    drawWorld();

    console.log("Total: " + points);
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
            drawWorld();
        }
    }
}

// setInterval(moveSlowEnemy, 2500);

// 

function moveFastEnemy(){

    // loop: iterate through 'World' array;
    for(var b = 0; b < WORLD.length; b++){
    
        // loop: iterate through each individual array's index values in our World arrays;
        for(var bIndex = 0; bIndex < WORLD[b].length; bIndex++){
            
            if(gameDictionary[WORLD[b] [bIndex]] === 'goblin'){
    
                if(WORLD[b] [bIndex + 1] != 2){
    
                    WORLD[b] [bIndex] = 0;
                    bIndex++;
                    WORLD[b] [bIndex] = 6;
                }
                else if(WORLD[b] [bIndex + 1] == 2){
                    WORLD[b] [bIndex] = 0;
                    WORLD[b] [1] = 6;
                }
            }
            else if(gameDictionary[WORLD[b] [bIndex]] === 'maniac'){
    
                if(WORLD[b + 1] [bIndex] != 2){
    
                    WORLD[b] [bIndex] = 0;
                    b++;
                    WORLD[b] [bIndex] = 9;
                }
                else if(WORLD[b + 1] [bIndex] == 2){
                    WORLD[b] [bIndex] = 0;
                    WORLD[1] [bIndex] = 9;
                }
            }
            drawWorld();
        }
    }
}

// setInterval(moveFastEnemy, 1000);

// 
// Generate random world when web-page is reloaded
// create algorithm that makes enemy chase player

function reload() {
    location.reload();
    return false;
}