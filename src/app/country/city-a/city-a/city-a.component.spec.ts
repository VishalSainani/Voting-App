import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityAComponent } from './city-a.component';

describe('CityAComponent', () => {
  let component: CityAComponent;
  let fixture: ComponentFixture<CityAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
