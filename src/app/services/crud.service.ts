import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Usuario } from '../models/usuario';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  constructor(private http: HttpClient){

  }

}
