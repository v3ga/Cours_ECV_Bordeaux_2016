// ------------------------------------------------------
var font;
var points;
var times = 300; // nombre de frame avant d'arrêter le dessin
var noisef = 0.01; // 
var speedx = 0.4; // vitesse en x
var speedy = 0.3; // vitesse en y
var strokeAlpha = 20; // transparence des lignes


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
	
	// Sample les points du contour de la chaîne de caractères
	points = sampleText(font,"N",10,100,500,500);
}

// ------------------------------------------------------
function draw()
{
	// Pour chaque point ...
	var index = 0;
	noFill();
	stroke(0,strokeAlpha * (1.0-frameCount / times));
	var nb = points.length;
	var vx,vy,n;
	for (var i=0; i<nb; i++)
	{
		n = TWO_PI*(noise(noisef *(points[i].x+frameCount), noisef *(points[i].y+frameCount))-0.5)*2;
		vx = speedx*cos(n);
		vy = speedy*sin(n);
		line( points[i].x,points[i].y,points[(i+1)%nb].x,points[(i+1)%nb].y );
		points[i].x += vx ;
		points[i].y += vy ;
	}

	if (frameCount>times)
		noLoop();
}

// ------------------------------------------------------
function keyTyped()
{
	if (key == 's')
		save();
}

