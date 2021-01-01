class Bob{
    constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1.25,
			friction:0,
			density:1.2

			
			}
		this.body=Bodies.circle(x,y,r, options)
		this.r = r;
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			strokeWeight(3);
			fill(255,0,255)
			ellipseMode(RADIUS);
			ellipse(pos.x,pos.y,this.r, this.r);
			
			
	}


}
