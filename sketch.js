const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

var particles = []
var plinkos = []
var divisions = []

var divisionsHeight = 250

function setup() {
  createCanvas(500,600);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(250,595,500,10)
  
  d1 = new Division(10,465)
  d2 = new Division(90,465)
  d3 = new Division(170,465)
  d4 = new Division(250,465)
  d5 = new Division(330,465)
  d6 = new Division(410,465)
  d7 = new Division(490,465)
  
  for(var j = 45; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75))
  }

  for(var j = 20; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175))
  }
 
  //for (var i = 0; i <= width; i= i +80){
    //divisions.push(new Division(i,height-divisionsHeight/2,10,divisionsHeight))
  //}

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),15,15))
  }

}

function draw() {
  background(0); 
  Engine.update(engine); 
  drawSprites();

  ground.display();

  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();

  
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),15,15))
  }


  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }
  
  for (var l = 0; l < particles.length; l++){
    particles[l].display()
  }

  //console.log(divisions)
  
 // divisions.pop();

}