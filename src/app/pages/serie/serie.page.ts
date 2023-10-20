import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Series, serie } from '../../assets/series';
@Component({
  selector: 'app-serie',
  templateUrl: './serie.page.html',
  styleUrls: ['./serie.page.scss'],
})
export class SeriePage implements OnInit {
  like: string = 'danger';
  titulo: string = '';
  desc: string = '';
  img: string = '';
  serie: serie | undefined;
  comentarios!: Array<any>;
  constructor(private route: ActivatedRoute, private router: Router) {}
  async likeButton() {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      const { titulo, img, desc, banner, comentarios } = Series[id];
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
