class Game{

    constructor(){

    }


    getState(){
      
        var gameStateRef=database.ref('gameState');

        gameStateRef.on("value",function(data){
              
              gameState=data.val();
        });

    }

   start(){
    if(gameState===0){
        form=new Form();
        form.display();

        player = new Player();

        player.getCount();
    }
    car1= createSprite(375,200,100,100);
    car1.addImage(carImg1);
    car2= createSprite(575,200,100,100);
    car2.addImage(carImg2);
    car3= createSprite(775,200,100,100);
    car3.addImage(carImg3);
    car4= createSprite(975,200,100,100);
    car4.addImage(carImg4);
    
    cars=[car1,car2,car3,car4];

}

play(){
    background('white');
    form.disappear();
    textSize(50);
    text('Game Start!',100,200);

    Player.getGameInfo();

    var pos=150;

    var y;
    background('white');
    if(gameInfo!=undefined){
        image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);
        for(var i=1;i<=4;i++){
           
            var playerIndex="player"+i;

            y = displayHeight-gameInfo[playerIndex].distance;

            cars[i-1].y=y;
            
            if(player.index===i){
                cars[i-1].shapeColor="red";
                camera.position.x=displayWidth/2  ;
                camera.position.y=cars[i-1].y;
             }
            else{
                cars[i-1].shapeColor="black";
            }

            

        }


       
    }
    
    if(keyDown(UP_ARROW)){
        player.distance = player.distance+10;
        player.updateDetails();
    }
    if(player.distance>displayHeight*5-80){
        gameState=2;
    }

   

   drawSprites();


   }

   displayRanks(){
      
       console.log('Game End!');

   }








updateState(state){
      
    database.ref('/').update({
        gameState:state
    })

}
      

}