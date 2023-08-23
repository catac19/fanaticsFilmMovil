import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit {

  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  descripcion: string = '';
  genero: string = '';
  series: string = '';
  peliculas: string = '';

  constructor(
    private toastController: ToastController,
    private alertController: AlertController
  ) { }

  subirFoto() {
    // Lógica para subir una foto o tomar una foto usando la cámara
    // Puedes usar this.camera.getPicture() si tienes instalado el plugin de la cámara
  }

  async guardarCambios() {
    if (!this.nombre || !this.apellido || !this.correo || !this.genero) {
      const alert = await this.alertController.create({
        header: 'campos incompletos',
        message: 'por favor, completa todos los campos',
        buttons:['aceptar']
      });

      await alert.present();
      return;
      
    }
  }

  ngOnInit() {
  }

}
