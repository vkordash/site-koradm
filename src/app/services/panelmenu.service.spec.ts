import { TestBed } from '@angular/core/testing';

import { PanelmenuService } from './panelmenu.service';

describe('PanelmenuService', () => {
  let service: PanelmenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanelmenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
