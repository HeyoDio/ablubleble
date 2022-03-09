class Stone {
	constructor(x, y, width, height) {
		var options = {
			'density': 12,
			'friction': 0.9,
			'restitution': 0.8
		}
		this.width;
		this.height;
		this.body = Bodies.rectangle(x, y, width, height, options)
		World.add(world, this.body);

	}
	display() {
		var stonepos = this.body.position;
		var angle = this.body.angle;
		push()
		translate(stonepos.x, stonepos.y);
		rotate(angle);
		rectMode(CENTER)
		strokeWeight(4);
		stroke("black");
		fill("gray");
		//draw the ellipse here to display the rubber ball
		rect(0, 0, this.width, this.height);
		pop()
	}

}