import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pelicula5Page } from './pelicula5.page';

describe('Pelicula5Page', () => {
  let component: Pelicula5Page;
  let fixture: ComponentFixture<Pelicula5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pelicula5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
