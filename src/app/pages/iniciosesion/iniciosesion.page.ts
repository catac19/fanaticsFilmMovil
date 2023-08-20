import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.page.html',
  styleUrls: ['./iniciosesion.page.scss'],
})
export class IniciosesionPage implements OnInit {
  
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private toastController: ToastController
    ) { }

  async login() {
    // Aquí puedes implementar la lógica de autenticación
    // Por ahora, vamos a simular un inicio de sesión exitoso
    if (this.username === 'vacalola' && this.password === 'vacololo') {
      // Redirigir a la página principal o a donde quieras después del inicio de sesión
      this.router.navigate(['/home']);
    } else {
      const toast = await this.toastController.create({
        message: 'Credenciales incorrectas',
        duration: 2000, // Duración en milisegundos
        position: 'top' // Puedes cambiar la posición a 'bottom', 'middle', etc.
      });
      toast.present();
    }
  }



  ngOnInit() {
  }

}
