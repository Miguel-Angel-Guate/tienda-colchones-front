import { TestBed } from '@angular/core/testing';

import { ThemostrelevantService } from './themostrelevant.service';

describe('ThemostrelevantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThemostrelevantService = TestBed.get(ThemostrelevantService);
    expect(service).toBeTruthy();
  });
});
