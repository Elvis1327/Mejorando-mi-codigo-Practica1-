
import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemones: any;
  constructor(private service: PokemonService) {
    this.getPokemons()
    console.log(this.pokemones)
  }

  ngOnInit(){

  }

  getPokemons(){
    this.service.gerMorePokemons().subscribe((res: any)=>{
      console.log(res);
      res.map((recorrer: any)=>{
        this.service.pokemons(recorrer.name).subscribe((response: any)=>{
          return this.pokemones = response;
        });
      });
    });
  };
}
