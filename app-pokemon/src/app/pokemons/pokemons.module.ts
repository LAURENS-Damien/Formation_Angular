import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { ShadowCardDirective } from './shadow-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonRoutingModule } from './pokemons-routing.module';
import { PokemonsService } from './pokemons.service';

@NgModule({
  imports: [
    CommonModule,
    PokemonRoutingModule
  ],
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    ShadowCardDirective,
    PokemonTypeColorPipe
  ],
  providers: [PokemonsService]
})
export class PokemonsModule {}
