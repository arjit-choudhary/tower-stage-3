class Box{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.4,
          'friction':0.0,
          //'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
     // this.image = loadImage("sprites/base.png");
      World.add(world, this.body);

      this.visibility = 225;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world,tihs.body);
    }
  
    display(){
      console.log(this.body.speed);
      if(this.body.speed <3){
        var angle = this.body.angle;
        var position = this.body.position;
      }
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect( 0, 0, this.width, this.height);
      pop();
  }
   else
   {
    World.remove(world,this.body);
    push();
    this.visibility = this.visibility -5;
    pop()
    World.remove(world,this.body);
    push();
    this.visibility = this.visibility -5;
    pop()
   }
   score()
   {
    blocks1.score();
    blocks2.score();
    blocks3.score();
    blocks4.score();
    blocks5.score();
    blocks6.score();
    blocks7.score();
    blocks8.score();
    blocks9.score();
}
score()
{
  if(this.visibility<0 && this.visibility>-105){
    score++;
  }
}
}

    
