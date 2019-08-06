import { Injectable } from '@angular/core';

@Injectable()
export class EnvioService {

  constructor() { 
  }

  calcularConEnvio(precio: number){
    return precio + 25;
  }




}
