
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject,sling;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,100,30);
	mango3=new mango(900,180,20);
	mango4=new mango(1000,195,30);
	mango5=new mango(1200,150,30);
	mango6=new mango(1050,140,30);
	mango7=new mango(1200,210,30);

	treeObj=new tree(1050,600);
	groundObject=new ground(width/2,600,width,20);

	stoneObj =new Stone(200,340);

	sling =new Sling(stoneObj.body,{x:240,y:450})
	
	Engine.run(engine);

}

function draw() {

  background(230);

  //Add code for displaying text 
  if(stoneObj<0 || stoneObj>1200 || stoneObj===600){
     text("PRESS SPACE TO RESTART",200,300);
     fill("black")
     textSize(20);      
     keyPressed();

  }
  image(boy ,200,365,200,300);
  


  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  stoneObj.display();

  sling.display();
  groundObject.display();


  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);

}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}


function keyPressed(){
  if(keyCode===32){
     Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
     sling=new Sling(stoneObj.body,{x:235,y:450});

     
  }

}

function mouseReleased(){
  sling.fly();
  sling.fly();
}


function detectollision(lstone,lmango){
mangoBodyPosition = lmango.body.position
stoneBodyPosition = lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
    if(distance<=lmango.r+lstone.width){
       Matter.Body.setStatic(lmango.body,false);

    }
}
