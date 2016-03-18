var nb = 1000;

var x = Array();
var y = Array();
var vx = Array();
var vy = Array();

function setup()
{
	createCanvas(500,500);

	for (var i=0; i<nb; i=i+1)
	{
		x[i] = 250;
		y[i] = 250;
		vx[i] = random(-2,2);
		vy[i] = random(-2,2);
	}
}

function draw()
{
	background(255);
	noStroke();
	fill(0);
	for (var i=0; i<nb; i=i+1)
	{
		x[i] = x[i] + vx[i];
		y[i] = y[i] + vy[i];

		if (x[i]>=500 || x[i]<=0) vx[i] *= -1;
		if (y[i]>=500 || y[i]<=0) vy[i] *= -1;

		ellipse(x[i],y[i],10,10);
	}
}


