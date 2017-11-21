import { Component } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pokemons = POKEMONS;

  selectPokemon(pokemon: Pokemon) {
        console.log('Vous avez cliqué sur ' + pokemon.name);
    }
}
