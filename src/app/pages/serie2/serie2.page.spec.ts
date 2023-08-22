import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Serie2Page } from './serie2.page';

describe('Serie2Page', () => {
  let component: Serie2Page;
  let fixture: ComponentFixture<Serie2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Serie2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
