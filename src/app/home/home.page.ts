import { Component, ElementRef, ViewChild, OnInit  } from '@angular/core';
import Swiper from 'swiper';

interface Movie {
  poster_path: string;
  // Puedes añadir otros campos aquí si es necesario (como id, title, etc.).
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

  API_KEY: string = '8e668317eec307aac24f91f21341bbf7';
  LANGUAGE: string = 'es-ES';
  images: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getPopularMovies();
  }

  async getPopularMovies(): Promise<void> {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.API_KEY}&language=${this.LANGUAGE}`);
      const data = await response.json();

      // Usando la interfaz Movie para tipificar el parámetro movie
      this.images = data.results.slice(0, 10).map((movie: Movie) => `https://image.tmdb.org/t/p/w500/${movie.poster_path}`);
      
      // Actualiza Swiper después de cargar las imágenes
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
    // Actualiza Swiper después de inicializar
    this.swiper?.update();
  }
 
  goNext() {
    this.swiper?.slideNext();
  }
 
  goPrev() {
    this.swiper?.slidePrev();
  }

}