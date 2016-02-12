// --------------------------------------
var voix;

// --------------------------------------
// Gestionnaire de démarrage
function setup()
{
	createCanvas(500,500);

	voix = new p5.Speech("Alva");
	voix.onLoad = voicesLoaded;
}

// --------------------------------------
// Gestionnaire de dessin
function draw()
{
	background(0);
	//voix.setRate( map(mouseX,0,width,0.1,1.0) );
}

// --------------------------------------
function mousePressed()
{
	voix.setLang("fr-FR");
	voix.stop();
	voix.speak("Salut ça va aujourd'hui c'est le cours numéro quatre de design interactif");
}

// --------------------------------------
// Gestionnaire chargement des voix
function voicesLoaded()
{
	voix.listVoices();
}
