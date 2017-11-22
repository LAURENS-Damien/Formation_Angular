// Déclaraton d'une classe
var Heros = /** @class */ (function () {
    // Un constructeur pour notre classe Heros
    function Heros(paramPointDeVie, paramSurnom, planeteOrigine) {
        this.pointDeVie = paramPointDeVie;
        this.surnom = paramSurnom;
        if (planeteOrigine)
            this.planeteOrigine = planeteOrigine;
    }
    return Heros;
}());
// On déclare un nombre
var pointDeVie = 100;
// On déclare une chaîne de caractère
var surnom = 'Green Lantern';
// On déclare une variable qui correspond à une classe de notre application !
var greenLantern = new Heros(pointDeVie, surnom);
// On peut créer un autre héros de type Heros
var superMan = new Heros(pointDeVie, 'Superman');
// Je peut même créer un tableau de héros, qui contient tous les héros de mon application !
var heros = [greenLantern, superMan];
