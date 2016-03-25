var p5Canvas;
var font;
var points;
var diametre = 5;

function preload()
{
	font = loadFont("assets/futura.ttf");
}

function setup()
{
	p5Canvas = createCanvas(windowWidth,windowHeight);
	points = sampleText( font, "Hey", 15, 100,350, 400);
}

function draw()
{
	background(255);
	noFill();
	stroke(0,30);
	for (var i=0; i < points.length ; i=i+1)
	{
		diametre = dist(points[i].x, points[i].y,mouseX,mouseY)/4;
		ellipse( points[i].x, points[i].y, diametre, diametre );	
	}

}

