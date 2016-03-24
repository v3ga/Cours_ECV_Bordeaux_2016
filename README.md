Design interactif — ECV Bordeaux — 2016
====================================

*«L'ordinateur, si étonnant soit-il, n'est pour le moment qu'un outil qui permet de libérer le peintre des pesanteurs d'un héritage classique sclérosé. Son immense capacité combinatoire facilite l'investigation systématique du champ infini des possibles.»* — [Vera Molnar](http://www.veramolnar.com/)

### Cours

* [Cours #01 — Démarrer — 22 janvier](#cours01)
* [Cours #02 — Animer et montrer — 29 janvier](#cours02)
* [Cours #03 — Mémoriser — 5 février](#cours03)
* [Cours #04 — Onduler et charger — 12 février](#cours04)
* [Cours #05 — Contrôler et modéliser — 4 mars](#cours05)
* [Cours #06 — Collectionner — 11 mars](#cours06)
* [Cours #07 — Écouter et parler — 18 mars](#cours07)
* [Cours #08 — Générer — 25 mars](#cours08)
* [Méthodologie](#methodo)

### Rendus
http://www.v3ga.net/~ecv/2016/rendus/

<a name="cours01" />
## Cours #01 — Démarrer — 22 janvier

* **Bonjour !** Présentation du studio [2Roqs](http://www.2roqs.fr)
  * [projets artistiques](http://www.2roqs.fr/Exhibitions/)
  * [projets institutionnels](http://www.2roqs.fr/Works/)
  * collaborations
  * [enseignement, ateliers](http://www.v3ga.net/blog2/category/workshops/)
* **Du calculateur à Processing**, une brève histoire des ordinateurs, des langages de programmation.
  * Références de la présentation : 
    * [Machine de Turing](https://interstices.info/jcms/nn_72391/comment-fonctionne-une-machine-de-turing)
    * Ivan Sutherland — [Sketchpad](https://www.youtube.com/watch?v=USyoT_Ha_bA)
    * Douglas Engelbart — [The Mother of all demos](https://www.youtube.com/watch?v=yJDv-zdhzMY)
    * John Whitney — [Catalog](https://www.youtube.com/watch?v=TbV7loKp69s) (démonstration de son [« analog computer »](https://www.youtube.com/watch?v=5eMSPtm6u5Y))
    * Manfred Mohr — [« Une esthétique programmée »](http://emohr.com/paris-1971/)
    * Myron Krueger — [Video Place](https://www.youtube.com/watch?v=dqZyZrN3Pl0)
    * [Aaron Koblin](http://www.aaronkoblin.com)
  * Références complémentaires : 
    * [Histoire, épistémologie de l'informatique et Révolution technologique](http://cristal.inria.fr/~weis/info/histoire_de_l_info.html)  
    * [A critical history of computer graphics and animation](http://design.osu.edu/carlson/history/lesson1.html)
* **Processing**, un outil de création graphique interactive pour les artistes et designers.
  * Dérivé direct de [Design by numbers](http://dbn.media.mit.edu/) créé par [John Maeda](http://www.maedastudio.com/index.php)
  * Outils similaires de création avec du code : [Openframeworks](http://www.openframeworks.cc/), [Cinder](https://libcinder.org/)
  * Sortir de l'écran avec [Arduino](https://www.arduino.cc/) / « tangible computing » 
  * Y revenir avec [p5.js](http://p5js.org/) , « Processing pour le web »
    * [Vidéo de présentation](https://www.youtube.com/watch?v=8j0UDiN7my4) de Daniel Shiffman.  
    * **p5.js** <-> Javascript <-> HTML <-> CSS
    * Autres librairies similaires : [paper.js](http://paperjs.org/), [three.js](http://threejs.org/), [two.js](http://jonobr1.github.io/two.js/) 
* **Communauté** : 
  * www.processing.org, www.openprocessing.org  
  * quelques sites d'animation : http://beesandbombs.tumblr.com, www.beautifulprogramming.com

<a name="cours02" />
## Cours #02 — Animer et montrer — 29 janvier
* **C'est parti !**  
  * gestionnaire de démarrage ([setup](http://p5js.org/reference/#/p5/setup)) et de dessin ([draw](http://p5js.org/reference/#/p5/draw))
  * repère de dessin, dimensions de l'élément « canvas ».
  * dessin de formes géométriques : [ligne](http://p5js.org/reference/#/p5/line), [retangle](http://p5js.org/reference/#/p5/rect), [ellipse](http://p5js.org/reference/#/p5/ellipse), [triangle](http://p5js.org/reference/#/p5/triangle), [quad](http://p5js.org/reference/#/p5/quad), [polygones](http://p5js.org/reference/#/p5/beginShape), etc ...
  * modèle de couleur RGB, transparence + options de dessin ([strokeWeight](http://p5js.org/reference/#/p5/strokeWeight), [stroke](http://p5js.org/reference/#/p5/stroke), [fill](http://p5js.org/reference/#/p5/fill))
* **On bouge!**
  * aléatoire avec [random](http://p5js.org/reference/#/p5/random)
  * Le temps avec [frameCount](http://p5js.org/reference/#/p5/frameCount)
  * interactif avec la position de la souris ([mouseX](http://p5js.org/reference/#/p5/mouseX) & [mouseY](http://p5js.org/reference/#/p5/mouseY))
* **Ça ne marche pas, on fait quoi ?**
  * [A field guide de to debugging](http://p5js.org/tutorials/debugging/)
  * console javascript. 
* **Publier son travail** 
  * mise en ligne sur un espace web via FTP (télécharger [Filezilla](https://filezilla-project.org/))

#### Exercices — à rendre pour le jeudi 4 février (avant 18h)
1. Sélectionner deux formes géométriques de votre choix et générer une composition graphique programmée.
2. Ajouter du mouvement au premier sketch (position souris, aléatoire ou temps)

#### Liens
* [«L'algorithme en art et en science»](http://algorithme.beautifulseams.com/) par Louis Eveillard.  

<a name="cours03" />
## Cours #03 — Mémoriser — 5 février
* Rattrapage cours #02 : notions de temps et interactivité souris ([mouseX](http://p5js.org/reference/#/p5/mouseX) & [mouseY](http://p5js.org/reference/#/p5/mouseY)) + gestionnaires souris ([mousePressed()](http://p5js.org/reference/#/p5/mousePressed))
* **Transformations du plan**
  * déplace l'origine du repère avec [translate](http://p5js.org/reference/#/p5/translate)
  * pivoter les axes X et Y avec [rotate](http://p5js.org/reference/#/p5/rotate)
  * changer d'échelle avec [scale](http://p5js.org/reference/#/p5/scale)
* **Stocker de l'information** 
 * stockage d'informations (nombres et textes)
 * exporter le canvas ([saveCanvas](http://p5js.org/reference/#/p5/saveCanvas))

#### Liens
* Daniel Shiffman — [Variables in p5.js (mouseX,mouseY)](https://www.youtube.com/watch?v=RnS0YNuLfQQ&index=5&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
* Daniel Shiffman — [Variables in p5.js (make your own)] (https://www.youtube.com/watch?v=Bn_B3T_Vbxs&index=6&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
* John Kuiphoff — [Introduction to interactive computing](http://coursescript.com/notes/interactivecomputing/index.html)

#### Exercice — à rendre pour le jeudi 11 février (avant 18h)
1. Programmer une horloge.
2. Programmer un motif géométrique dynamique en utilisant une combinaison de translate / rotate / scale, exporter plusieurs images avec la fonction [saveCanvas](http://p5js.org/reference/#/p5/saveCanvas)

<a name="cours04" />
## Cours #04 — Onduler et charger — 12 février
* Fonctions trigonométriques : sinus et cosinus.
* Démarrer un serveur local : [Local server tutorial](https://github.com/shiffman/The-Nature-of-Code-JTerm-2015/wiki/Local-Server-Tutorial) L'interêt est de pouvoir accéder au sketch depuis le navigateur par des adresses en *http://* (et non via *file://*), ce sera nécessaire pour charger des médias (images, fontes, sons).
* chargement d'une image ([loadImage](http://p5js.org/reference/#/p5/loadImage)), d'une fonte ([loadFont](http://p5js.org/reference/#/p5/loadFont)).
* les [librairies](http://p5js.org/libraries/) dans p5.js : 
 * chargement et lecture d'un son via [p5.sound.js](http://p5js.org/reference/#/libraries/p5.sound)
 * reconnaissance et génération vocale via [p5.speech.js](http://abilitylab.nyu.edu/p5.js-speech/)

#### Exercice — à rendre pour le vendredi 4 mars
1. Réaliser un collage d'images / photos avec plusieurs images dont une au moins est en interaction avec la souris ou le son. Bonus s'il y a du son !
~~2. Imaginer un système transformant le volume sonore du micro en une image dynamique. Petit truc pour ne pas s'égosiller : jouer un morceau de musique ou des sons pour tester le système.~~

<a name="cours05" />
## Cours #05 — Contrôler et modéliser — 4 mars
* Modélisation d'une particule simple: position, vitesse, accélération.
* Structure de contrôle **if** : exécuter ou non un bloc de commandes sous certaines conditions. Application aux contraintes de déplacement d'une particule.
* Structure de contrôle **for** : répéter l'éxécution d'un bloc de commandes. Application à la structure de grille.
* Démarrage du projet, discussion, idées.
 
#### Liens
* Floss manual — [Les conditions / structure if](http://fr.flossmanuals.net/processing/les-conditions/)
* Daniel Shiffman — [Boolean expressions](https://www.youtube.com/watch?v=wsI6N9hfW7E&list=PLRqwX-V7Uu6YqykuLs00261JCqnL_NNZ_)
* Floss manual — [Les boucles / structure for](http://fr.flossmanuals.net/processing/les-repetitions/)
* Daniel Shiffman — [The for loop](https://www.youtube.com/watch?v=h4ApLHe8tbk)

#### Exercice — à rendre pour le vendredi 11 mars. 
1. Reprendre le sketch de grille (boucle for) et le personnaliser en jouant sur le motif qui devra être interactif. Exporter une série d'images et les insérer dans la page de sketch à mettre sur le FTP.

<a name="cours06" />
## Cours #06 — Collectionner — 11 mars
* Les tableaux, gestion d'une collection d'objets.
* Application à la modélisation d'un système de particules.

<a name="cours07" />
## Cours #07 — Écouter et parler — 18 mars
* captation du volume sonore via [p5.sound.js](http://p5js.org/reference/#/libraries/p5.sound) (sketch *01-micro*)
* reconnaissance vocale via [p5.speech.js](http://abilitylab.nyu.edu/p5.js-speech/)
* analayse d'une chaîne de caractère (méthode [split](http://p5js.org/reference/#/p5/split)), création d'un automate qui réagit à la voix (sketch *02-voix*)

<a name="cours08" />
## Cours #08 — Générer — 25 mars
* Récupération d'un tableau de points pour un glype d'une fonte.
* Projet de typographie générative


### Liens
* Mark Webster — [Generative typography](https://www.flickr.com/photos/tisane_01/albums/72157630223571120) 
* [generative-typografie.de](http://generative-typografie.de/)
* [opentype.js](https://nodebox.github.io/opentype.js/)
* [Prototypo](https://www.prototypo.io/)
* Richard Marxer — [Caligraft](http://www.caligraft.com/)

<a name="methodo" />
## Méthodologie de travail
### En cours
Les onze cours seront divisés en deux phases : une phase d'apprentissage des « briques » de base de la programmation, qui donneront les structures et notions élémentaires.
Pendant ce premier temps, un cours sera divisé en deux parties, la première plus « théorique » (~2h) où l'on apprendra des concepts essentiels en s'appuyant sur des exemples ludiques interactifs. La deuxième partie sera un temps d'accompagnement sur les exercices proposés pour la semaine suivante.

La deuxième phase se déroulera sur un modèle d'atelier où l'objectif sera de préparer une installation composée de créations personnelles et/ou en groupe sur un thème donné (à déterminer). Certaines notions pourront bien entendu être revues mais le cours laissera place à la réalisation de ce projet avec un accompagnement personnel.

### Exercices
Chaque semaine un ou deux exercices seront donnés à réaliser pour la semaine suivante. Pour les exercices de programmation ils seront publiés en ligne. Il sera demandé pour chaque exercice de trouver un titre et d'apporter une courte explication sur l'intention graphique. Un « template » est disponible ici : https://github.com/v3ga/Cours_ECV_Bordeaux_2016/tree/master/01/00-sketch-vide-description

Les exercices seront à rendre au plus tard le jeudi soir à 18h, jeudi qui précède le cours du vendredi, sauf si indication contraire.

### Notes
Deux notes seront données, une pour le rendu des exercices et une pour le projet en lui-même.






