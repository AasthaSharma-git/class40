class Player{

   constructor(){
     this.name=null;
     this.index=null;
     this.distance=0;




   }

   getCount(){

       var playerCountRef = database.ref("playerCount");
       playerCountRef.on("value",function(data){
           playerCount=data.val();
       });


   }
   
   updateCount(){
      
        database.ref('/').update({
            playerCount:playerCount
        })

   }

   updateDetails(){
      var playerIndex="player"+this.index;

    database.ref(playerIndex).update({
        name:this.name,
        distance:this.distance
    });

}

   static getGameInfo(){
     
        var gameRef=database.ref('/');

        gameRef.on("value",function(data){

            gameInfo=data.val();

        });
         

        



   }














}