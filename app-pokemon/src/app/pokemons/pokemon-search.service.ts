import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Pokemon } from './pokemon';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PokemonSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Pokemon[]> {
    return this.http
               .get(`app-pokemon/pokemons/?name=${term}`)
               .map((r: Response) => r.json() as Pokemon[]);
  }
}
