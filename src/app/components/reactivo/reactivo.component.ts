import { Component } from '@angular/core';
import  { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})

export class ReactivoComponent{
  formulario: FormGroup;
  formulario2: FormGroup;

  constructor(private fb: FormBuilder){
    this.misFormularios();
  };

  //Getters
  get nombreNoValid(){
    return this.formulario2.get('nombre').invalid && this.formulario2.get('nombre').touched
  };
  get apellidoNoValid(){
    return this.formulario2.get('apellido').invalid && this.formulario2.get('apellido').touched
  };
  get emailNoValid(){
    return this.formulario2.get('email').invalid && this.formulario2.get('email').touched
  };
  //

  misFormularios(){
    this.formulario2 = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required]],
    })
  }

  guardar(){
    if(this.formulario2.invalid){
      Object.values(this.formulario2.controls).map((items)=>{
        items.markAsTouched();
        console.log(items);
      })
    }
  }


}