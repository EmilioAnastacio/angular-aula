import { TestBed } from '@angular/core/testing';

import { BdLivroService } from './bd-livro.service';

describe('BdLivroService', () => {
  let service: BdLivroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdLivroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
