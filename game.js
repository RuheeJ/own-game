class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {
          gameState = data.val();
        });
      }
      update(state) {
        database.ref("/").update({
          gameState: state
        });
      }
    
      start() {
        player = new Player();
        playerCount = player.getCount();
    
        form= new Form()
        form.display()

player1= createSprite(250, 500, 50, 50);
  player1.addImage("player",player1Img);
  player1.scale= 0.5

  player2= createSprite(1250,500,50,50)
  player2.addImage("player2",player2Img);
  player2.scale= 0.5
  players =[player1,player2]

 
    }
    handleElements(){
        form.hide()
    }
    play(){
        this.handleElements()
        Player.getPlayersInfo()
        drawsprites()
    }
    
}