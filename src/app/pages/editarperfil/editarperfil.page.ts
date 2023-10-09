import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Permissions, PermissionType } from '@capacitor/permissions';


@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit {
  imagenCapturada: string | null = null;
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

  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl, // Puedes usar 'Base64', 'DataUrl' o 'Uri'
      source: CameraSource.Camera, // Esto abrirá la cámara
    });
  
    // 'image.dataUrl' contiene la imagen capturada en formato Data URL
    // Puedes mostrarla en una imagen o subirla a un servidor aquí
  }
  
  async seleccionarFoto() {
    await this.checkPermissions();
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos, // Esto abrirá la galería de fotos
    });
    
  
    // 'image.dataUrl' contiene la imagen seleccionada en formato Data URL
    // Puedes mostrarla en una imagen o subirla a un servidor aquí
  }


// FUNCIONES PARA PERMISOS
  async checkPermissions() {
    const result = await Permissions.query({
      name: PermissionType.Camera,
    });
    if (result.state !== 'granted') {
      await Permissions.request({ name: PermissionType.Camera });
    }
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
