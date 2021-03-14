const  Engine  = Matter.Engine; //namespacing
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world;
var ground;
var ball;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);


  engine = Engine.create();
  world = engine.world;

  var option = {
    isStatic : true
  }
  ground = Bodies.rectangle(400,390,800,10,option);

  World.add(world,ground);
  
  var option_ball = {
    restitution : 0.8
  }

  ball= Bodies.circle(200,200,50,option_ball);
  World.add(world,ball);

  console.log(ground);
}

function draw() {
  background("black");  
  Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10);

  fill("green");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50);
  //drawSprites();
}