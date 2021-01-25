class Division {
    constructor (x, y){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,10,250,options)
        this.width=10
        this.height=250
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER)
        fill("white")
        //stroke("white")
        rect(pos.x,pos.y,this.width,this.height)
    }
}