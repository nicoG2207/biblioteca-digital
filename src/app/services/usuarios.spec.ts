import { TestBed } from '@angular/core/testing';

import { Usuarios } from './usuarios.service';

describe('Usuarios', () => {
  let service: Usuarios;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Usuarios);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
