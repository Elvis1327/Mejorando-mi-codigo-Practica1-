import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Usuario } from '../../models/usuario';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  public usuarios: any;
  public usuario: Usuario;
  public pokemonn: any;

  constructor(private service: CrudService) {

    this.usuario = new Usuario('','','','','','');
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm){}


}
