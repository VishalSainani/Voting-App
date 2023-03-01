import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityBResultComponent } from './city-bresult.component';

describe('CityBResultComponent', () => {
  let component: CityBResultComponent;
  let fixture: ComponentFixture<CityBResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityBResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityBResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
