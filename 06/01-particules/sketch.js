var nb = 100;

var x = Array();
var y = Array();
var vx = Array();
var vy = Array();

var distance=0;


function setup()
{
	createCanvas(500,500);
	for (var i=0 ; i<nb ; i=i+1)
	{
		x[i] = random(200,400);
		y[i] = random(200,400);
		vx[i] = random(-3,3);
		vy[i] = random(-3,3);
	}
}

function draw()
{
	background(255);
	for (var i=0 ; i<nb; i=i+1)
	{
		x[i] = x[i] + vx[i];
		y[i] = y[i] + vy[i];

		// Droite
		if (x[i]>=500)
		{
			vx[i] = -vx[i];
		}
		// Gauche
		if (x[i]<=0)
		{
			vx[i] = -vx[i];
		}
		// Bas
		if (y[i]>=500)
		{
			vy[i] = -vy[i];			
		}
		// Haut
		if (y[i]<=0)
		{
			vy[i] = -vy[i];			
		}




		//ellipse( x[i],y[i],5,5 );
	}

	for (var i=0; i<nb ; i=i+1)
	{
		for (var k=i+1 ; k<nb ; k=k+1)
		{
			distance = dist( x[i],y[i],x[k],y[k]);
			if (  distance <= 80  )			
			{
				stroke(0, 255-distance/80 * 255);
				line( x[i],y[i],x[k],y[k] );	
			}
		}

	}



}

