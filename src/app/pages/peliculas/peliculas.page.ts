import { Component, OnInit } from '@angular/core';
import { Peliculas } from 'src/app/assets/peliculas';
import { ActivatedRoute, Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {
  like: string = 'danger';
  titulo: string = '';
  desc: string = '';
  img: string = '';
  comentarios!: Array<any>;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      console.log(id);
      const { titulo, img, desc, comentarios } = Peliculas[id];
      this.titulo = titulo;
      this.desc = desc;
      this.img = img;
      this.comentarios = comentarios;
    });
  }

  goBack() {
    // Utiliza el servicio Router para navegar hacia atrás
    this.router.navigate(['/home']); // Reemplaza '/' con la ruta deseada para volver atrás
  }
}

