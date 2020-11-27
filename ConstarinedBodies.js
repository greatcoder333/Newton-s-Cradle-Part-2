class Queue {

    constructor(bodyA,pointB){
    
    var options = {
    bodyA : bodyA,
    pointB : pointB,
    length : 10,
    stiffness : 0.2
    }
    
     this.rope = Matter.Constraint.create (options)
    World.add(world,this.rope)
    }
    
    display(){
    
    push()
    strokeWeight(6)
    stroke("blue")
    line(this.rope.bodyA.position.x, this.rope.bodyA.position.y, this.rope.pointB.x,this.rope.pointB.y)
    pop()
    }
}