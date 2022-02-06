class Game {
    constructor() {}
    getState(){
      var gameStateRef=database.ref("gameState");
      gameStateRef.on("value", function(data){
        gameState=data.val();
      })
      }
      
    start() {
      form = new Form();
      form.display();
      player = new Player();
      playerCount=player.getCount();
      boat1=createSprite(20,height/2-50);
      boat2=createSprite(20,height/2+100);
      boat1.addImage("boat1",boat1img);
      boat2.addImage("boat2",boat2img);
      boats=[boat1,boat2]
    }
    
  }
  