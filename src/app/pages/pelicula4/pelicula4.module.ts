import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pelicula4PageRoutingModule } from './pelicula4-routing.module';

import { Pelicula4Page } from './pelicula4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pelicula4PageRoutingModule
  ],
  declarations: [Pelicula4Page]
})
export class Pelicula4PageModule {}
