
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,dustI;
var wall1,wall2,floor;

function preload()
{
	dustI = loadImage("Untitled.png");
}

function setup() {
	createCanvas(800, 700);


	myEngine = Engine.create();
	myWorld = myEngine.world;

	ground = new Ground(900,650,1800);
	floor = new Dustbin(620,640,200,20);
	wall1 = new Dustbin(510,550,20,200);
	wall2 = new Dustbin(730,550,15,200);
	paper = new Paper(100,350);
  
}


function draw() {
  
  background(200);

  Engine.update(myEngine);

  ground.display();
  floor.display();
  wall1.display();
  wall2.display();
  paper.display();
  imageMode(CENTER); 
  image(dustI,615,550,395,300);

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0.22,y:-0.22});
	}
}
