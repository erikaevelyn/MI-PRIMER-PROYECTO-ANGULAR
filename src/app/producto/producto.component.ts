import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {


  nombre:string = "Soy el nombre";
  constructor() { }

  ngOnInit() {
  }

}
