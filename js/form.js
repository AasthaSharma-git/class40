class Form {

    constructor(){

       
        this.title = createElement('h2');
        this.title.html('Car Racing Game');
        this.title.position(displayWidth/2 - 50, 0);

        this.input = createInput("Name");
        this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);

        this.button = createButton("Play");
        this.button.position(displayWidth/2 + 30, displayHeight/2);

        this.reset = createButton("Reset");
        this.reset.position(displayWidth-100,20);

    }

    disappear(){
         
        this.greetings.hide();
        this.title.hide();


    }

    display(){

      


       this.button.mousePressed(()=>{


        // console.log(this);

            var name=this.input.value();
            
            this. greetings=createElement('h3');
            this.greetings.html('Hello '+name+'!');
            this.greetings.position(displayWidth/2 - 70, displayHeight/4); 

            this.input.hide();
            this.button.hide();

            playerCount=playerCount+1;
            player.updateCount();
            

            player.name=name;
            player.index=playerCount;

            player.updateDetails();
    
    
       });

       this.reset.mousePressed(()=>{

           playerCount=0;
           player.updateCount();
           game.updateState(0);
        
        
       });







       



    }













}