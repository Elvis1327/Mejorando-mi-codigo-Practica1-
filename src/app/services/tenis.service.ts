import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TenisService {
  public tenis: any;

  constructor(){
    this.tenis = [
      {
        marca: 'Jordan 1',
        precio: 5500,
        img: 'assets/img/jordan1.png',
        color: 'Negro con rojo'
      },
      {
        marca: 'Jordan 1',
        precio: 7800,
        img: 'assets/img/jordan2.png',
        color: 'Rojo, blanco y azul'
      },
      {
        marca: 'Jordan 5',
        precio: 4000,
        img: 'assets/img/jordan4.png',
        color: 'Rojo con blanco'
      },
      {
        marca: 'Jordan 12',
        precio: 3500,
        img: 'assets/img/jordan5.png',
        color: 'Blanco con negro'
      },
      {
        marca: 'Nike Air max',
        precio: 4800,
        img: 'assets/img/nike1.png',
        color: 'Blanco con rosado'
      },
      {
        marca: 'Nike',
        precio: 2500,
        img: 'assets/img/nike2.png',
        color: 'Rojo con blanco'
      },
      {
        marca: 'Jordan 1 Off-White',
        precio: 15000,
        img: 'assets/img/off-white1.png',
        color: 'Blanco con azul'
      },
      {
        marca: 'Off-White Nike',
        precio: 12500,
        img: 'assets/img/off-white2.png',
        color: 'Negros'
      },
      {
        marca: 'Off-White Nike',
        precio: 20000,
        img: 'assets/img/off-white3.png'
      }
    ]
  };

  getTenis(){
    const ofertasDeHoy = this.tenis.filter((ofertas)=>{
      return ofertas.precio <= 10000
    })
    console.log(ofertasDeHoy);
    console.log(this.tenis)
    return ofertasDeHoy;
  };

  getTeni(idx: any){
    return this.tenis[idx]
  }
}

