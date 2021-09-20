class Stoner{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
	var options ={
		'restitution':0.8,
		'friction': 0.9,
		'density':12
	}
	
		this.body=Bodies.rectangle(this.x, this.y, width,height, options)
		this.width=width;
        this.height=height;
        World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("red");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
            rectMode(CENTER);
			rect(0,0,this.width,this.height);
			pop()
	}

}