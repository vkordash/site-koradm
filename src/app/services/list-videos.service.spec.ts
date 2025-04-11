import { TestBed } from '@angular/core/testing';

import { ListVideosService } from './list-videos.service';

describe('ListVideosService', () => {
  let service: ListVideosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListVideosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
