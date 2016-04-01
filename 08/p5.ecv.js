/*
function drawGlyphMetrics(p5Canvas,font,c,x,y,size)
{
	glyph.drawMetrics(p5Canvas.canvas.getContext("2d"),x,y,size);
}
*/

// ----------------------------------------------
function myLine(x1,y1,x2,y2)
{
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
	this.points = Array();

	this.sample = function(step)
	{
		points = Array();

		var length = dist(x1,y1,x2,y2);
		var nbPoints = Math.round(length / step);
		var dir = createVector(x2-x1,y2-y1).normalize();
		var xp = x1;
		var yp = y1;
		for (var j=0;j<nbPoints;j++)
		{
			this.points.push( {x:xp, y:yp} );
			xp += dir.x*step;
			yp += dir.y*step;
		}
		return this.points;
	}

	this.draw = function()
	{
		line(this.x1, this.y1, this.x2, this.y2);
	}
}

// ----------------------------------------------
function myBezierQuad(x1,y1,x2,y2,x3,y3)
{
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
	this.x3 = x3;
	this.y3 = y3;

	this.b = new Bezier( {x:x1, y:y1},{x:x2, y:y2}, {x:x3, y:y3} );
	this.points = Array();

	this.sample = function(step)
	{
		points = Array();

		var len = 0;
		var bpoints = this.b.getLUT(20);
		var blen = this.b.length();
		var t = 0;
		var tstep = 1.0 / (bpoints.length-1);
		var lengthFromT = Array();
		this.points = Array();
		for (var i=0; i<bpoints.length-1; i++)
		{
			var A = bpoints[i];
			var B = bpoints[i+1];
			var d = dist(A.x,A.y,B.x,B.y);

			lengthFromT.push( {t:t, len:len} );

			len += d;
			t+=tstep;
		}


		var nbPoints = Math.round(blen / step);
		var xp = this.x1;
		var yp = this.y1;
		len = 0;
		for (var j=0;j<nbPoints;j++)
		{
			var t = this.findTFromLength( lengthFromT, len);
			var p = this.b.get(t);
			len += step;
			this.points.push( p );
		}

		return this.points;
	}

	this.findTFromLength = function(lengthFromT, len)
	{
		var lenA,lenB;
		console.log( "l="+lengthFromT.length );
		for (var i=0; i<lengthFromT.length; i++)
		{
			if ( len >= lengthFromT[i].len )
			{
				lenA = lengthFromT[i];
				lenB = lengthFromT[i+1];
				break;
			}
		}

		var t = (len-lenA.len) / (lenB.len-lenA.len);

		return lenA.t + t * (lenB.t-lenA.t)
	}

	this.draw = function()
	{
 			beginShape();
 			vertex(x1,y1);
 			quadraticVertex(x2,y2,x3,y3);
 			endShape();
	}
}

// ----------------------------------------------
function myBezierCubic(x1,y1,x2,y2,x3,y3,x4,y4)
{
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
	this.x3 = x3;
	this.y3 = y3;
	this.x4 = x4;
	this.y4 = y4;

	this.b = new Bezier( {x:x1, y:y1},{x:x2, y:y2}, {x:x3, y:y3} );
	this.lengthFromT = Array();

	this.sample = function(step)
	{

		return this.b.getLUT(5);
	}

	this.draw = function()
	{
 			beginShape();
 			vertex(x1,y1);
 			quadraticVertex(x2,y2,x3,y3);
 			endShape();
	}
}


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
function sampleChar(font,c,step,x,y,size)
{
	var path = font.font.charToGlyph(c).getPath(x,y,size);
	return samplePath( path,step );
}

// ----------------------------------------------
var sCurves;
function samplePath(path,step)
{
	var x,y;
	var nb = path.commands.length;
	var c1;
	var points = Array();
	var curves = Array();

	for (var i=0; i<nb ; i++)
	{
		c1 = path.commands[i];
		if (c1.type=="M")
		{
			x = c1.x;
			y = c1.y;
		}
		else if (c1.type=="L")
		{
			var newLine = new myLine( x,y,c1.x,c1.y );
			curves = concat(curves, newLine);
			points = concat(points,newLine.sample(step));

			x = c1.x;
			y = c1.y;
		}
 		else if (c1.type=="Q") // Quadratic
 		{
/* 			beginShape();
 			vertex(x,y);
 			quadraticVertex(c1.x1,c1.y1, c1.x,c1.y);
 			endShape();
*/

	//		points = concat(points,sampleCurve(step,x,y,c1.x,c1.y));

			var newBezierQuad = new myBezierQuad( x,y, c1.x1,c1.y1, c1.x,c1.y);
			curves = concat(curves, newBezierQuad);
			points = concat(points,newBezierQuad.sample(step));


			x = c1.x;
			y = c1.y;
 		}
 		else if (c1.type=="C") // Cubic
 		{
	//		bezier(x,y, c1.x1,c1.y1, c1.x2,c1.y2, c1.x,c1.y);


	//		points = concat(points,sampleCurve(step,x,y,c1.x,c1.y));

			x = c1.x;
			y = c1.y;
		}
	}

	sCurves = curves;
	return points;
}
