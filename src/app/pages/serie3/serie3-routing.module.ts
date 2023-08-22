import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Serie3Page } from './serie3.page';

const routes: Routes = [
  {
    path: '',
    component: Serie3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Serie3PageRoutingModule {}
