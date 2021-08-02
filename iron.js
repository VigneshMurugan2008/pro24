class Iron{
	constructor(x,y)
	{
	// assign options to the rubber ball
      var options={
		  restitution : 0.8,
		  friction : 3,
		  density : 30
	  }
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(this.x, this.y,10,50, options)
		this.width = 10
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
			fill("green");
			//draw the ellipse here to display the rubber ball
         rect(0,0,this.width,this.height);

			pop()
	}

}