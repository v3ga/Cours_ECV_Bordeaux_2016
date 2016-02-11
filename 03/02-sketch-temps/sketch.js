function setup()
{
	createCanvas(500,500);
}

function draw()
{
	//background(255);
//	ellipse( mouseX,mouseY, 500-frameCount%500, 500-frameCount%500 );
//	ellipse( mouseX,mouseY, frameCount%500, frameCount%100 );

	fill(255);
	ellipse( 100,100, 2*second(), 2*second()  );
	fill(120);
	ellipse( 200,100, 2*minute(), 2*minute()  );
	fill(0);
	ellipse( 300,100, 2*hour(), 2*hour()  );

}

