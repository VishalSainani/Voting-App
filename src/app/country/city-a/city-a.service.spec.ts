import { TestBed } from '@angular/core/testing';

import { CityAService } from './city-a.service';

describe('CityAService', () => {
  let service: CityAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
