//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


//Components
import { AppComponent } from './app.component';
import { TenisComponent } from './components/tenis/tenis.component';
import { AlternoComponent } from './components/alterno/alterno.component';
import { CrudComponent } from './components/crud/crud.component';
import { ReactivoComponent } from './components/reactivo/reactivo.component';
import { ChampionsComponent } from './components/champions/champions.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    TenisComponent,
    AlternoComponent,
    CrudComponent,
    ReactivoComponent,
    ChampionsComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
