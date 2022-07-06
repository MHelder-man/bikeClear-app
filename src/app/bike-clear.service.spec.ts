import { TestBed } from '@angular/core/testing';

import { BikeClearService } from './bike-clear.service';

describe('BikeClearService', () => {
  let service: BikeClearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikeClearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
