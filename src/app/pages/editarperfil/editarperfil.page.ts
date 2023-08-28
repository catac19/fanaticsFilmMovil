import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit {
  nombre: string = 'Admin';
  apellido: string = 'istrador';
  correo: string = 'admin@yahoo.cl';
  descripcion: string = '';
  genero: string = '';
  series: string = '';
  peliculas: string = '';

  constructor(
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController
  ) {}

  subirFoto() {
    // Lógica para subir una foto o tomar una foto usando la cámara
    // Puedes usar this.camera.getPicture() si tienes instalado el plugin de la cámara
  }

  async guardarCambios() {
    if (!this.nombre || !this.apellido || !this.correo) {
      const alert = await this.alertController.create({
        header: 'campos incompletos',
        message: 'por favor, completa todos los campos',
        buttons: ['aceptar'],
      });

      await alert.present();
      return;
    } else {
      const alert = await this.toastController.create({
        header: 'Perfil guardado',
        duration: 1000,
        message: 'Felicitaciones',
        position: 'middle',
      });

      alert.present();
      setTimeout(() => {
        this.router.navigate(['/miperfil']);
      }, 1200);
      return;
    }
  }

  ngOnInit() {}
}
