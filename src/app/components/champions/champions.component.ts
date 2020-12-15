import { Component, OnInit } from '@angular/core';
import { Champions } from '../../models/champions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ChampionsService } from 'src/app/services/champions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {
  champion: Champions;
  myChamp: any;

  constructor(private service: ChampionsService) {
    this.champion = new Champions('','','','')
  }

  ngOnInit(){
    this.getChampions();
  }


  onSubmit(form: NgForm){


      this.service.createChampion(this.champion).subscribe((res)=>{
        console.log(res)
        this.getChampions()
      })
      form.reset();
  }

  getChampions(){
    this.service.getChampions().subscribe((res)=>{
      console.log(res)
      this.myChamp = res;
    });
  };

  borrar(champion: Champions, i: number){
    Swal.fire({
      icon: 'question',
      text: 'Estas seguro que deseas eliminar este Campeon?',
      showConfirmButton: true,
      showCancelButton: true
    })
    .then((res)=>{
      if(res.value){
        this.myChamp.splice(i,1)
        this.service.deleteChampion(champion._id).subscribe((res: any)=>{
          this.getChampions();
        });
      };
    });
  };



}
