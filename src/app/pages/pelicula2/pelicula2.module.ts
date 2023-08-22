import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pelicula2PageRoutingModule } from './pelicula2-routing.module';

import { Pelicula2Page } from './pelicula2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pelicula2PageRoutingModule
  ],
  declarations: [Pelicula2Page]
})
export class Pelicula2PageModule {}
