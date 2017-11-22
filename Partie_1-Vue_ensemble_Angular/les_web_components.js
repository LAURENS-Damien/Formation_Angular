/************************************************************ Les éléments personnalisés ************************************************************/
var superHerosPrototype = Object.create(HTMLElement.prototype);
superHerosPrototype.createdCallback = function() {
this.innerHTML = '<h1>Superman</h1>';
};
var SuperHerosElement = document.registerElement('super-heros', {
prototype: superHerosPrototype
});
// Cette ligne ajoute notre élément sur la page web.
document.body.appendChild(new SuperHerosElement());


/************************************************************ Le DOM de l'ombre ************************************************************/
// On crée un nouveau Shadow DOM sur un élément de notre page, qui possède l'indentifiant 'paragraphe-shadow'
var shadow = document.querySelector('#paragraphe-shadow').createShadowRoot();

// Pour l'instant notre Shadow DOM est vide, mais nous pouvons lui ajouter du contenu.
shadow.innerHTML = "<p id='shadow'>Salut, Shadow DOM !</p>";

// Si on recherche notre contenu caché depuis la console du navigateur, alors la commande précédente ne retourne rien car le DOM n'a pas accès au Shadow DOM !
document.querySelectorAll('#paragraphe-shadow');

// On ajoute un peu de style à notre Shadow DOM
shadow.innerHTML += '<style>p {color: red;}</style>';


/************************************************************ Les templates HTML ************************************************************/
// On reprend notre élément personnalisé 'super-heros' précédent
var superHerosPrototype2 = Object.create(HTMLElement.prototype);
superHerosPrototype2.createdCallback = function() {
    // On récupére notre template HTML en JavaScript
    var template = document.querySelector('#super-heros2');
    // On crée une copie de notre élément template
    var copie = document.importNode(template.content, true);
    // On insère notre template HTML dans un Shadow DOM !
    this.createShadowRoot().appendChild(copie);
};

var SuperHerosElement2 = document.registerElement('super-heros2', {
prototype: superHerosPrototype2
});
// Cette ligne ajoute notre élément sur la page web.
document.body.appendChild(new SuperHerosElement2());