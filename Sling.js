class Sling{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.001,
            length: 20
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA===null){
           return;
        }

        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);

    }
    
    fly(){
    this.sling.bodyA = null;
    }

    attach(){
    this.sling.bodyA= this.sling.bodyA.position;
    this.pointB
    }
           
    
}