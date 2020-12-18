class Ground{
    constructor(x,y,width,height){
        var opt = {
            isStatic:true
        }
        this.width=width
        this.height=height
        this.body=Bodies.rectangle(x,y,width ,height,opt)
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rectMode(CENTER);
        fill("red");
        rect(0, 0, this.width, this.height);
        pop()
    }
}
