import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Componentes
import { TenisComponent } from './components/tenis/tenis.component';
import { AlternoComponent } from './components/alterno/alterno.component';
import { ReactivoComponent  } from './components/reactivo/reactivo.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { AppComponent } from './app.component'


const routes: Routes = [
  {path: 'root', component: AppComponent},
  {path: 'tenis', component: TenisComponent},
  {path: 'alterno/:id', component: AlternoComponent},
  {path: 'reactivo', component: ReactivoComponent},
  {path: 'pokemon', component: PokemonComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'tenis'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
