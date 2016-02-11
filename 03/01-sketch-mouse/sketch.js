var posX = 250;
var posY = 300;
var transparence = 200;
var c;


function setup()
{
	c = createCanvas(500,500);
}

function draw()
{
	noFill();
	stroke(mouseX,0,0,transparence);
	//ellipse(250, 250, mouseX ,mouseY);
	//ellipse(mouseY, mouseX, 10, 10);
	rectMode(CENTER);
	rect(posX,posY,mouseX,mouseY);
}

// Gestionnaire d'évènements souris
function mousePressed()
{
	saveCanvas(c, "export.png");
	// Effacer le fond
	background(255); // blanc
}

function keyPressed()
{
	strokeWeight( random(1,10) );
}

