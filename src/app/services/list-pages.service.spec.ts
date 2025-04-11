import { TestBed } from '@angular/core/testing';

import { ListPagesService } from './list-pages.service';

describe('ListPagesService', () => {
  let service: ListPagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
