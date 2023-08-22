import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Serie3PageRoutingModule } from './serie3-routing.module';

import { Serie3Page } from './serie3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Serie3PageRoutingModule
  ],
  declarations: [Serie3Page]
})
export class Serie3PageModule {}
