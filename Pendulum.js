class Pendulum{
    constructor(xPos,yPos,radius,color){
        var options = {
            restitution: 1,
            friction: 0,
            frictionAir: 0,
            inertia:Infinity
        }
        this.body = Bodies.circle(xPos,yPos,radius,options);
        this.radius = radius;
        World.add(world,this.body);
        this.color = color;
    }
    display(){
        var posx = this.body.position.x;
        var posy = this.body.position.y;
        push();
        translate(posx,posy);
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}