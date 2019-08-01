import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MI-PRIMER-PROYECTO';

  productoNombre = 'Zapatillas';

  datosObjeto = {
    nombre: 'Erika',
    apellido: 'Rodriguez',
    edad: 27
  }


}
