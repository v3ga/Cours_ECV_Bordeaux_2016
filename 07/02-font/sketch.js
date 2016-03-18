var font;
var c = "M";
var p5Canvas;
var fontSize = 500;
var points = Array();

// ------------------------------------------------------
function preload()
{
	font = loadFont("assets/futura.ttf");
}

// ------------------------------------------------------
function setup()
{
	p5Canvas = createCanvas(windowWidth,windowHeight);
	points = sampleText( font, "H", map(mouseX,0,width,2,20), 500,500,fontSize );
}

// ------------------------------------------------------
function draw()
{
	background(200);

	drawTextMetrics(p5Canvas, font, "H", 500,500,fontSize);

	for (var p of points)
	{
		ellipse(p.x,p.y,5,5);
		//line(p.x,p.y,p.x+5*map(noise(0.01*(p.x+frameCount)),0,1,-1,1),p.y+150*map(noise(0.01*(p.x+frameCount)),0,1,-1,1));
	}
}

function keyPressed()
{
	c = key;
}

