class Form{
    constructor(){
        this.input = createInput("").attribute("placeholder", "Enter your name");
        this.playButton = createButton("Play");
        this.titleImg = createImg("title.png");
        this.greeting = createElement("h2");
    }
    setElementsPosition(){
        this.titleImg.position(500,30);
    this.input.position(700, 400);
    this.playButton.position(695,500);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
    }
    setElementsStyle() {
        this.titleImg.class("gameTitle");
        this.input.class("customInput");
        this.playButton.class("customButton");
        this.greeting.class("greeting");
      }

      hide() {
        this.greeting.hide();
        this.playButton.hide();
        this.input.hide();
      }
    
      handleMousePressed() {
        this.playButton.mousePressed(() => {
          this.input.hide();
          this.playButton.hide();
          var message = `
          Hello ${this.input.value()}
          </br>wait for another player to join...`;
          this.greeting.html(message);
          playerCount += 1;
         player.name = this.input.value();
         player.index = playerCount;
          player.addPlayer();
         player.updateCount(playerCount);
          //player.getDistance();
        });
      }

      display() {
        this.setElementsPosition();
        this.setElementsStyle();
        this.handleMousePressed();
      }
}