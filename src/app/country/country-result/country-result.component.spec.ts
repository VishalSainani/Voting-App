import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryResultComponent } from './country-result.component';

describe('CountryResultComponent', () => {
  let component: CountryResultComponent;
  let fixture: ComponentFixture<CountryResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
