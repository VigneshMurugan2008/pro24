class Rubber{
	constructor(x,y)
	{
	// assign options to the rubber ball
      var options={
		  restitution : 0.3,
		  friction : 5,
		  density : 1
	  }
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(this.x, this.y,70,50, options)
		this.width = 70
		this.height = 50
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			//draw the ellipse here to display the rubber ball
         rect(0,0,this.width,this.height);

			pop()
	}

}