import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss'],
})
export class NavegacionComponent implements OnInit {
  routerEvents: any;
  mostrar: boolean = false;
  Rutas = ['/', '/registrosesion', '/homeadmin'];
  constructor(private router: Router) {
    this.routerEvents = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
        console.log(this.Rutas.includes(event.url), 'aca');
        if (!this.Rutas.includes(event.url)) {
          console.log(['acaca']);
          this.mostrar = true;
        }
        // Prints the current route
        // Eg.- /products
      }
    });
  }

  ngOnInit() {}
}
