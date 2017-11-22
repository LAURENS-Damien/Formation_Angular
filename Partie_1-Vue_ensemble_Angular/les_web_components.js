/************************************************************ Les �l�ments personnalis�s ************************************************************/
var superHerosPrototype = Object.create(HTMLElement.prototype);
superHerosPrototype.createdCallback = function() {
this.innerHTML = '<h1>Superman</h1>';
};
var SuperHerosElement = document.registerElement('super-heros', {
prototype: superHerosPrototype
});
// Cette ligne ajoute notre �l�ment sur la page web.
document.body.appendChild(new SuperHerosElement());


/************************************************************ Le DOM de l'ombre ************************************************************/
// On cr�e un nouveau Shadow DOM sur un �l�ment de notre page, qui poss�de l'indentifiant 'paragraphe-shadow'
var shadow = document.querySelector('#paragraphe-shadow').createShadowRoot();

// Pour l'instant notre Shadow DOM est vide, mais nous pouvons lui ajouter du contenu.
shadow.innerHTML = "<p id='shadow'>Salut, Shadow DOM !</p>";

// Si on recherche notre contenu cach� depuis la console du navigateur, alors la commande pr�c�dente ne retourne rien car le DOM n'a pas acc�s au Shadow DOM !
document.querySelectorAll('#paragraphe-shadow');

// On ajoute un peu de style � notre Shadow DOM
shadow.innerHTML += '<style>p {color: red;}</style>';


/************************************************************ Les templates HTML ************************************************************/
// On reprend notre �l�ment personnalis� 'super-heros' pr�c�dent
var superHerosPrototype2 = Object.create(HTMLElement.prototype);
superHerosPrototype2.createdCallback = function() {
    // On r�cup�re notre template HTML en JavaScript
    var template = document.querySelector('#super-heros2');
    // On cr�e une copie de notre �l�ment template
    var copie = document.importNode(template.content, true);
    // On ins�re notre template HTML dans un Shadow DOM !
    this.createShadowRoot().appendChild(copie);
};

var SuperHerosElement2 = document.registerElement('super-heros2', {
prototype: superHerosPrototype2
});
// Cette ligne ajoute notre �l�ment sur la page web.
document.body.appendChild(new SuperHerosElement2());