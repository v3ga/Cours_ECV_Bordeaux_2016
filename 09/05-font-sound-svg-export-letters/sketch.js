// ------------------------------------------------------
var font;
var points;
var micro;
var microLevel=0;
var txt = "M";

// ------------------------------------------------------
function preload()
{
	font = loadFont("assets/futura.ttf");
}

// ------------------------------------------------------
function setup()
{
	// Taille du canevas
	//createCanvas(800,800, SVG);
	createCanvas(800,800);
	
	// Ouverture du micro
	micro = new p5.AudioIn();
	micro.start();

	// Sample les points du contour de la chaîne de caractères
	points = sampleText(font,"p5js",14,10,500,500);
}

// ------------------------------------------------------
function draw()
{
	// Récupération du niveau du micro
	microLevel += (micro.getLevel()*1000 - microLevel)*0.1;

	// Dessin du fond
	background(255);

	// Pour chaque point ...
	noFill();
	stroke(0,150);
	strokeWeight(2);
	textSize(mouseY);
	for (var i=0; i<points.length; i++)
	{
		text(txt,points[i].x,points[i].y);
	}
}

// ------------------------------------------------------
function keyPressed()
{
	if (key == 's')
		save();
}

