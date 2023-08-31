import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { MovieService } from './services/movie.service'; // Asegúrate de tener la ruta correcta.
import { Series } from '../assets/series';
import { Peliculas } from '../assets/peliculas';
interface comentarios {
  usuario: number;
  desc: string;
  key: any;
}
interface Tipo {
  [rol: string]: {
    titulo: string;
    img: string;
    banner: string;
    desc: string;
    comentarios: Array<comentarios>;
  };
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('swiper', { static: false })
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  images: string[] = [];
  TodasSeries: Tipo = Series;
  TodasPeliculas: Tipo = Peliculas;

  constructor(private movieService: MovieService) {}
  keysSeries(): Array<string> {
    return Object.keys(this.TodasSeries);
  }
  keysPeliculas(): Array<string> {
    return Object.keys(this.TodasPeliculas);
  }
  async ngOnInit(): Promise<void> {
    try {
      this.images = await this.movieService.getPopularMovies();
      setTimeout(() => {
        this.swiper?.update();
      }, 100);
    } catch (error) {
      console.error(error);
    }
  }

  swiperSlideChanged(e: any) {
    // Tu código existente
  }

  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
    this.swiper?.update();
  }

  goNext() {
    this.swiper?.slideNext();
  }

  goPrev() {
    this.swiper?.slidePrev();
  }
}
