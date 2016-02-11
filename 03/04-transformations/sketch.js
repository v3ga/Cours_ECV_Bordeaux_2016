var c;
function setup()
{
	c = createCanvas(500,500);
}

function draw()
{
	translate(250,250);
	// rotate( radians(mouseX) ); // rotate( PI/4 )
	fill(200,0,0,20);
	//noStroke();
	rotate( radians(frameCount%360) ); // rotate( PI/4 )
	rectMode(CENTER);
//	rect(mouseX/2,0,10,10);
	 line( 200*cos( 10*radians(frameCount) ) ,0,mouseX,10);
}

function mousePressed()
{
	saveCanvas(c, "export.png");
	background(255);
}

