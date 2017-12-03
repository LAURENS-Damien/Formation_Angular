import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./app.component.css']
})

export class DetailPokemonComponent implements OnInit {

  pokemons: Pokemon[] = null; // liste des pokémons de notre application
  pokemon: Pokemon = null; // pokémon à afficher dans le template

  constructor(private route: ActivatedRoute, private router: Router) {}
     // on injecte 'route' pour récupérer les paramètres de l'url, et 'router' pour rediriger l'utilisateur.

  ngOnInit(): void {
    // on initialise la liste de nos pokémons
    this.pokemons = POKEMONS;

  // on récupère le paramère 'id' contenu dans l'url
  const id = +this.route.snapshot.params['id'];

  // on itère sur le tableau de pokémon ensuite pour trouver le pokémon ayant le bon identifiant
  for (let i = 0; i < this.pokemons.length; i++) {
      // si on trouve un pokémon avec le bon identifiant,
        // on affecte ce pokémon à la propriété du composant
    if (this.pokemons[i].id === id) {
      this.pokemon = this.pokemons[i];
    }
  }

  }

  // Méthode permettant de rediriger l'utilisateur vers la page principale de l'application.
  goBack(): void {
  this.router.navigate(['/pokemons']);
  }

}
