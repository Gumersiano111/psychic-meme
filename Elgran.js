class Elgran extends BaseClass {
    constructor(x, y){
      super(x,y,100,100);
      this.image = loadImage("elgran.png");
      this.Visiblity = 255;
    }
  
   display(){
    console.log(this.body.speed);
     if(this.body.speed < 12){
      super.display();
     }
     else{
       World.remove(world, this.body);
       push();
      this.Visiblity = this.Visiblity - 1;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 50, 50);
       pop();
   }
    }

    
  
    score(){
      if (this.Visiblity < 0 && this.Visiblity > -1005){
        score++;
      }
    }
  
  
  
  };