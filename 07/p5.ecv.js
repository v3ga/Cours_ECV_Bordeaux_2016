function sampleText(font,txt,step,x,y,size)
{
	var path = font.font.getPath(txt,x,y,size);
	return samplePath( path,step );
}

function sampleChar(font,c,step,x,y,size)
{
	var path = font.font.charToGlyph(c).getPath(x,y,size);
	return samplePath( path,step );
}

function samplePath(path,step)
{
	var x,y;
	var nb = path.commands.length;
	var c1;
	var points = Array();

	for (var i=0; i<nb ; i++)
	{
		c1 = path.commands[i];
		if (c1.type=="M"){
			x = c1.x;
			y = c1.y;
		}
		else if (c1.type=="L")
		{
			points = concat(points,sampleCurve(step,x,y,c1.x,c1.y));

//			line(x,y,c1.x,c1.y);
			x = c1.x;
			y = c1.y;

		}
 		else if (c1.type=="Q") // Quadratic
 		{
/* 			beginShape();
 			vertex(x,y);
 			quadraticVertex(c1.x1,c1.y1,c1.x,c1.y);
 			endShape();
*/
			points = concat(points,sampleCurve(step,x,y,c1.x,c1.y));

			x = c1.x;
			y = c1.y;
 		}
 		else if (c1.type=="C") // Cubic
 		{
//			bezier(x,y,c1.x1,c1.y1,c1.x2,c1.y2,c1.x,c1.y);

			points = concat(points,sampleCurve(step,x,y,c1.x,c1.y));

			x = c1.x;
			y = c1.y;
		}
	}
	return points;
}

function sampleCurve(step)
{
	var points = Array();
	// Line
	if (arguments.length == 5)
	{
		var x1 = arguments[1];
		var y1 = arguments[2];
		var x2 = arguments[3];
		var y2 = arguments[4];
		var length = dist(x1,y1,x2,y2);
		var nbPoints = Math.round(length / step);
		var dir = createVector(x2-x1,y2-y1).normalize();
		var xp = x1;
		var yp = y1;
		for (var j=0;j<nbPoints;j++)
		{
			points.push( {x:xp, y:yp} );
			xp += dir.x*step;
			yp += dir.y*step;
		}
	}
	return points;
}
