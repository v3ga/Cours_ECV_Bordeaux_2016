var p5Canvas;
var font;
var points;
var diametre = 5;
var vitesse = 0.2;
var f = 1;

function preload()
{
	font = loadFont("assets/futura.ttf");
}

function setup()
{
	p5Canvas = createCanvas(windowWidth,windowHeight);
	points = sampleText( font, "Hey", 8, 100,350, 400);
}

function draw()
{
	background(255);
	fill(0,15);
	noStroke();
	for (var i=0; i < points.length ; i=i+1)
	{
		// jouer sur le paramètre "100" !! 
		f = dist(points[i].x, points[i].y,mouseX,mouseY) / 100;
		diametre = f*100*cos( vitesse*radians(points[i].x + frameCount)) * sin( vitesse*(radians(points[i].x + frameCount)) );
		ellipse( points[i].x, points[i].y, diametre, diametre );	
	}

}

