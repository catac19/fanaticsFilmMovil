import { Component, OnInit } from '@angular/core';
import { Peliculas } from 'src/app/assets/peliculas';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reportados',
  templateUrl: './reportados.page.html',
  styleUrls: ['./reportados.page.scss'],
})
export class ReportadosPage implements OnInit {
  /* like: string = 'danger';
  titulo: string = '';
  desc: string = '';
  img: string = '';
  comentarios!: Array<any>; */
  usuarios = [
    { id: 2, nombre: 'Olivia Benson', imagen: '/assets/icon/olivia.jpg', comentario: 'The worse movie ever, I hate it so much, I´ve never seen a movie like this, it was an awful experience.' },
    { id: 3, nombre: 'Ross Lynch', imagen: '/assets/icon/ross.jpg', comentario: 'I love this movie, it´s the best movie ever, I´ve never seen a movie like this, it was an amazing experience.' },
    // Agrega más usuarios aquí
  ];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    /* this.route.params.subscribe((params) => {
      const id = params['id'];
      console.log(id);
      const { titulo, img, desc, comentarios } = Peliculas[id];
      this.titulo = titulo;
      this.desc = desc;
      this.img = img;
      this.comentarios = comentarios;
    }); */
  }
}
