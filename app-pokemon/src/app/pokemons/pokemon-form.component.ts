import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonsService} from './pokemons.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {

  @Input() pokemon: Pokemon; // propriété d'entrée du composant
  types: Array<string>; // types possibles d'un pokémon : 'Eau', 'Feu', etc ...

  constructor(
    private pokemonsService: PokemonsService,
    private router: Router) { }

  ngOnInit() {
    // Initialisation de la propriété types
    this.types = this.pokemonsService.getPokemonTypes();
  }

  // Détermine si le type passé en paramètres appartient ou non au pokémon en cours d'édition.
  hasType(type: string): boolean {
    const index = this.pokemon.types.indexOf(type);
    if (index > -1) {
      return true;
    } else {
      return false;
    }
  }

  // Méthode appelée lorsque l'utilisateur ajoute ou retire un type au pokémon en cours d'édition.
  selectType($event: any, type: string): void {
    const checked = $event.target.checked;
    if ( checked ) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      if (index > -1) {
        this.pokemon.types.splice(index, 1);
      }
    }
  }

  // AVANT
  // La méthode appelée lorsque le formulaire est soumis.
//  onSubmit(): void {
//    console.log('Submit form !');
//    const link = ['/pokemon', this.pokemon.id];
//    this.router.navigate(link);
//  }
  // APRES
  // La méthode appelée lorsque le formulaire est soumis pour la validation...
  onSubmit(): void {
    this.pokemonsService.update(this.pokemon)
      .then(() => {
        const link = ['/pokemon', this.pokemon.id];
        this.router.navigate(link);
      });
  }

  // valide le nombre de 1-3 types par pokémon
  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
      return false;
    }
    return true;
  }

}
