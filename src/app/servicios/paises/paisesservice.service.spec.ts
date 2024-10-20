import { TestBed } from '@angular/core/testing';

import { PaisesserviceService } from './paisesservice.service';

describe('PaisesserviceService', () => {
  let service: PaisesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaisesserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
