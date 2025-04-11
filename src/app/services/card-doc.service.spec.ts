import { TestBed } from '@angular/core/testing';

import { CardDocService } from './card-doc.service';

describe('CardDocService', () => {
  let service: CardDocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardDocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
