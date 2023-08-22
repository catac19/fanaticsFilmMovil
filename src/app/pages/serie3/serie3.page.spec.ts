import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Serie3Page } from './serie3.page';

describe('Serie3Page', () => {
  let component: Serie3Page;
  let fixture: ComponentFixture<Serie3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Serie3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
