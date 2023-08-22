import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pelicula4Page } from './pelicula4.page';

describe('Pelicula4Page', () => {
  let component: Pelicula4Page;
  let fixture: ComponentFixture<Pelicula4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pelicula4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
