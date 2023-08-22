import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Serie5PageRoutingModule } from './serie5-routing.module';

import { Serie5Page } from './serie5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Serie5PageRoutingModule
  ],
  declarations: [Serie5Page]
})
export class Serie5PageModule {}
