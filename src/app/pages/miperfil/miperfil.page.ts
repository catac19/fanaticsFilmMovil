import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.page.html',
  styleUrls: ['./miperfil.page.scss'],
})
export class MiperfilPage implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  irAEditar() {
    this.router.navigate(['/editarperfil']);
  }
}
