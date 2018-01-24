import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PokemonsService {

    // constructeur ...
    constructor(// private http: HttpClient,
                private http: Http// ,
                // private pokemonsService: PokemonsService
                ) { }

    // Avant (avec 'mock-pokemons.ts')
    // Retourne tous les pokémons
//    getPokemons(): Pokemon[] {
//      return POKEMONS;
//    }

    // Après (avec les Promesses)
    getPokemons(): Promise<Pokemon[]> {
      return this.http.get('app-pokemon/pokemons')
               .toPromise()
               .then(response => response.json() as Pokemon[])
               .catch(this.handleError);
    }
    // Avant
    // Retourne le pokémon avec l'identifiant passé en paramètre
//    getPokemon(id: number) {
//      const pokemons = this.getPokemons();
//
//      for (let index = 0; index < pokemons.length; index++) {
//        if (id === pokemons[index].id) {
//          return pokemons[index];
//        }
//      }
//    }
    // Après
    getPokemon(id: number): Promise<Pokemon> {
      const url = 'app-pokemon/pokemons/' + id;

      return this.http.get(url)
        .toPromise()
        .then(response => response.json() as Pokemon)
        .catch(this.handleError);
    }

    // types de pokémons possible
    getPokemonTypes(): Array<string> {
      return [
        'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
        'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
      ];
    }

    // La méthode 'update' persiste les modifications d'un pokémon, dans l'API !
    update(pokemon: Pokemon): Promise<Pokemon> {
      const url = `app-pokemon/pokemons/${pokemon.id}`;
      const headers = new Headers({'Content-Type': 'application/json'});

      return this.http
                 .put(url, JSON.stringify(pokemon))
                 .toPromise()
                 .then(() => pokemon)
                 .catch(this.handleError);
    }

    // Gestion des erreurs
    private handleError(error: any): Promise<any> {
      console.error('Erreur : ', error); // on affiche simplement le message de l'erreur dans la console...
      return Promise.reject(error.message || error);
    }
}
