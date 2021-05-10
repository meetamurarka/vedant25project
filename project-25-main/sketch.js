const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine, world;
var ground,paperobj;
var binImg,bin;

function preload(){
    binImg = loadImage("dustbingreen.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    paperobj = new Paper(200,450,70);

    bin = createSprite(964,520,20,20);
    bin.addImage(binImg);
    bin.scale = 0.45;

    binPart1 = new Dustbin(902,505,10,120);
    binPart2 = new Dustbin(962,565,130,10);
    binPart3 = new Dustbin(1024,505,10,120);

    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
          width: 1600,
          height: 700,
          wireframes: false
        }
      });
  
      Engine.run(engine);
      Render.run(render);
}

function draw(){
    background(230);
    Engine.update(engine);

    //text(mouseX+","+mouseY,200,200);

    
    ground.display();
    paperobj.display();
    binPart1.display();
    binPart2.display();
    binPart3.display(); 
      
    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:130,y:-145});
    }
}
