import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Usuarios } from './usuarios';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.page.html',
  styleUrls: ['./iniciosesion.page.scss'],
})
export class IniciosesionPage implements OnInit {
  myForm!: FormGroup;
  username: string = '';
  password: string = '';
  onLogin: boolean = true;

  constructor(
    private router: Router,
    private toastController: ToastController,
    private fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  async registro() {
    this.router.navigate(['/registrosesion']);
  }
  async login() {
    // Aquí puedes implementar la lógica de autenticación
    // Por ahora, vamos a simular un inicio de sesión exitoso

    if (this.username.toLowerCase() in Usuarios) {
      console.log(Usuarios[this.username]);
      if (Usuarios[this.username].pass === this.password) {
        this.onLogin = false;
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 3000);
      } else {
        const toast = await this.toastController.create({
          message: 'Credenciales incorrectas',
          duration: 2000, // Duración en milisegundos
          position: 'top', // Puedes cambiar la posición a 'bottom', 'middle', etc.
        });
        toast.present();
      }
    } else {
      console.log('NO EXISTE');
      const toast = await this.toastController.create({
        message: 'Credenciales incorrectas',
        duration: 2000, // Duración en milisegundos
        position: 'top', // Puedes cambiar la posición a 'bottom', 'middle', etc.
      });
      toast.present();
    }
    // if (this.username === 'vacalola' && this.password === 'vacololo') {
    //   // Redirigir a la página principal o a donde quieras después del inicio de sesión
    //   this.router.navigate(['/home']);
    // } else {
    //   const toast = await this.toastController.create({
    //     message: 'Credenciales incorrectas',
    //     duration: 2000, // Duración en milisegundos
    //     position: 'top' // Puedes cambiar la posición a 'bottom', 'middle', etc.
    //   });
    //   toast.present();
    // }
  }

  ngOnInit() {}
}
