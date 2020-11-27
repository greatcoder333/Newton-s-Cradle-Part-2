class Roof {

constructor (x,y,width,height){

var roof = {
isStatic : true
}

this.body = Bodies.rectangle(x,y,width,height,roof)
this.width = width
this.height = height
World.add(world, this.body)
}

display(){

var pos = this.body.position
rectMode(CENTER)
fill("red")
rect(400, 200, 400, 45)
}
}