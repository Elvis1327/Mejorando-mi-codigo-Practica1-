import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Componentes
import { TenisComponent } from './components/tenis/tenis.component';
import { AlternoComponent } from './components/alterno/alterno.component';
import { CrudComponent } from './components/crud/crud.component';
import { ReactivoComponent  } from './components/reactivo/reactivo.component';
import { ChampionsComponent } from './components/champions/champions.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';


const routes: Routes = [
  {path: 'tenis', component: TenisComponent},
  {path: 'alterno/:id', component: AlternoComponent},
  {path: 'crud', component: CrudComponent},
  {path: 'reactivo', component: ReactivoComponent},
  {path: 'champions', component: ChampionsComponent},
  {path: 'pokemon', component: PokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
