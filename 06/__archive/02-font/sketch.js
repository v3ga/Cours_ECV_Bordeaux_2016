var font;
var c = "M";
var p5Canvas;
var fontSize = 500;
var points = Array();



function preload()
{
	font = loadFont("assets/futura.ttf");
}


function setup()
{
	p5Canvas = createCanvas(windowWidth,windowHeight).canvas;
}



function draw()
{
	background(200);
	textFont(font,20);
	var x,y;
	stroke(0,150);
	noFill();

//	points = samplePath( path, map(mouseX,0,width,5,20) );
//	points = sampleChar( font,c,map(mouseX,0,width,5,20), 500,500,fontSize );
	points = sampleText( font,"Hello!",map(mouseX,0,width,2,20), 0,500,fontSize );

	for (var p of points)
	{
		// ellipse(p.x,p.y,45,45);
		line(p.x,p.y,p.x+5*map(noise(0.01*(p.x+frameCount)),0,1,-1,1),p.y+150*map(noise(0.01*(p.x+frameCount)),0,1,-1,1));
	}

//	for (var i=0; i<points.length-1;i=i+1){
//		line( points[i].x, points[i].y, points[i+1].x, points[i+1].y );
//	}
}

function keyPressed()
{
	c = key;
}

