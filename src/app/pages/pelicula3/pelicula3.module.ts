import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pelicula3PageRoutingModule } from './pelicula3-routing.module';

import { Pelicula3Page } from './pelicula3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pelicula3PageRoutingModule
  ],
  declarations: [Pelicula3Page]
})
export class Pelicula3PageModule {}
