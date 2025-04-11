import { TestBed } from '@angular/core/testing';

import { SlideMenuService } from './slide-menu.service';

describe('SlideMenuService', () => {
  let service: SlideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
