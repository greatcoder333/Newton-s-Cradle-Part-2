class Ball {

constructor(x,y,radius){
var options ={
restitution:1,
friction:1,
density:0.8
}

this.body = Bodies.circle(x,y,radius,options)
this.radius = radius
World.add(world, this.body)
}

display (){

var pos = this.body.position
var angle = this.body.angle
fill("purple")
strokeWeight(6)
stroke("purple")
ellipseMode(RADIUS)
ellipse(pos.x,pos.y,this.radius,this.radius)
}
}
