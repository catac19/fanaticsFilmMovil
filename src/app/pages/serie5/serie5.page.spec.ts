import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Serie5Page } from './serie5.page';

describe('Serie5Page', () => {
  let component: Serie5Page;
  let fixture: ComponentFixture<Serie5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Serie5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
