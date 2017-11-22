/********************************************************** L'h�ritage *********************************************************/
// Cr�er une voiture et une moto par h�ritage d'un v�hicule en ES5 
function VehiculeES5(couleur, nombreRoueMotrice) {
    this.couleur = couleur;
    this.nombreRoueMotrice = nombreRoueMotrice;
    this.moteurAllumer = false;
}

VehiculeES5.prototype.demarrer = function demarrer() {
    this.moteurAllumer = true;
}

VehiculeES5.prototype.couperMoteur = function couperMoteur() {
    this.moteurAllumer = false;
};

// Une voiture est un v�hicule.
function VoitureES5(couleur, nombreRoueMotrice, nombrePlaceAssise) {
  VehiculeES5.call(this, couleur, nombreRoueMotrice);
  this.nombrePlaceAssise = nombrePlaceAssise;
}

VoitureES5.prototype = Object.create(VehiculeES5.prototype);

// Une moto est un v�hicule �galement.
function MotoES5(couleur, nombreRoueMotrice, debrider) {
  VehiculeES5.call(this, couleur, nombreRoueMotrice);
  this.debrider = debrider;
}

MotoES5.prototype = Object.create(VehiculeES5.prototype);




// Cr�er une voiture et une moto par h�ritage d'un v�hicule en ES6
class VehiculeES6 {
	constructor(couleur, nombreRoueMotrice, moteurAllumer = false) {
    this.couleur = couleur;
    this.nombreRoueMotrice = nombreRoueMotrice;
    this.moteurAllumer = moteurAllumer; 
  }
  
  demarrer() {
    this.moteurAllumer = true;
  }
  
  couperMoteur() {
    this.moteurAllumer = false;
  }
}

class VoitureES6 extends VehiculeES6 {
  constructor(couleur, nombreRoueMotrice, moteurAllumer = false, nombrePlaceAssise) {
    super(couleur, nombreRoueMotrice, moteurAllumer);
    this.nombrePlaceAssise = nombrePlaceAssise;
  } 
}

class MotoES6 extends VehiculeES6	 {
  constructor(couleur, nombreRoueMotrice, moteurAllumer = false, debrider) {
    super(couleur, nombreRoueMotrice, moteurAllumer);
    this.debrider = debrider;
  } 
}






/********************************************************** Les valeurs par d�faut *********************************************************/
function multiplierES5(a, b) {
  var b = typeof b !== 'undefined' ? b : 1; // b est facultatif

  return a*b;
}

multiplierES5(2, 5); // 10
multiplierES5(1, 5); // 5
multiplierES5(5); // 5


function multiplierES6(a, b = 1) {
  return a*b;
}

multiplierES6(2, 5); // 10
multiplierES6(1, 5); // 5
multiplierES6(5); // 5




/********************************************************** Les nouveaux mots cl�s *********************************************************/
// Le mot cl� "let"
var x = 1;

if(x < 10) {
	let v = 1; // Permet de d�clarer v comme une variable locale du if
	v = v + 21;
	v = v * 100;
	v = v / 8;
	
	console.log(v);
}

console.log(v); // v n'est pas d�finie, car v a �t� d�clar� avec 'let' et non 'var'.


for (let i = 0; i < 10; i++) {
  console.log(i); // 0, 1, 2, 3, 4 ... 9
}

console.log(i); // i n'est pas d�fini hors du contexte de la boucle



// Le mot cl� "const"
const PI = 3.141592;
PI = 3.146; // Erreur : la valeur de PI ne peut plus �tre modifi�.

const MATHEMATIQUES_CONSTANTES = {PI: 3.141592, e: 2,718281};
MATHEMATIQUES_CONSTANTES.PI = 3.146; // Aucun probl�me.



/********************************************************** Les promesses et les fonctions fl�ches *********************************************************/
// Promesses
let recupererUtilisateur = function(idUtilisateur) {
  return new Promise(function(resolve, reject) {
  // appel asynchrone au serveur pour r�cup�rer les informations d'un utilisateur...
  // � partir de la r�ponse du serveur, j'extrait les donn�es de l'utilisateur :
  let utilisateur = response.data.utilisateur;

  if(response.status === 200) {
    resolve(utilisateur);
  } else {
    reject('Cet utilisateur n\'existe pas.');
  }
})
}

recupererUtilisateur(idUtilisateur)
  .then(function (utilisateur) {
    console.log(utilisateur); // en cas de succ�s
  }, function (error) {
    console.log(error); // en cas d'erreur
});


// Arrow Functions
class Personne {
    constructor(prenom, email, bouton) {
        this.prenom = prenom;
        this.email = email;
        bouton.onclick = () => { envoyerEmail(this.email); }
    }
}


DeUnACinq = [1, 2, 3, 4, 5];
var DeDeuxADix = DeUnACinq.map((n) => n*2);

console.log(DeDeuxADix); // [2, 4, 6, 8, 10]

// En couplant Arrow functions et promesses
recupererUtilisateur(idUtilisateur)
  .then(utilisateur => recupereAmis(utilisateur)) // un traitement asynchrone en une seule ligne !
  

  
/********************************************************** Les Affectations d�structur�es, ou le 'Destructuring' *********************************************************/
// Avec un tableau
var [premier, deuxieme, troisieme] = ["Usain", "Yohan", "Justin"];

// Avec un objet
var Personne = {prenom: "Usain", nom: "Bolt"};
var {prenom, nom} = Personne;
// Equivalent � (et surtout plus pratique que) :
var prenom = personne.prenom;
var nom = personne.nom;



/********************************************************** Les collections Set & Map *********************************************************/
// Map (Dictionnaire dans lequel on peut ajouter des paires de cl�-valeur)
let zlatan = {rang: 1, name: 'Zlatan'};

let joueurs = new Map(); // Je cr�e une nouveau dictionnaire
joueurs.set(zlatan.rang, zlatan.name); // J'ajoute lobjet 'zlatan' � la cl� '1'
 
// Set (cr�ation d'une liste, sans cl� ici)
let joueurs = new Set(); // Je cr�e une nouvelle liste
joueurs.add(zlatan); // j'ajoute un joueur dans cette liste

// Op�rations possibles
joueurs.size; // affiche le nombre d'�l�ments dans la collection

joueurs.has(zlatan.rang); // Dictionnaire: affiche si oui ou non, le dictionnaire contient la cl� correspondant au rang de Zlatan.

joueurs.has(zlatan); // Liste: affiche si oui ou non, la liste contient le joueur Zlatan.

joueurs.delete(zlatan.rang); // Dictionnaire: supprime un �l�ment d'apr�s une clef.

joueurs.delete(zlatan); // Liste: supprime l'�l�ment pass� en param�tre.



/********************************************************** Les 'Template Strings' *********************************************************/
// On peut �crire des strings sur plusieurs ligne gr�ce au backtick (plut�t que d'utiliser des "+" de concat�nation)
var uneStringSurPlusieursLigne = `bla
blablalbalblalballb
balblablalabla
b
ablablablabbl`;

// On peut ins�rer des variables dans la cha�ne de caract�res avec  ${}
return `${this.name} a un mail: ${this.email}`;