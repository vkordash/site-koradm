import { TestBed } from '@angular/core/testing';

import { ListAnonsService } from './list-anons.service';

describe('ListAnonsService', () => {
  let service: ListAnonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListAnonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
