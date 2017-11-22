// Déclaraton d'une classe
class Heros {
	// Le nombre de points de vie du héros
	pointDeVie: number;

	// Son surnom
	surnom: string;
	
	// Sa planète d'origine
	planeteOrigine: string
	
	// Un constructeur pour notre classe Heros
	constructor(paramPointDeVie: number, paramSurnom: string, planeteOrigine?: string) { // Le '?' indique que 'planeteOrigine' est facultatif. 
		this.pointDeVie = paramPointDeVie;
		this.surnom = paramSurnom;
		if(planeteOrigine) this.planeteOrigine = planeteOrigine;
	}
}

// On déclare un nombre
var pointDeVie: number = 100;

// On déclare une chaîne de caractère
var surnom: string = 'Green Lantern';

// On déclare une variable qui correspond à une classe de notre application !
var greenLantern: Heros = new Heros(pointDeVie, surnom);

// On peut créer un autre héros de type Heros
var superMan: Heros = new Heros(pointDeVie, 'Superman');

// Je peut même créer un tableau de héros, qui contient tous les héros de mon application !
var heros: Array<Heros> = [greenLantern, superMan];

