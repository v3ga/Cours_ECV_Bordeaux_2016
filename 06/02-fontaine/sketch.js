var nb = 0;

var x = Array();
var y = Array();
var vx = Array();
var vy = Array();
var lettres = Array();

var fonte;

function preload()
{

	fonte = loadFont("assets/futura.ttf");
}


function setup()
{
	createCanvas(500,500);
	textFont( fonte );
	textSize( 20 );
}

function draw()
{
	background(255);
	for (var i=0 ; i<nb; i=i+1)
	{
		vy[i] = vy[i] + 0.05;

		x[i] = x[i] + vx[i];
		y[i] = y[i] + vy[i];
	
		//ellipse(x[i],y[i],5,5);
		text(lettres[i], x[i],y[i]);
	}


}

function keyPressed()
{
	x[nb] = 250;
	y[nb] = 250;
	vx[nb] = random(-1,1);
	vy[nb] = random(-4,-2);
	lettres[nb] = key;

	nb = nb+1;

}