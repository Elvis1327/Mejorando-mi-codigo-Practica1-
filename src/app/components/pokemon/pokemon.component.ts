import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemones: Array<any>;
  constructor(private service: PokemonService) { }

  ngOnInit(){
    this.getPokemons()
  }

  getPokemons(){
    let numeros = [1,2,3,4,5,6,7,8,9,10];
    let transformados = numeros.map((items)=>{
      console.log(items)
      this.service.pokemons(items).subscribe((res: any)=>{
        this.pokemones = res;
        console.log(res)
      },(err)=>{
        console.log(err)
      })
    })

  }

}
