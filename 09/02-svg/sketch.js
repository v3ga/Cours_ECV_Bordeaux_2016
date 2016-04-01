var font;
var points;
var d=0;
function preload()
{
	font = loadFont("assets/futura.ttf");
}

function setup()
{
	createCanvas(800,800);

	points = sampleText(font,"p5js",15,10,500,500);
}

function draw()
{
	background(255);
	for (var p of points)
	{
		d = 5;//dist(mouseX,mouseY,p.x,p.y)/5;
		ellipse( p.x, p.y, d,d );
	}
//	noLoop();
}

function keyPressed()
{
//	save();
}

