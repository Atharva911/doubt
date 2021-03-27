var canvas;
var music;

var square;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1200,800);
    square=createSprite(600,400,50,80)
    square.shapeColor="red";
    


}

function draw() {
    background(green(169,169,169));
    
}
