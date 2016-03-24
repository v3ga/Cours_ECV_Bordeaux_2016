var micro;


function setup()
{
	createCanvas(500,500);
	micro = new p5.AudioIn();
	micro.start();
}

function draw()
{
	ellipse(250,250, micro.getLevel()*1000, micro.getLevel()*1000);
}

