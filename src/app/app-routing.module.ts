import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'iniciosesion',
    loadChildren: () => import('./pages/iniciosesion/iniciosesion.module').then( m => m.IniciosesionPageModule)
  },
  {
    path: 'registrosesion',
    loadChildren: () => import('./pages/registrosesion/registrosesion.module').then( m => m.RegistrosesionPageModule)
  },
  {
    path: 'milista',
    loadChildren: () => import('./pages/milista/milista.module').then( m => m.MilistaPageModule)
  },
  {
    path: 'miperfil',
    loadChildren: () => import('./pages/miperfil/miperfil.module').then( m => m.MiperfilPageModule)
  },
  {
    path: 'peliculas',
    loadChildren: () => import('./pages/peliculas/peliculas.module').then( m => m.PeliculasPageModule)
  },
  {
    path: 'contra',
    loadChildren: () => import('./pages/contra/contra.module').then( m => m.ContraPageModule)
  },
  {
    path: 'homeadmin',
    loadChildren: () => import('./pages/homeadmin/homeadmin.module').then( m => m.HomeadminPageModule)
  },
  {
    path: 'perfiladmin',
    loadChildren: () => import('./pages/perfiladmin/perfiladmin.module').then( m => m.PerfiladminPageModule)
  },
  {
    path: 'reportados',
    loadChildren: () => import('./pages/reportados/reportados.module').then( m => m.ReportadosPageModule)
  },
  {
    path: 'peliculasadmin',
    loadChildren: () => import('./pages/peliculasadmin/peliculasadmin.module').then( m => m.PeliculasadminPageModule)
  },
  {
    path: 'editarperfil',
    loadChildren: () => import('./pages/editarperfil/editarperfil.module').then( m => m.EditarperfilPageModule)
  },
  {
    path: 'pelicula2',
    loadChildren: () => import('./pages/pelicula2/pelicula2.module').then( m => m.Pelicula2PageModule)
  },
  {
    path: 'pelicula3',
    loadChildren: () => import('./pages/pelicula3/pelicula3.module').then( m => m.Pelicula3PageModule)
  },
  {
    path: 'pelicula4',
    loadChildren: () => import('./pages/pelicula4/pelicula4.module').then( m => m.Pelicula4PageModule)
  },
  {
    path: 'pelicula5',
    loadChildren: () => import('./pages/pelicula5/pelicula5.module').then( m => m.Pelicula5PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
