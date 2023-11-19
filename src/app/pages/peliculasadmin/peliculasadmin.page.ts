import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
<<<<<<< HEAD
import { DatabaseService } from 'src/app/services/db.service';
=======
import { Camera, CameraResultType, CameraSource, PermissionStatus } from '@capacitor/camera';

>>>>>>> 487e86e12055432b588828b3710dd1b2595cb5fd
@Component({
  selector: 'app-peliculasadmin',
  templateUrl: './peliculasadmin.page.html',
  styleUrls: ['./peliculasadmin.page.scss'],
})
export class PeliculasadminPage implements OnInit {
  formulario: FormGroup;
  imagenCapturada: string | undefined = undefined;

  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private database: DatabaseService
  ) {
    this.formulario = this.formBuilder.group({
      // ... (otros campos del formulario)
      titulo: ['Pelicula', [Validators.required]],
      descripcion: ['Descripcion', [Validators.required]],
      categoria: ['1', [Validators.required]],
      foto: [null],
    });
  }
<<<<<<< HEAD

  ngOnInit() {}
=======
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
>>>>>>> 487e86e12055432b588828b3710dd1b2595cb5fd

  onSubmit() {
    // Lógica para manejar el envío del formulario
    console.log(this.formulario.value);
    const { titulo, descripcion, categoria, foto } = this.formulario.value;
    console.log(titulo, descripcion, categoria, foto);
    if (categoria === 'pelicula') {
      this.database
        .crearPelicula(titulo, 18, 4, '18/01/2022', 200, descripcion, foto)
        .then((resp) => {
          if (resp) {
            this.presentToast('Formulario enviado con éxito');
          } else {
            this.presentToast('Formulario enviado con éxito');
          }
        });
    } else {
      this.database
        .crearSerie(titulo, 18, 4, '18/01/2022', 2, descripcion, foto)
        .then((resp) => {
          if (resp) {
            this.presentToast('Formulario enviado con éxito');
          } else {
          }
        });
    }
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
      position: 'bottom',
    });
    toast.present();
  }
}
