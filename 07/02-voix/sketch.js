// --------------------------------------
var reconnaissance;
var x = 250;
var y = 250;
var vx = 0;
var vy = 0;
var commande = "";

// --------------------------------------
// Gestionnaire de démarrage
function setup()
{

	reconnaissance = new p5.SpeechRec("fr-FR");
	reconnaissance.continuous = true;
	reconnaissance.interimResults = true;
	reconnaissance.onResult = result;
	reconnaissance.start();

	createCanvas(500,500);
}

// --------------------------------------
// Gestionnaire de dessin
function draw()
{
	background(255);
	x = x + vx;
	y = y + vy;
	if (x>500)
	{
		x = 0;
	}
	ellipse(x,y,50,50);
}

// --------------------------------------
// Gestionnaire de résultats de la 
// reconnaissance vocale
function result()
{
	commande = reconnaissance.resultString;


	var mots = split(commande, " ");
	if (mots.length > 0)
	{
		var derniermot = mots[mots.length-1];
		console.log( derniermot );

		if (derniermot == "droite")
		{
			vx = 1;
		}
		if (derniermot == "gauche")
		{
			vx = -1;
		}
		if (derniermot == "up")
		{
			vy = -1;
			vx = 0;
		}



	}
}