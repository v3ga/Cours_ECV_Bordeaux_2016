var img;

function preload()
{
	img = loadImage("assets/introspector_encoded_matter2.jpg");
}

function setup()
{
	createCanvas(500,500);
}

function draw()
{
	image(img,0,0);
}

