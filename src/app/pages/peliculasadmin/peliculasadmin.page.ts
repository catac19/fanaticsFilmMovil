import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource, PermissionStatus } from '@capacitor/camera';

@Component({
  selector: 'app-peliculasadmin',
  templateUrl: './peliculasadmin.page.html',
  styleUrls: ['./peliculasadmin.page.scss'],
})
export class PeliculasadminPage implements OnInit {
  formulario: FormGroup;
  imagenCapturada: string | undefined = undefined;

  constructor(private formBuilder: FormBuilder, private toastController: ToastController) {
    this.formulario = this.formBuilder.group({
      // ... (otros campos del formulario)
      foto: [null]
    });
  }
  loadPhoto = async () => {
    const permissionStatus = await this.checkAndRequestPermissions();
  
    if (permissionStatus.camera === 'granted' || permissionStatus.photos === 'granted') {
      try {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: CameraResultType.Uri,
          source: CameraSource.Photos
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
  
  ngOnInit() {
  }

  onSubmit() {
    // Lógica para manejar el envío del formulario
    this.presentToast('Formulario enviado con éxito');
  }

  onFileSelected(event: any) {
    // Este método se llama cuando se selecciona un archivo en el input de tipo archivo
    const file = event.target.files[0];
    // Aquí puedes realizar acciones con el archivo seleccionado
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}

