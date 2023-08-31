import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { AnimationController } from "@ionic/angular"

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.page.html',
  styleUrls: ['./miperfil.page.scss'],
})
export class MiperfilPage implements OnInit {
  @ViewChild('button', { read: ElementRef }) button!: ElementRef;

  constructor(private dataService: DataService, private router: Router, private animationCtrl: AnimationController) { }

  ngOnInit() {
  }

  irAEditar() {
    this.router.navigate(['/editarperfil']);
  }

  public pulseButton() {
    const animation = this.animationCtrl
      .create()
      .addElement(this.button.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, boxShadow: "0 0 0 0 rgba(44, 103, 255, 0.4)" },
        { offset: 0.7, boxShadow: "0 0 0 10px rgba(44, 103, 255, 0)" },
        { offset: 1, boxShadow: "0 0 0 0 rgba(44, 103, 255, 0)" }
      ]);

    animation.play();
  }
}

