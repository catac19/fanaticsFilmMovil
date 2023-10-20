import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { MovieService } from './services/movie.service'; // Asegúrate de tener la ruta correcta.
import { Series } from '../assets/series';
import { Peliculas } from '../assets/peliculas';
import { DatabaseService } from '../services/db.service';
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
interface Serie {
  id: number;
  nombre: string;
  adulto: number;
  calificacion: number;
  fechaLanzamiento: string;
  nCapitulos: number;
  descripcion: string;
  imagen: string;
}
interface Pelicula {
  id: number;
  nombre: string;
  adultpo: number;
  calificacion: number;
  fechaLanzamiento: string;
  duracion: number;
  descripcion: string;
  imagen: string;
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
  series?: Array<Serie> = [];
  haveSeries?: boolean = false;
  havePeliculas?: boolean = false;
  peliculas?: Array<Pelicula> = [];
  images: string[] = [];
  TodasSeries: Tipo = Series;
  TodasPeliculas: Tipo = Peliculas;
  user = this.database.getUsers();
  newUserName: '' | undefined;
  constructor(
    private movieService: MovieService,
    private database: DatabaseService
  ) {}

  async createUser() {
    await this.database.addUser(this.newUserName || '');
    this.newUserName = '';
  }

  keysSeries(): Array<string> {
    return Object.keys(this.TodasSeries);
  }
  keysPeliculas(): Array<string> {
    return Object.keys(this.TodasPeliculas);
  }

  async ngOnInit(): Promise<void> {
    this.database.series.subscribe((res) => {
      console.log(JSON.stringify(res));
      this.series = res;
    });
    this.database.peliculas.subscribe((res) => {
      console.log(res);
      this.peliculas = res;
    });
    this.database.GetSeries().then((res) => {
      if (Array.isArray(res) && res.length > 0) {
        console.log(res);
        this.haveSeries = true;

        this.series = res;
      } else {
        this.series = [];
      }
    });
    this.database.GetPeliculas().then((res) => {
      if (Array.isArray(res) && res.length > 0) {
        console.log(res);
        this.peliculas = res;
        this.havePeliculas = true;
      } else {
        this.peliculas = [];
      }
    });
    try {
      const images = await this.movieService.getPopularMovies();
      if (Array.isArray(images)) {
        this.images = images;
      }
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
