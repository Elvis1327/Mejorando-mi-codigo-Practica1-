import { Component } from '@angular/core';
import { TenisService } from 'src/app/services/tenis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tenis',
  templateUrl: './tenis.component.html',
  styleUrls: ['./tenis.component.css']
})

export class TenisComponent {
  tenis: any;

  constructor(private tenisService: TenisService, private router: Router){
    this.getTenis();
    console.log(this.tenis);
  }

  getTenis(){
    this.tenis = this.tenisService.getTenis();
  };

  verMas(id: string){
    this.router.navigate(['/alterno',id]);
  };

  cambiar(){

  };
};

