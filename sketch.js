
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(200,500,100);
	bobObject2 = new Bob(300,500,100);
	bobObject3 = new Bob(400,500,100);
	bobObject4 = new Bob(500,500,100);
	bobObject5 = new Bob(600,500,100);

	roof=new Roof(400,100,730,70);
	roof1=new Roof(100,100,730,70);
	roof2=new Roof(200,100,730,70);
	roof3=new Roof(300,100,730,70);
	roof4=new Roof(400,100,730,70);
	roof5=new Roof(500,100,730,70);

	roof1.visible = false;
	roof2.visible = false;
	roof3.visible = false;
	roof4.visible = false;
	roof5.visible = false;

	rope1=new Rope(bobObject1.body,roof1.body,-500*0, 0);
	rope2=new Rope(bobObject2.body,roof2.body,-200*0, 0);
	rope3=new Rope(bobObject3.body,roof3.body,200*0, 0);
	rope4=new Rope(bobObject4.body,roof4.body,200*0, 0);
	rope5=new Rope(bobObject5.body,roof5.body,200*0, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
  roof.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
	
	}
}

