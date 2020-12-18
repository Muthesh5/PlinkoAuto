const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
const Body = Matter.Body;
const Constraint = Matter.Constraint

var plingo=[];
var ball=[];
var engine,world;

function setup() {
  createCanvas(500,600);

  engine=Engine.create()

  world=engine.world

  Engine.run(engine)

  for (let i = 30; i < width-20; i=i+20) {
    plingo.push(new Plingo (i,150))
  }
  for (let i = 10; i < width-10; i=i+20) {
    plingo.push(new Plingo (i+10,100))
  }
  for (let i = 30; i < width-20; i=i+20) {
    plingo.push(new Plingo (i,250))
  }
  for (let i = 10; i < width-10; i=i+20) {
    plingo.push(new Plingo (i+10,200))
  }

  pocket1=new Ground(5,500,10,600)
  pocket2=new Ground(100,500,10,200)
  pocket3=new Ground(200,500,10,200)
  pocket4=new Ground(300,500,10,200)
  pocket5=new Ground(400,500,10,200)
  pocket6=new Ground(500,500,10,600)
  ground=new Ground(250,600,500,30)

}

function draw() {
  background(0);

  Engine.update(engine);

  for (let i = 0; i < plingo.length; i++) {
    plingo[i].display();
  }
  pocket1.display()
  pocket2.display()
  pocket3.display()
  pocket4.display()
  pocket5.display()
  pocket6.display()
  ground.display()

  if(frameCount%10===0){
    ball.push(new Ball(random(480, 20),0, 10,10));
  }

 for (var j = 0; j < ball.length; j++) {
  
    ball[j].display();
  }

  drawSprites();
}
