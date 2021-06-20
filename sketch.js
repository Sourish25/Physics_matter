const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,body;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var body_options = {
    restitution:1.5
  }
  body = Bodies.rectangle(200,200,50,50,body_options);
  var ground_options = {
    isStatic:true
  }
  
  ground = Bodies.rectangle(200,400,400,30,ground_options);
  World.add(world,body);
  World.add(world,ground);
  console.log(body);


}

function draw() {
  background("yellow");  
  Engine.update(engine);
  console.log(body.position.x);
  console.log(body.position.y);
  rectMode(CENTER);
  ellipse(body.position.x,body.position.y,50,50);
  rect(ground.position.x,ground.position.y,400,30);
  
  
  drawSprites();
}