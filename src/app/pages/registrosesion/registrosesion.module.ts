import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrosesionPageRoutingModule } from './registrosesion-routing.module';

import { RegistrosesionPage } from './registrosesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrosesionPageRoutingModule
  ],
  declarations: [RegistrosesionPage]
})
export class RegistrosesionPageModule {}
