import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-peliculasadmin',
  templateUrl: './peliculasadmin.page.html',
  styleUrls: ['./peliculasadmin.page.scss'],
})
export class PeliculasadminPage implements OnInit {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastController: ToastController) {
    this.formulario = this.formBuilder.group({
      // ... (otros campos del formulario)
      foto: [null]
    });
  }

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

