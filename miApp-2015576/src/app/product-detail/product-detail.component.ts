import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent  implements OnInit {

  constructor(private consulta: ConsultaService, private ruta: ActivatedRoute) { }

  ngOnInit() {
    this.realizarConsulta(this.idProducto);
  }

  idProducto: string = this.ruta.snapshot.params['id'];

  producto: any = {};

  realizarConsulta(idProducto: string): void{
    this.consulta.getProductoDetalle(this.idProducto).subscribe(res => {
      this.producto = res;
    })
  }

}
