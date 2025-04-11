import { TestBed } from '@angular/core/testing';

import { TabViewService } from './tab-view.service';

describe('TabViewService', () => {
  let service: TabViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
