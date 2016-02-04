var font;

function preload()
{
	font = loadFont("data/futura.ttf");
}

function setup()
{
	createCanvas(500,500);
}

function draw()
{
	textFont(font,100);
	text("Futura",50,100);
}

