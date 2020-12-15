import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TenisService } from 'src/app/services/tenis.service';

@Component({
  selector: 'app-alterno',
  templateUrl: './alterno.component.html',
  styleUrls: ['./alterno.component.css']
})
export class AlternoComponent implements OnInit {
  externo: any
  constructor(private activatedRoute: ActivatedRoute, private service: TenisService, private router: Router) { }

  ngOnInit(){
    this.getTeni()
  }

  getTeni(){
    this.activatedRoute.params.subscribe((res)=>{
      this.externo = this.service.getTeni(res['id'])
      console.log(this.externo);
    });
  };

  volver(){
    this.router.navigate(['/tenis'])
  }



}
