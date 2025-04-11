import { TestBed } from '@angular/core/testing';

import { VirtReceptionService } from './virt-reception.service';

describe('VirtReceptionService', () => {
  let service: VirtReceptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VirtReceptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
