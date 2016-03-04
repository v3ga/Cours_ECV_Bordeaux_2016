var img;
var fonte;
var son;

function preload()
{
	img = loadImage("assets/Normals.jpg");
	fonte = loadFont("assets/futura.ttf");
	son = loadSound("assets/1085.mp3");
}

function setup()
{
	createCanvas(500,500);
		son.play();

}

function draw()
{
//	image(img,0,0,mouseX,mouseY);
	image(img,0,0);
	textFont(fonte,mouseX);
	text("Processing", 10,120);

	stroke(200,0,0);
	line(0,120,500,120);
}

