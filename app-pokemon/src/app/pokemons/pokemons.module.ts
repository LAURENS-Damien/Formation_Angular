import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPokemonComponent } from './edit-pokemon.component';
import { PokemonFormComponent } from './pokemon-form.component';
import { ReactiveFormComponent} from './reactive-form.component';
import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { PokemonSearchComponent } from './pokemon-search.component';
import { LoaderComponent } from './loader.component';
import { ShadowCardDirective } from './shadow-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonRoutingModule } from './pokemons-routing.module';
import { PokemonsService } from './pokemons.service';
import { HttpModule } from '@angular/http'; // Module HTTP
// Importations pour charger et configurer l'API simulée.
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    PokemonRoutingModule
  ],
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    EditPokemonComponent,
    ReactiveFormComponent,
    PokemonFormComponent,
    PokemonSearchComponent,
    LoaderComponent,
    ShadowCardDirective,
    PokemonTypeColorPipe
  ],
  providers: [PokemonsService]
})
export class PokemonsModule {}
