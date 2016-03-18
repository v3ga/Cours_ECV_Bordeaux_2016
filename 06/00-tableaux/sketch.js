var x = Array();


function setup()
{
	createCanvas(500,500);

	x[0] = 123;
	x[1] = 248;
	x[2] = 27;
	x[3] = 12;
	x[4] = 237;

}

function draw()
{
	for ( var i=0; i<5; i=i+1 )
	{
		ellipse( x[i],250,5,5 );
	}

//	ellipse(x[0],250,5,5);
//	ellipse(x[1],250,5,5);
}

