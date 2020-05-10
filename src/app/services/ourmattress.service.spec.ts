import { TestBed } from '@angular/core/testing';

import { OurmattressService } from './ourmattress.service';

describe('OurmattressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OurmattressService = TestBed.get(OurmattressService);
    expect(service).toBeTruthy();
  });
});
