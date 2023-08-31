import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ElementRef, ViewChildren, ViewChild } from '@angular/core';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';
@Component({
  selector: 'app-corazon',
  templateUrl: './corazon.component.html',
  styleUrls: ['./corazon.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDividerModule, MatIconModule],
})
export class CorazonComponent implements OnInit {
  like: boolean = false;
  constructor() {}

  public open() {
    this.like = !this.like;
    console.log(this.like);
  }

  ngOnInit() {}
}
