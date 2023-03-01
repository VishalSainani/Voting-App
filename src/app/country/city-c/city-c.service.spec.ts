import { TestBed } from '@angular/core/testing';

import { CityCService } from './city-c.service';

describe('CityCService', () => {
  let service: CityCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
