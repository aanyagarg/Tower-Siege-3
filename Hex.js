class Hex {

    constructor(x,y,width,height) {

        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("hexagon (1).png");
        World.add(world,this.body);

    }

    display() {

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image ,this.body.position.x,this.body.position.y,40,40);
        pop();

        console.log(this.body.speed);
    if(this.body.speed<3){
    this.body.display();

        }else{
        World.remove(world,this.body)
        push();
        this.Visiblity=this.Visiblity-5;
        tint(255,this.Visiblity);
        image(this.image,this.body.position.x,this.body.position.y,40,40);
        pop();
  }

    }
}
