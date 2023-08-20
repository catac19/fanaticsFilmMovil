import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  descripcion: string = '';
  genero: string = '';
  series: string = '';
  peliculas: string = '';
  
  constructor() { }
}
