import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
    PrimerNombre: new FormControl(''),
    SegundoNombre: new FormControl(''),
    edad: new FormControl('')
  })
  

  constructor() { }

  ngOnInit() {
  }

}
