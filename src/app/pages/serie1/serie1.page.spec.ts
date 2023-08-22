import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Serie1Page } from './serie1.page';

describe('Serie1Page', () => {
  let component: Serie1Page;
  let fixture: ComponentFixture<Serie1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Serie1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
