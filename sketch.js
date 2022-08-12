var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player,game;
var playerCount,gameState;
var allPlayers
var macquenn,macquennImg
var voltron,voltronImg
var cars
var road 
function preload() {
  backgroundImage = loadImage("assets/planodefundo.png");
  voltronImg = loadImage('assets/car1.png')
  macquennImg = loadImage('assets/car2.png')
  road = loadImage('assets/track.jpg') 
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  bgImg = backgroundImage;
}

function draw() {
  background(bgImg);
 
  if(playerCount===2){
game.update(1)
  }
  if(gameState===1){
    game.PLAY()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
