class Iron{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
	var options ={
		'restitution':0.8,
		'friction': 3,
		'density':30
	}
	
		this.body=Bodies.rectangle(this.x, this.y, width,height, options)
		this.width=width;
        this.height=height;
        World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x,ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("green");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
            rectMode(CENTER);
			rect(0,0,this.width,this.height);
			pop()
	}

}