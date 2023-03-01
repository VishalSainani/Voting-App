import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityBComponent } from './city-b.component';

describe('CityBComponent', () => {
  let component: CityBComponent;
  let fixture: ComponentFixture<CityBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
