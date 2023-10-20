import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { DatabaseService } from './services/db.service';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  admin = false;
  constructor(private database: DatabaseService) {
    this.iniApp();
  }
  async logout() {
    localStorage.removeItem('user');

    window.location.href = '/';
  }
  async iniApp() {
    await this.database.initializPligin();
    const user = localStorage.getItem('user');
    console.log(user);
    if (user) {
      const parsedUser = JSON.parse(user);
      const rol = parsedUser.rol || '';
      if (rol === 'admin') {
        this.admin = true;
      }
    }
  }
}
