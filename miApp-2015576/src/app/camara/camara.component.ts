import { Component, OnInit } from '@angular/core';
import { FotoService } from '../foto.service';
import { Foto } from 'src/foto.model';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss'],
})
export class CamaraComponent  implements OnInit {

  constructor(private FotoSvc : FotoService) { }

  ngOnInit() {}

  public fotos: Foto[] = this.FotoSvc.fotos;

  async tomarFoto(){
    await this.FotoSvc.addNewToGallery()
  }

}
