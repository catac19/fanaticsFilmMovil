import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Series } from '../../assets/series';
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
  comentarios!: Array<any>;
  constructor(private route: ActivatedRoute) {}
  async likeButton() {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      const { titulo, img, desc, comentarios } = Series[id];
      this.titulo = titulo;
      this.desc = desc;
      this.img = img;
      this.comentarios = comentarios;
    });
  }
}
