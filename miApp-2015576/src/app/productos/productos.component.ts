import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent  implements OnInit {

  constructor(private consulta: ConsultaService) { }

  ngOnInit() {
    this.obtenerProductos();
  }

  productos: any = [];

  obtenerProductos() : void {
    this.consulta.getProductos().subscribe(res => {
      this.productos = res;
    })
  }

}
