import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Serie1PageRoutingModule } from './serie1-routing.module';

import { Serie1Page } from './serie1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Serie1PageRoutingModule
  ],
  declarations: [Serie1Page]
})
export class Serie1PageModule {}
