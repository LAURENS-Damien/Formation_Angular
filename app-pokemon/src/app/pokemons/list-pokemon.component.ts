import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css'],
  providers: [PokemonsService] // Exemple sans passer par une injection de dépendances
})

export class ListPokemonComponent implements OnInit {
  pokemons: Pokemon[] = null;
  values = '';
  values2 = '';
  values3 = '';

  constructor(
    private router: Router,
    private pokemonsService: PokemonsService) {
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemons = this.pokemonsService.getPokemons();
  }

  selectPokemon(pokemon: Pokemon): void {
    console.log('Vous avez selectionné ' + pokemon.name);
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
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
