import { TestBed } from '@angular/core/testing';

import { CityBService } from './city-b.service';

describe('CityBService', () => {
  let service: CityBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
