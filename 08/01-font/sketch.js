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
	// windowWidth, windowHeight = taille de la fenêtre au moment du setup
	p5Canvas = createCanvas(windowWidth,windowHeight);
	// paramètres : fonte, texte, distance entre les points, position en x, position en y, taille de la fonte
	points = sampleText( font, "Hey", 15, 100,350, 400);
}

function draw()
{
	background(255);
	for (var i=0; i < points.length ; i=i+1)
	{
		ellipse( points[i].x, points[i].y, diametre, diametre );	
	}
}

