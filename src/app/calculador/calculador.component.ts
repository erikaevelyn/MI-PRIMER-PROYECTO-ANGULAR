import { Component, OnInit } from '@angular/core';
import { EnvioService } from '../servicio-envio/envio.service';

@Component({
  selector: 'app-calculador',
  templateUrl: './calculador.component.html',
  styleUrls: ['./calculador.component.css']
})
export class CalculadorComponent implements OnInit {

  constructor(private servicioEnvio: EnvioService) { }

  precio: string;
  precioConEnvio: number;
  

  calcular(){
    this.precioConEnvio = this.servicioEnvio.calcularConEnvio(Number(this.precio));
  }

  ngOnInit() {
  }

}
