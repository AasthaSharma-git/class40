var gameState=0;

var game,form,player;
var database;
var playerCount;
var gameInfo;

var car1, car2, car3, car4, cars;
var carImg1,carImg2,carImg3,carImg4;
var trackImg;

function preload() {
    carImg1=loadImage("images/car1.png");
    carImg2=loadImage("images/car2.png");
    carImg3=loadImage("images/car3.png");
    carImg4=loadImage("images/car4.png");
    trackImg=loadImage("images/track.jpg");
    
}


function setup(){
    createCanvas(displayWidth,displayHeight);

    database=firebase.database();

    game=new Game();
    game.getState();
    game.start();

    
}

function draw(){

     if(playerCount===4){
         game.updateState(1);
     }
     if(gameState===1){

         game.play();

     }
    
     if(gameState===2){
       game.displayRanks();

     }

  
}

