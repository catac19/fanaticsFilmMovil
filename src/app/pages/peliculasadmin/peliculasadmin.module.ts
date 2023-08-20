import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeliculasadminPageRoutingModule } from './peliculasadmin-routing.module';

import { PeliculasadminPage } from './peliculasadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeliculasadminPageRoutingModule
  ],
  declarations: [PeliculasadminPage]
})
export class PeliculasadminPageModule {}
