import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/db.service';

@Component({
  selector: 'app-milista',
  templateUrl: './milista.page.html',
  styleUrls: ['./milista.page.scss'],
})
export class MilistaPage implements OnInit {
  seriesFavorites: Array<object> = [];
  peliculasFavorites: Array<object> = [];
  constructor(private database: DatabaseService) {}
  async GetSeries() {
    const user = localStorage.getItem('user');
    let resp: any;
    if (user) {
      const parsedUser = JSON.parse(user);
      const idDatos = parsedUser.idDatos || '';
      this.database.GetFavorites(idDatos || '').then((res) => {
        console.log(JSON.stringify(res), 'db');
        if (res.SeriesFavoritas !== '')
          this.seriesFavorites = res.seriesFavorites;
        if (res.PeliculasFavoritas !== '')
          this.peliculasFavorites = res.seriesFavorites;
      });
    }
    console.log(resp, 'db');
  }
  ngOnInit() {
    this.GetSeries();
  }
}
