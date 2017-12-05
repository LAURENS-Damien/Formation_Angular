import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})

export class DetailPokemonComponent implements OnInit {

  pokemon: Pokemon = null; // pokémon à afficher dans le template

  constructor(private route: ActivatedRoute, private router: Router, private pokemonsService: PokemonsService) {}
     // on injecte 'route' pour récupérer les paramètres de l'url, et 'router' pour rediriger l'utilisateur.

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      const id = +params['id'];
      this.pokemon = this.pokemonsService.getPokemon(id); // on utilise le service pour récupérer un pokémon en fonction de son identifiant.
    });
  }

  // Méthode permettant de rediriger l'utilisateur vers la page principale de l'application.
  goBack(): void {
    this.router.navigate(['/pokemons']);
  }

}
