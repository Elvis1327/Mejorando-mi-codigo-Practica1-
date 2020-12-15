import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Champions } from '../models/champions';


@Injectable({
  providedIn: 'root'
})
export class ChampionsService {
  url: string = 'http://localhost:4000/champions';

  constructor(private http: HttpClient){

  }

  getChampions(){
    return this.http.get('http://localhost:4000/champions').pipe(
      map((res: any)=>{
        return res.champions;
      }, (err)=>{
        console.log(err)
      })
    );
  };

  createChampion(champion: Champions){
    const newChampion = {
      champion: champion.champion,
      type: champion.type,
      position: champion.position
    };
    return this.http.post(`${this.url}`, newChampion);
  };

  deleteChampion(id: string){
    return this.http.delete(`${this.url}/${id}`)
  }

}
