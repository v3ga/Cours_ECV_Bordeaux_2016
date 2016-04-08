p5.ecv = {};

// ----------------------------------------------
function drawTextMetrics(p5Canvas,font,txt,x,y,size)
{
	font.font.drawMetrics(p5Canvas.canvas.getContext("2d"),txt,x,y,size);
}

// ----------------------------------------------
function sampleText(font,txt,step,x,y,size)
{
	var path = font.font.getPath(txt,x,y,size);
	return samplePath( path,step );
}

// ----------------------------------------------
function samplePath(path,step)
{
	var points = [];

	if (!p5.ecv.svg)
	{
		p5.ecv.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		p5.ecv.svg.setAttribute('style', 'display: none');
		p5.ecv.svg.setAttribute('id', 'svgSamplePath');
		p5.ecv.svg.setAttribute('width', width);
		p5.ecv.svg.setAttribute('height', height);
		p5.ecv.svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
		document.body.appendChild(p5.ecv.svg);
	}

	p5.ecv.svg.innerHTML = path.toSVG();
	var pathElement = document.getElementsByTagName("path")[0];
	console.log(pathElement.getBoundingClientRect());

	var d = 0.0;
	var l = pathElement.getTotalLength();
	while (d < l)
	{
		points.push( pathElement.getPointAtLength(d) );
		d+=step;
	}

	return points;
}
