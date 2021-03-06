import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url: any = 'https://pokeapi.co/api/v2/pokemon/'
  constructor(private http: HttpClient) {}

  pokemons(numero: any){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${numero}`)
  }

  gerMorePokemons(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=20').pipe(
    map((resp: any)=>{
      return resp.results;
    })
    );
  }
}
