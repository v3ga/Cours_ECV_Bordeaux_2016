var nb = 0;

var x = Array();
var y = Array();
var vx = Array();
var vy = Array();
var c = Array();
var w = Array();
var rot = Array();

var font;
var fontSize = 80;

var pdf = createPDF();

function preload()
{
	font = loadFont("assets/futura.ttf");
}

function setup()
{
	createCanvas(500,500);
	textSize(fontSize);
}

function draw()
{
	background(255);
//	noStroke();
	stroke(0);
	noFill();
	for (var i=0; i<nb; i=i+1)
	{
		vy[i] = vy[i] + 0.15;

		x[i] = x[i] + vx[i];
		y[i] = y[i] + vy[i];

		push();
		translate(x[i],y[i]);
		rotate( rot[i]+frameCount/10.0 );
		text(c[i],-w[i]/2,fontSize/2)
		pop();
	}
}

function keyPressed()
{
	x[nb] = random(200,300);
	y[nb] = 250;
	vx[nb] = random(-1,1);
	vy[nb] = random(-3,-8);
	c[nb] = key;
	w[nb] = textWidth(key);
	rot[nb] = random(0,180);

	nb = nb+1;
}



