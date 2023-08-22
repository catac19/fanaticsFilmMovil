import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pelicula5PageRoutingModule } from './pelicula5-routing.module';

import { Pelicula5Page } from './pelicula5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pelicula5PageRoutingModule
  ],
  declarations: [Pelicula5Page]
})
export class Pelicula5PageModule {}
