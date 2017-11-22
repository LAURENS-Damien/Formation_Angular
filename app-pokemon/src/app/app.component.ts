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
  values = '';
  values2 = '';
  values3 = '';

  selectPokemon(pokemon: Pokemon) {
        console.log('Vous avez cliqué sur ' + pokemon.name);
  }

  onKey(event: KeyboardEvent) {
        this.values = 'Bonjour ' + (<HTMLInputElement>event.target).value; // texte entré par l'utilisateur
  }

  onKey2(value: string) {
    this.values2 = 'Bonjour ' + value;
  }

  onKey3(value: string) {
    this.values3 = 'Bonjour ' + value;
  }
}
