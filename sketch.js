
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper1;

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper, 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
Engine.update(engine);

  drawSprites();
 paper1.dispaly();

}



