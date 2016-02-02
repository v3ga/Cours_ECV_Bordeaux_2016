function setup()
{
	createCanvas(500,500).parent('p5jsContainer');
}

function draw()
{
	stroke(0,90);
	noFill();
	ellipse(random(500),random(500),100,100);
}
