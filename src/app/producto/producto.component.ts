import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {



  @Input()
  nombre: string = "";

  @Input()
  datos: any;

  nombreBoton: string = "";

  mostrar: boolean; // por defecto falso

  ingredientes = ["azucar", "sal", "papa", "picante", "caldo"];

  asignarNombre () {

    this.nombreBoton = "Erika";
    this.mostrar = true;
  }

  registroForm = new FormGroup({
    primerNombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
    segundoNombre: new FormControl(''),
    edad: new FormControl('')
  })

  onSubmit(formulario){
    console.log(formulario);
  }


  

  constructor() { }

  ngOnInit() {
  }

  

}
