import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource, PermissionStatus } from '@capacitor/camera';


@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit {
  imagenCapturada: string | undefined = undefined;
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


  
   loadPhoto = async () => {
    const permissionStatus = await this.checkAndRequestPermissions();
  
    if (permissionStatus.camera === 'granted' || permissionStatus.photos === 'granted') {
      try {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: CameraResultType.Uri,
          source: CameraSource.Prompt
        });
  
        const imageUrl = image.webPath;
        this.imagenCapturada = imageUrl;
      } catch (error) {
        console.error("Error loading image", error);
      }
    } else {
      console.error("Permissions are not granted");
    }
  };
  
   checkAndRequestPermissions = async () => {
    const status = await Camera.checkPermissions();
    if (status.camera === 'prompt' || status.photos === 'prompt') {
      const permissionStatus = await Camera.requestPermissions();
      return permissionStatus;
    }
    return status;
  };
  




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
