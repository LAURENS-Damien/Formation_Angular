import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { PokemonSearchService } from './pokemon-search.service';
import { Pokemon } from './pokemon';
import './rxjs-extensions';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  providers: [PokemonSearchService]
})
export class PokemonSearchComponent implements OnInit {

  private searchTerms = new Subject<string>();
  pokemons: Observable<Pokemon[]>;

  constructor(
    private pokemonSearchService: PokemonSearchService,
    private router: Router) {}

  // Ajoute un terme de recherche dans le flux de l'Observable 'searchTerms'
  search(term: string): void {
    console.log('Var term : ' + term);
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    console.log('On passe');
    this.pokemons = this.searchTerms
      .debounceTime(300)        // attendre 300ms de pause entre chaque requête
      .distinctUntilChanged()   // ignorer la recherche en cours si c'est la même que la précédente
      .switchMap(term => term
        // On retourne la réponse s'il y a des résultats...
        ? this.pokemonSearchService.search(term)
        // ... ou un observable vide sinon !
        : Observable.of<Pokemon[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Pokemon[]>([]); // en cas d'erreur, on retourne un résultat vide
      });
  }

  gotoDetail(pokemon: Pokemon): void {
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
