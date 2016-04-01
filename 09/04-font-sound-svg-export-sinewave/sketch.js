// ------------------------------------------------------
var font;
var points;
var micro;
var microLevel=0;
var d;
var diametre;
var angle;
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
	var index = 0;
	noFill();
	stroke(0,150);
	for (var p of points)
	{
		d = dist(mouseX,mouseY,p.x,p.y);
		// Dessin d'une ellipse à la position x & y du point
		diametre = 20+0.5*(1+cos( radians(d+frameCount) ))*100;
		angle = 0.5*(1+sin( radians(frameCount) ))*360;
		push();
		translate(p.x,p.y)
		rotate( radians(frameCount+index*4) );
		arc(0, 0, diametre, diametre, 0, radians(10+microLevel));
		pop();
		index++;
	}
}

// ------------------------------------------------------
function keyPressed()
{
	if (key == 's')
		save();
}

