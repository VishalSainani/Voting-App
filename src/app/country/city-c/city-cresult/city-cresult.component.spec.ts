import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCresultComponent } from './city-cresult.component';

describe('CityCresultComponent', () => {
  let component: CityCresultComponent;
  let fixture: ComponentFixture<CityCresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityCresultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityCresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
