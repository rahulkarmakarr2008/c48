var canvas;
var backgroundImage;
var bgImg,boat1img,boat2img,trackimg;
var database;
var form, player;
var playerCount,gameState;
var boat1,boat2;
var boats
function preload() {
  backgroundImage = loadImage("images/boat background.jpg");
  boat1img= loadImage("images/boat no. 1 - Copy.jpg");
  boat2img= loadImage("images/boat no. 2.jpg");
 trackimg= loadImage("images/racing background.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  

}

function draw() {
  background(backgroundImage);
if(playerCount==2){
  game.update(1);
}
if (gameState==1){
  game.play();
}
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);  
}
