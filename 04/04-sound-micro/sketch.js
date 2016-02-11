// --------------------------------------
// Déclaration des variables
var micro; // variable qui stocke une référence vers un objet «p5.AudioIn»
var diametre=0; // variable qui va stocker le diametre d'un cercle, va dépendre du niveau du micro

// --------------------------------------
// Gestionnaire de démarrage
function setup()
{
	createCanvas(500,500);
	micro = new p5.AudioIn();
	micro.start();
}

// --------------------------------------
// Gestionnaire de dessin
function draw()
{
	diametre = micro.getLevel() * 500;

	background(255);
	noStroke();
	fill(0);
	ellipse(width/2, height/2, diametre, diametre);
}

