import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { alumno } from '../models/alumno.model';
@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent  implements OnInit {
  //alumnos : any = ["Barbara", "Leon", "Jeffrey", "Michelle", "Tom", "Ana", "Sabrina"];
  alumnos : alumno[] = [
  ];
  constructor(private actionSheetCtrl: ActionSheetController) { }
  alumno : alumno = {
    nombre: '',
    presente: false
  }

  ngOnInit() {}
  async eliminar() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }
  async fav() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      buttons: [
        {
          text: 'Añadir a favoritos',
          data: {
            action: 'favorito',
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }

  result: string = ''
  nuevoAlumno: alumno = {
    nombre: '',
    presente: false
  }

  agregaAlumno(): void {
    this.alumnos.push(this.nuevoAlumno);

    this.nuevoAlumno = {
      nombre: '',
      presente: false
    }
  }
}