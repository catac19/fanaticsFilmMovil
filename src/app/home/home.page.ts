import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { MovieService } from './services/movie.service'; // Asegúrate de tener la ruta correcta.

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

  constructor(private movieService: MovieService) {}

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
