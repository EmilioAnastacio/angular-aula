import { TestBed } from '@angular/core/testing';

import { BdCarrosService } from './bd-carros.service';

describe('BdCarrosService', () => {
  let service: BdCarrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdCarrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
