class Paper{
    constructor(x,y){
        var ops = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            destiny : 1.2
        }

        this.body = Bodies.circle(x,y,40,ops);
        this.radius = 40;
        this.image = loadImage("paper.png");
        World.add(myWorld,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        fill("red");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,110,110);
        pop();
    }
}