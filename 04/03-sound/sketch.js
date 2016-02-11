var sound;

function preload()
{
	sound = loadSound("assets/1085.mp3");
}

function setup()
{
	createCanvas(500,500);
}

function draw()
{
}

function mousePressed()
{
	sound.play();
}

