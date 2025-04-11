import { TestBed } from '@angular/core/testing';

import { ListDocsService } from './list-docs.service';

describe('ListDocsService', () => {
  let service: ListDocsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListDocsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
