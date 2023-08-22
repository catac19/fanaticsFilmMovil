import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pelicula2Page } from './pelicula2.page';

describe('Pelicula2Page', () => {
  let component: Pelicula2Page;
  let fixture: ComponentFixture<Pelicula2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pelicula2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
