var pdf;

function setup()
{
	createCanvas(500,500, SVG);
}

function draw()
{
	//background(255);
	ellipse(mouseX,mouseY,25,25);
}

function keyPressed()
{
	if (key == "S")
	{
		pdf = createPDF();
    	pdf.beginRecord();
	}
	else if (key == 'E')
	{
        pdf.save();
    	pdf.endRecord();
	}
}

