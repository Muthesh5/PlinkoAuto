class Ball{
    constructor(x,y){
        var opt = {
            density:0.8,
            friction:0.8,
            restitution:0.5
        }
        this.x=x
        this.y=y
        this.r=5
        this.body=Bodies.circle(this.x,this.y,this.r,opt)
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        ellipseMode(CENTER);
        fill(random(0,255),random(0,255),random(0,255));
        ellipse(0, 0, this.r*2, this.r*2);
        pop()
    }

}