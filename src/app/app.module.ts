import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { CalculadorComponent } from './calculador/calculador.component';
import { ItemProductoComponent } from './item-producto/item-producto.component';
import { EnvioService } from './servicio-envio/envio.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    CalculadorComponent,
    ItemProductoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [
    EnvioService
  ],
  bootstrap: [AppComponent] //  Son los componentes que contiene a los otros componentes. 
})
export class AppModule { }
