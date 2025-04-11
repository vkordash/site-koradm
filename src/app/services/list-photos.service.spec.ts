import { TestBed } from '@angular/core/testing';

import { ListPhotosService } from './list-photos.service';

describe('ListPhotosService', () => {
  let service: ListPhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
