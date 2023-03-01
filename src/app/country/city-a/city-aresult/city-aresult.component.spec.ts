import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityAResultComponent } from './city-aresult.component';

describe('CityAResultComponent', () => {
  let component: CityAResultComponent;
  let fixture: ComponentFixture<CityAResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityAResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityAResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
