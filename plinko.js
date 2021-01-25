class Plinko {
    constructor (x, y){
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x,y,10,options)
        this.width=15
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position
        ellipseMode(CENTER)
        fill("white")
        stroke("white")
        ellipse(pos.x,pos.y,this.width)
    }
}