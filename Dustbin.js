class Dustbin{

  constructor(x,y,width,height){
      
    var rest1 = {
      isStatic : true
    }

     this.body = Bodies.rectangle(x,y,width,height,rest1);
     this.width = width;
     this.height = height;
     World.add(myWorld,this.body);
  }

  display(){
      var pos = this.body.position;  
      push();
      fill("white");
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width,this.height);
      pop();
  }

}