var p5Canvas;
var font;
var points;
var diametre = 2;
var indexCurve = 0;

function preload()
{
	font = loadFont("assets/futura.ttf");
}

function setup()
{
	// windowWidth, windowHeight = taille de la fenêtre au moment du setup
	p5Canvas = createCanvas(windowWidth,windowHeight);
	// paramètres : fonte, texte, distance entre les points, position en x, position en y, taille de la fonte
	points = sampleText( font, "o", 15, 100,550, 800);

}

function draw()
{
	background(255);

	stroke(200,0,0);
	sCurves[indexCurve].draw();

	stroke(0);
	for (var i=0; i < points.length ; i=i+1)
	{
		ellipse( points[i].x, points[i].y, diametre, diametre );	
	}
}

function keyPressed()
{
	indexCurve = (indexCurve+1) % sCurves.length;
}

