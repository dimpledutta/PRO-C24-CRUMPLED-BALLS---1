
var  paperSprite, dustbinSprite,;
var groundSprite
var box1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



	
function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	
	//Create a Ground
	groundSprite = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, groundSprite);


	Engine.run(engine);
	dustbin1 = new dustbin(300,600,10,100);
	dustbin2 = new dustbin(480,600,10,100);
	dustbin3 = new dustbin(390,655,175,15);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	 Matter.Body.applyForce(paperSprite.Body,paperSprite.body.position,{x:85,y:-85})
 }
}
    