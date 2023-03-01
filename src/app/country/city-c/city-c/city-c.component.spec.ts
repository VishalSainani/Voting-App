import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCComponent } from './city-c.component';

describe('CityCComponent', () => {
  let component: CityCComponent;
  let fixture: ComponentFixture<CityCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
