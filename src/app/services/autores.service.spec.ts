import { TestBed } from '@angular/core/testing';

import { Autores } from './autores.service';

describe('Autores', () => {
  let service: Autores;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Autores);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
