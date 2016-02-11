// --------------------------------------
var reconnaissance;

// --------------------------------------
// Gestionnaire de démarrage
function setup()
{
	createCanvas(500,500);

	reconnaissance = new p5.SpeechRec();
	reconnaissance.onResult = result;
	reconnaissance.start();
}

// --------------------------------------
// Gestionnaire de dessin
function draw()
{
	background(255);
}

// --------------------------------------
// Gestionnaire de résultats de la 
// reconnaissance vocale
function result()
{
	console.log( reconnaissance.resultString );
}