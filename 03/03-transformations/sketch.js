var c;

function setup()
{
	c = createCanvas(500,500);
}

function draw()
{
	rectMode(CENTER);
	translate(250,250);
	rotate( map(mouseY,0,height,0,PI/4) );
	scale(map(mouseX,0,width,0.15,2));
	noFill();
	stroke(0,50);
	rect(0,0,250,250);
}

function mousePressed()
{
	saveCanvas(c, "export.png");
}

