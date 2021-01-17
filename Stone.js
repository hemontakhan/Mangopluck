class Stone {
  constructor(x,y){
   var options={
     isStatic:false,
    'restitution':0,
    'friction':1.0,
    'density':1.2
  }

  this.body = Bodies.rectangle(x,y,30,30);
  this.width = 30;
  this.height = 30;
  this.image = loadImage("images/stone.png");
  World.add(world,this.body);

  }

display(){

  var angle = this.body.angle;
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  imageMode(CENTER);
  image(this.image, 0, 0, 30,30);
  pop();

}


}