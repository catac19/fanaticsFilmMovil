import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/db.service';
// @Component({
//   selector: 'app-homeadmin',
//   templateUrl: './homeadmin.page.html',
//   styleUrls: ['./homeadmin.page.scss'],
// })
// // import { OnInit } from '@angular/core';
// // import { DatabaseService } from 'src/app/services/db.service';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-homeadmin',
  templateUrl: './homeadmin.page.html',
  styleUrls: ['./homeadmin.page.scss'],
})
export class HomeadminPage implements OnInit {
  usuarios = [
    { id: 1, nombre: 'Matt Murdock', imagen: '/assets/icon/matt.jpg' },
    { id: 2, nombre: 'Olivia Benson', imagen: '/assets/icon/olivia.jpg' },
    { id: 3, nombre: 'Ross Lynch', imagen: '/assets/icon/ross.jpg' },
    // Agrega más usuarios aquí
  ];
  currentDate: Date = new Date();
  constructor(private db: DatabaseService) {}

  ngOnInit() {
    this.db.queryRecords().subscribe((res: any[]) => {
      console.log(res);
    });
  }
}
