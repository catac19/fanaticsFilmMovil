import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pelicula3Page } from './pelicula3.page';

describe('Pelicula3Page', () => {
  let component: Pelicula3Page;
  let fixture: ComponentFixture<Pelicula3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pelicula3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
