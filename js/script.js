// Creating Game Map

// variable array: creating the Stage by storing values as strings made of our HTML elements;
var WORLD = [
    [2,2,2,2,2,2,2,2,2,2,2],
    [2,0,0,0,0,0,0,0,0,0,2],
    [2,0,0,0,0,6,0,0,0,0,2],
    [2,0,0,0,0,0,0,0,0,6,2],
    [2,0,0,0,0,0,0,0,0,6,2],
    [2,0,0,0,0,0,0,0,0,6,2],
    [2,0,0,0,0,0,0,0,0,6,2],
    [2,0,0,0,0,0,0,0,0,6,2],
    [2,0,0,0,0,0,0,0,0,6,2],
    [2,2,2,2,2,2,2,2,2,2,2]
];

// 

// creating key-values and assigning each individual number as our appropiate HTML element;
var gameDictionary = {
    0: 'blank',
    2: 'wall',
    6: 'enemy'
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
            worldRow += "<div class = '" + gameDictionary[WORLD[row] [rowIndex]] + "'></div>"; // add our HTML element incatinated value which is our value that is in our array that's in our World array, to our new string 'output';
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
// var count = 0;

// setting player's location:
var playerLocation = {
    x: 1,
    y: 1
};

// function to set & move player across the game-field by altering it's stored location starting from the far top left corner;
function movePlayer(){
    document.getElementById('player').style.top = playerLocation.y * 40 + 'px';
    document.getElementById('player').style.left = playerLocation.x * 40 + 'px';
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

    // Logic depending on where the player is located on the screen, on which index value in the array
    movePlayer();
    drawWorld();
}

// Enemy Logic

function moveEnemy(){

    // loop: iterate through 'World' array;
    for(var r = 0; r < WORLD.length; r++){
    
        // loop: iterate through each individual array's index values in our World arrays;
        for(var rIndex = 0; rIndex < WORLD[r].length; rIndex++){
            
            if(gameDictionary[WORLD[r] [rIndex]] === 'enemy'){
    
                if(WORLD[r] [rIndex - 1] != 2){
    
                    WORLD[r] [rIndex] = 0;
                    WORLD[r] [rIndex - 1] = 6;
                }
            }
            drawWorld();
        }
    }
}

setInterval(moveEnemy, 2000);
console.log(WORLD);
