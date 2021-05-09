class Ground{
    constructor(x,y,width){
        
        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,width,10,options);
        this.width = width;
        this.height = 10;
        World.add(myWorld,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        fill("yellow");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}