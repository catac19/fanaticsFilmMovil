import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Serie2PageRoutingModule } from './serie2-routing.module';

import { Serie2Page } from './serie2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Serie2PageRoutingModule
  ],
  declarations: [Serie2Page]
})
export class Serie2PageModule {}
