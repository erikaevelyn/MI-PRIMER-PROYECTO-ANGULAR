import { Component, OnInit } from '@angular/core';
import { EnvioService } from '../servicio-envio/envio.service';

@Component({
  selector: 'app-item-producto',
  templateUrl: './item-producto.component.html',
  styleUrls: ['./item-producto.component.css']
})
export class ItemProductoComponent implements OnInit {

  constructor() { }

  precioConEnvio: number;

  servicioEnvio: EnvioService = new EnvioService();

  ngOnInit() {
    const precioSinEnvio= 200;
    this.precioConEnvio = this.servicioEnvio.calcularConEnvio(Number(precioSinEnvio));
  }



  


    
  


}
