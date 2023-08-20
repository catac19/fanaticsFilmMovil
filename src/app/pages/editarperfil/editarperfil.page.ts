import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


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
    private toastController: ToastController
  ) { }

  subirFoto() {
    // Lógica para subir una foto o tomar una foto usando la cámara
    // Puedes usar this.camera.getPicture() si tienes instalado el plugin de la cámara
  }

  async guardarCambios() {
    // Lógica para guardar los cambios en los datos del perfil
    // Puedes realizar acciones como enviar los datos al servidor, actualizar la base de datos, etc.

    // Muestra un mensaje de éxito usando un toast
    const toast = await this.toastController.create({
      message: 'Cambios guardados correctamente',
      duration: 2000,
      position: 'bottom',
    });
    await toast.present();
  }

  ngOnInit() {
  }

}
