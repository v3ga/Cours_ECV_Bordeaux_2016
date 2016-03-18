var nb = 0;

var x = Array();
var y = Array();
var vx = Array();
var vy = Array();

function setup()
{
	createCanvas(500,500);
}

function draw()
{
	background(255);
	noStroke();
	fill(0);
	for (var i=0; i<nb; i=i+1)
	{
		vy[i] = vy[i] + 0.15;

		x[i] = x[i] + vx[i];
		y[i] = y[i] + vy[i];

		ellipse(x[i],y[i],10,10);
	}
}

function keyPressed()
{
	x[nb] = 250;
	y[nb] = 250;
	vx[nb] = random(-1,1);
	vy[nb] = random(-3,-8);

	nb = nb+1;
}


