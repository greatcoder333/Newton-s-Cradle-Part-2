
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new Roof(400,200,400,45)
ball1 = new Ball (200,600,20)
queue1 = new Queue (ball1.body,{x:200, y:300})
ball2 = new Ball(330,598,20)
queue2 = new Queue(ball2.body,{x:330,y:300})
ball3 = new Ball(450,609,20)
queue3 = new Queue(ball3.body,{x:450,y:300}) 
ball4 = new Ball(560,609,20)
queue4 = new Queue(ball4.body,{x:560,y:300})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  drawSprites();
 roof.display();
 ball1.display();
 queue1.display();
 ball2.display();
 queue2.display();
 ball3.display();
 queue3.display();
 ball4.display();
 queue4.display();
 fill("grey")
 noStroke()
 text("X:"+mouseX+" Y:"+mouseY,mouseX,mouseY)
}

function keyPressed(){
	if(keyCode === 32){
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-400, y:-400})
	}
	}
