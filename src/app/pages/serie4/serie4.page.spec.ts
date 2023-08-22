import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Serie4Page } from './serie4.page';

describe('Serie4Page', () => {
  let component: Serie4Page;
  let fixture: ComponentFixture<Serie4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Serie4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
