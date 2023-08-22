import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Serie4PageRoutingModule } from './serie4-routing.module';

import { Serie4Page } from './serie4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Serie4PageRoutingModule
  ],
  declarations: [Serie4Page]
})
export class Serie4PageModule {}
