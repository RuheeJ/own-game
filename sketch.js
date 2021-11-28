var bgImg;
var player1, player1Img, player1IngAttack;
var player2, player2Img, player2IngAttack
var gameOverImg;
var attackBtn;
var jumpBtn;
var life, lifeImg;
var form,player,game;
var playerCount, gameState;
var players= []

function preload(){
bgImg= loadImage("bgImg.png")
player1Img= loadImage("player1.png")
player1IngAttack= loadImage("player1_attack.png")
player2Img= loadImage("player2.png")
player2IngAttack= loadImage("player2_attack.png")
gameOverImg= loadImage("game_over.png")
lifeImg= loadImage("life.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  // player1= createSprite(250, 500, 50, 50);
  // player1.addImage("player",player1Img);
  // player1.scale= 0.5

  // player2= createSprite(1250,500,50,50)
  // player2.addImage("player2",player2Img);
  // player2.scale= 0.5

  // attackBtn= createImg("attack.png")
  // attackBtn.position(50,50)
  // attackBtn.size(100,100)

  // jumpBtn= createImg("jump.png")
  // jumpBtn.position(300,50)
  // jumpBtn.size(100,100)
database= firebase.database()
  game= new Game()
  game.start()
}

function draw() {
  background(bgImg);  
  if(gameState===1){
    game.play()
  }
 if (playerCount===2){
   game.update(1)
 }
}